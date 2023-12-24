import React, {useRef, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Animated,
  ViewStyle,
  Text,
  TouchableWithoutFeedback,
  PanResponder,
  PanResponderInstance,
  PanResponderGestureState,
  Platform,
  useWindowDimensions,
} from "react-native";
import { ToastProps } from "./types";


export const Toast = (props:ToastProps) => {
  let {
    id,
    onDestroy,
    icon,
    type = "normal",
    message,
    duration = 5000,
    style,
    textStyle,
    animationDuration = 250,
    animationType = "slide-in",
    successIcon,
    dangerIcon,
    warningIcon,
    successColor,
    dangerColor,
    warningColor,
    normalColor,
    placement,
    swipeEnabled,
    onPress,
  } = props;

  const containerRef = useRef<View>(null);
  const [animation] = useState(new Animated.Value(0));
  const panResponderRef = useRef<PanResponderInstance>();
  const panResponderAnimRef = useRef<Animated.ValueXY>();
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dims = useWindowDimensions();

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      useNativeDriver: Platform.OS !== "web",
      duration: animationDuration,
    }).start();
    if (duration !== 0 && typeof duration === "number") {
      closeTimeoutRef.current = setTimeout(() => {
        handleClose();
      }, duration);
    }

    return () => {
      closeTimeoutRef.current && clearTimeout(closeTimeoutRef.current);
    };
  }, [duration]);

  // Handles hide & hideAll
  useEffect(() => {
    if (!props.open) {
      // Unregister close timeout
      closeTimeoutRef.current && clearTimeout(closeTimeoutRef.current);

      // Close animation them remove from stack.
      handleClose();
    }
  }, [props.open]);

  const handleClose = () => {
    Animated.timing(animation, {
      toValue: 0,
      useNativeDriver: Platform.OS !== "web",
      duration: animationDuration,
    }).start(() => onDestroy());
  };

  const panReleaseToLeft = (gestureState: PanResponderGestureState) => {
    Animated.timing(getPanResponderAnim(), {
      toValue: { x: (-dims.width / 10) * 9, y: gestureState.dy },
      useNativeDriver: Platform.OS !== "web",
      duration: 250,
    }).start(() => onDestroy());
  };

  const panReleaseToRight = (gestureState: PanResponderGestureState) => {
    Animated.timing(getPanResponderAnim(), {
      toValue: { x: (dims.width / 10) * 9, y: gestureState.dy },
      useNativeDriver: Platform.OS !== "web",
      duration: 250,
    }).start(() => onDestroy());
  };

  const getPanResponder = () => {
    if (panResponderRef.current) return panResponderRef.current;
    const swipeThreshold = Platform.OS === "android" ? 10 : 0;
    panResponderRef.current = PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        //return true if user is swiping, return false if it's a single click
        return (
          Math.abs(gestureState.dx) > swipeThreshold ||
          Math.abs(gestureState.dy) > swipeThreshold
        );
      },
      onPanResponderMove: (_, gestureState) => {
        getPanResponderAnim()?.setValue({
          x: gestureState.dx,
          y: gestureState.dy,
        });
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 50) {
          panReleaseToRight(gestureState);
        } else if (gestureState.dx < -50) {
          panReleaseToLeft(gestureState);
        } else {
          Animated.spring(getPanResponderAnim(), {
            toValue: { x: 0, y: 0 },
            useNativeDriver: Platform.OS !== "web",
          }).start();
        }
      },
    });
    return panResponderRef.current;
  };

  const getPanResponderAnim = () => {
    if (panResponderAnimRef.current) return panResponderAnimRef.current;
    panResponderAnimRef.current = new Animated.ValueXY({ x: 0, y: 0 });
    return panResponderAnimRef.current;
  };

  if (icon === undefined) {
    switch (type) {
      case "success": 
        if (successIcon) return icon = successIcon; 
      case "danger": 
        if (dangerIcon) return icon = dangerIcon;
      case "warning":
        if (warningIcon) return icon = warningIcon;
    }
  }

  let backgroundColor = "";
  switch (type) {
    case "success":
      backgroundColor = successColor || "rgb(46, 125, 50)";
      break;
    case "danger":
      backgroundColor = dangerColor || "rgb(211, 47, 47)";
      break;
    case "warning":
      backgroundColor = warningColor || "rgb(237, 108, 2)";
      break;
    default:
      backgroundColor = normalColor || "#333";
  }

  const animationStyle: Animated.WithAnimatedObject<ViewStyle> = {
    opacity: animation,
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: placement === "bottom" ? [20, 0] : [-20, 0],
        }),
      },
    ],
  };

  if (swipeEnabled) {
    animationStyle.transform?.push(
      getPanResponderAnim().getTranslateTransform()[0]
    );
  }

  if (animationType === "zoom-in") {
    animationStyle.transform?.push({
      scale: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0.7, 1],
      }),
    });
  }

  return (
    <Animated.View
      pointerEvents={"box-none"}
      ref={containerRef}
      {...(swipeEnabled ? getPanResponder().panHandlers : null)}
      style={[styles.container, animationStyle]}
    >
      {props.renderType && props.renderType[type] ? (
        props.renderType[type](props)
      ) : props.renderToast ? (
        props.renderToast(props)
      ) : (
        <TouchableWithoutFeedback
          disabled={!onPress}
          onPress={() => onPress && onPress(id)}
        >
          <View
            style={[
              styles.toastContainer,
              { maxWidth: (dims.width / 10) * 9, backgroundColor },
              style,
            ]}
          >
            {icon ? <View style={styles.iconContainer}>{icon}</View> : null}
            {React.isValidElement(message) ? (
              message
            ) : (
              <Text style={[styles.message, textStyle]}>{message}</Text>
            )}
          </View>
        </TouchableWithoutFeedback>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: { width: "100%", alignItems: "center" },
  toastContainer: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  message: {
    color: "#fff",
    fontWeight: "500",
  },
  iconContainer: {
    marginRight: 5,
  },
});

