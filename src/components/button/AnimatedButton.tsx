import { Box, Text } from '@gluestack-ui/themed';
import { Pressable } from '@gluestack-ui/themed';
import React, { useState } from 'react';
import Animated from 'react-native-reanimated';
const AnimatedBox = Animated.createAnimatedComponent(Box);

export default function AnimatedButton() {
  const [isHover, setHover] = useState(false);

  return (
    <Pressable
      overflow='hidden'
      bg='$black'
      width={'$1/2'}
      h={'$8'}
      px={'$1'}
      py={'$1'}
      rounded={'$md'}
      onHoverIn={() => setHover(true)}
      onHoverOut={() => setHover(false)}>
      <AnimatedBox
        rowGap={'$1'}
        sx={{
          _web: {
            transform: [{ translateY: isHover ? -25 : 0 }],
          },
        }}>
        <Text color='$white' textAlign='center'>
          Select option
        </Text>
        <Text color='$white' textAlign='center'>
          Select option2
        </Text>
      </AnimatedBox>
    </Pressable>
  );
}
