import { Text, View, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Icon from '@expo/vector-icons/Feather';
const AnimatedView = Animated.createAnimatedComponent(View);

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
      className='overflow-hidden bg-black w-[80%] h-8 p-1 rounded-md'
      onHoverOut={() => setHover(false)}
      onHoverIn={() => setHover(true)}>
      <AnimatedView
        style={animatedStyle}
        className={'flex flex-1 justify-center items-center'}>
        <Text className='px-1 text-sm uppercase text-white text-center android:mt-3'>
          Select option
        </Text>
        <Icon
          className='self-center mt-2'
          name='shopping-cart'
          size={20}
          color={'#fff'}
        />
      </AnimatedView>
    </Pressable>
  );
}
