import { Box, Text } from '@gluestack-ui/themed';
import { Pressable } from '@gluestack-ui/themed';
import React, { useEffect, useState } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Icon from '@expo/vector-icons/Feather';
const AnimatedBox = Animated.createAnimatedComponent(Box);

export default function AnimatedButton() {
  const [isHover, setHover] = useState(false);
  const translateY = useSharedValue(0);

  useEffect(() => {
    if (isHover) {
      translateY.value = withTiming(29, { duration: 500 });
    } else {
      translateY.value = withTiming(0, { duration: 500 });
    }
  }, [isHover]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: -translateY.value }],
    };
  });

  return (
    <Pressable
      overflow='hidden'
      bg='$black'
      width={'80%'}
      h={'$8'}
      px={'$1'}
      py={'$1'}
      rounded={'$md'}
      onHoverIn={() => setHover(true)}
      onHoverOut={() => setHover(false)}>
      <AnimatedBox
        style={animatedStyle}
        rowGap={'$2'}
        justifyContent={'center'}
        alignItems={'center'}>
        <Text
          px={'$1'}
          sx={{ _android: { mt: '$3' } }}
          fontSize={'$sm'}
          textTransform='uppercase'
          color='$white'
          textAlign='center'>
          Select option
        </Text>
        <Icon name='shopping-cart' size={20} color={'#fff'} />
      </AnimatedBox>
    </Pressable>
  );
}
