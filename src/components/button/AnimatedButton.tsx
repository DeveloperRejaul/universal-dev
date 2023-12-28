import { Text, Pressable, View, Platform } from 'react-native';
import React from 'react';
import {Feather} from '@expo/vector-icons';
import { rf } from 'src/constants/dimensions';
import { ICON_COLOR } from './constants';


interface IAnimatedButtonProps{
  text?: string;
  onPress?: () => void;
}


export default function AnimatedButton({text, onPress}: IAnimatedButtonProps) {
  return (
    <Pressable onPress={onPress} className='justify-center h-10 rounded-md items-center bg-black group/h overflow-hidden'>
      <View className={`items-center px-3 ${ Platform.OS === 'web' && 'transition translate-y-6 space-y-3 group-hover/h:-translate-y-5'}`}>
        <Text className='text-white text-lg' >{text || 'Select Option'}</Text>
        {Platform.OS ==='web' && <Feather name='shopping-cart' size={rf(2.5)} color={ICON_COLOR} />} 
      </View>
    </Pressable>
  );
}

