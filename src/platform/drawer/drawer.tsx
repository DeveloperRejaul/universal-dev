import React, { useEffect } from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import Icon from '@expo/vector-icons/Ionicons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import DrawerItems from './DrawerItems';
import { ITEM_HEIGHT } from './constance';
import { Text, View } from 'react-native';
import { Pressable } from 'react-native';


const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedBox = Animated.createAnimatedComponent(View);
const ANIMATED_BOX_HEIGHT = ITEM_HEIGHT * 7;


const CustomDrawer: React.FC<DrawerContentComponentProps> = (props) => {
  const [isHoverWinter, setIsHoverWinter] = React.useState(false);
  const [isWinterBtnClick, setIsWinterBtnClick] = React.useState(false);
  const btnClick = useSharedValue(false);
  const hover = useSharedValue('#848484');

  // create hover animation
  useEffect(() => {
    if (isHoverWinter) hover.value = withTiming('#f9b80b', { duration: 500 });
    if (!isHoverWinter) hover.value = withTiming('#848484', { duration: 500 });
  }, [isHoverWinter]);
  const animatedStyle = useAnimatedStyle(() => ({ color: hover.value }));

  // handle button click
  useEffect(() => {
    if (isWinterBtnClick) btnClick.value = true;
    if (!isWinterBtnClick) btnClick.value = false;
  }, [isWinterBtnClick]);

  const btnAnimationStyle = useAnimatedStyle(() => ({
    backgroundColor: btnClick.value
      ? withTiming('#f9b80b', { duration: 300 })
      : withTiming('#fff', { duration: 300 }),
  }));

  const iconAnimationStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: btnClick.value
          ? withTiming('90deg', { duration: 300 })
          : withTiming('0deg', { duration: 300 }),
      },
    ],
    color: btnClick.value
      ? withTiming('#fff', { duration: 300 })
      : withTiming('gray', { duration: 300 }),
  }));

  // items style animation
  const itemsAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: btnClick.value
        ? withTiming(ANIMATED_BOX_HEIGHT, { duration: 300 })
        : withTiming(0, { duration: 300 }),
    };
  });

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

      <View>
        {/* Winter Collection  */}
        <Pressable
          onHoverIn={() => setIsHoverWinter(true)}
          onHoverOut={() => setIsHoverWinter(false)}
          style={{
            flexDirection:"row",
            borderTopWidth:1,
            borderColor:"gray",
            alignItems:"center",
            paddingLeft:5,
            justifyContent:"space-between"
          }}
          >
          <AnimatedText style={[animatedStyle,{paddingHorizontal:2}]}>
            Winter Collection
          </AnimatedText>
          <AnimatedPressable
            style={[btnAnimationStyle,{paddingHorizontal:2, paddingVertical:4, borderLeftWidth:1, borderColor:"gray"}]}
            onPress={() => setIsWinterBtnClick((pre) => !pre)}
            >
            <AnimatedText style={iconAnimationStyle}>
              <Icon name='chevron-forward' size={20} />
            </AnimatedText>
          </AnimatedPressable>
        </Pressable>
        <AnimatedBox style={[itemsAnimatedStyle, { overflow: 'hidden' }]}>
          <DrawerItems />
          <DrawerItems />
          <DrawerItems />
          <DrawerItems />
          <DrawerItems />
          <DrawerItems />
          <DrawerItems />
        </AnimatedBox>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
