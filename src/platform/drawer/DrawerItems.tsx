import React, { useEffect, useState } from 'react';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';
import { ITEM_HEIGHT } from './constance';
import { Pressable, Text } from 'react-native';

const AnimatedText = Animated.createAnimatedComponent(Text);

export default function DrawerItems() {
  const [isHover, setIsHover] = useState(false);
  const color = useSharedValue('gray');

  useEffect(() => {
    if (isHover) color.value = withTiming('#f9b80b');
    if (!isHover) color.value = withTiming('gray');
  }, [isHover]);

  return (
    <Pressable
      onHoverIn={() => setIsHover(true)}
      onHoverOut={() => setIsHover(false)}
      style={{
        height:ITEM_HEIGHT,
        paddingVertical:5,
        paddingHorizontal:1,
        borderBottomWidth:1,
        borderColor:"gray",
        justifyContent:'center'
      }}>
      <AnimatedText style={{ color,fontWeight:'normal'  }}>
        DrawerItems
      </AnimatedText>
    </Pressable>
  );
}
