import { KeyboardAvoidingView, Platform, SafeAreaView,useWindowDimensions } from 'react-native'
import React from 'react'
import { ViewStyle } from 'react-native';
import Toast from '../main/Toast';
import { styles } from '../main/styles';
import { PositionPropsType } from './type';

export default function BottomToast({props, state}:PositionPropsType) {
const {width} = useWindowDimensions()

  const { toasts } = state;
    let { offset, offsetBottom } = props;
    let style: ViewStyle = {
      bottom: offsetBottom || offset,
      width: width,
      justifyContent: "flex-end",
      flexDirection: "column",
    };
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "position" : undefined}
        style={[styles.container, style]}
        pointerEvents="box-none"
      >
        <SafeAreaView>
          {toasts
            .filter((t) => !t.placement || t.placement === "bottom")
            .map((toast) => (
              <Toast key={toast.id} {...toast} />
            ))}
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
}