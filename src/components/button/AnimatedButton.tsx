import { Text, Pressable, View, Platform } from 'react-native';
import React from 'react';
import {Feather} from '@expo/vector-icons';
import { useToken } from '@hooks/useToken';
import { rf } from 'src/constants/dimensions';

const iconColor = useToken("colors", "white")

interface IAnimatedButtonProps{
  buttonText?:string;
  onPress:()=>void;
}


export default function AnimatedButton({buttonText, onPress}:IAnimatedButtonProps) {
  return (
    <Pressable onPress={onPress} className="justify-center h-10 rounded-md items-center bg-black group/h overflow-hidden">
      <View className='w-full px-4 items-center web:transition web:ease-in web:space-y-3 web:mt-11 group-hover/h:-translate-y-10'>
        <Text className='text-white text-lg' >{buttonText || "Select Option"}</Text>
        {Platform.OS ==="web" && <Feather name='shopping-cart' size={rf(2.5)} color={iconColor}/>} 
      </View>
    </Pressable>
  );
}
