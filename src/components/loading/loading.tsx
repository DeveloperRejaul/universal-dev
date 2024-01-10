import {View } from 'react-native';
import React, { useEffect } from 'react';
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { useToken } from '@hooks/useToken';


const ROSE_COLOR = useToken('colors', 'rose500');
const INDIGO_COLOR = useToken('colors', 'indigo500');
const EMERALD_COLOR = useToken('colors', 'emerald500');

export default function Loading() {

  const progress = useSharedValue(0);

  const box01AnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 0.5, 1],
        [ROSE_COLOR, INDIGO_COLOR, EMERALD_COLOR]
      ),
    };
  });
  const box02AnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 0.5, 1],
        [INDIGO_COLOR, EMERALD_COLOR,ROSE_COLOR, ]
      ),
    };
  });
  
  const box03AnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 0.5, 1],
        [ROSE_COLOR, EMERALD_COLOR,INDIGO_COLOR, ]
      ),
    };
  });

  useEffect(()=>{
    progress.value = withRepeat(withTiming(1, {duration:1000}), -1 , false ); 
  },[]);

  return (
    <View className='flex-1 justify-center items-center'>
      <View className='flex-row'>
        <Animated.View className='h-10 w-10 bg-indigo500 rounded-full mx-1' style={box01AnimatedStyle} />
        <Animated.View className='h-10 w-10 bg-lime500 rounded-full mx-1' style={box02AnimatedStyle} />
        <Animated.View className='h-10 w-10 bg-rose500 rounded-full mx-1' style={box03AnimatedStyle} />
      </View>
    </View>
  );
}