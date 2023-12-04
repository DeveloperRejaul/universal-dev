import React, { useEffect, useState } from 'react';
import { Pressable, Text } from '@gluestack-ui/themed';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';
import { ITEM_HEIGHT } from './constance';

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
      h={ITEM_HEIGHT}
      px={'$5'}
      py={'$1'}
      borderBottomWidth={'$1'}
      borderColor='$coolGray200'
      justifyContent='center'>
      <AnimatedText style={{ color }} fontWeight='$normal' color='gray'>
        DrawerItems
      </AnimatedText>
    </Pressable>
  );
}
