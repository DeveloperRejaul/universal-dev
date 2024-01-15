import { Pressable,View } from 'react-native';
import React from 'react';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useToken } from '@hooks/useToken';
import { IOauthProps } from '../type';
const googleColor = useToken('colors', 'red500');
const fbColor = useToken('colors', 'blue800');
const gitColor = useToken('colors', 'black');

export default function OAuth({handleFacebookLogin,handleGithubLogin,handleGoogleLogin}: IOauthProps) {
  return (
    <View className='flex-row justify-center mt-1'>
      <Pressable
        onPress={handleGoogleLogin}
        className='h-8 w-8 mx-2 rounded-full border-2 border-red500 justify-center items-center'
      >
        <AntDesign name='google' size={20} color={googleColor} />
      </Pressable>
      <Pressable
        onPress={handleFacebookLogin}
        className='h-8 w-8 mx-2 rounded-full border-2 border-blue800 justify-center items-center'
      >
        <FontAwesome name='facebook-f' size={20} color={fbColor} />
      </Pressable>
      <Pressable
        onPress={handleGithubLogin}
        className='h-8 w-8 mx-2 rounded-full justify-center items-center border-2'
      >
        <FontAwesome name='github' size={18} color={gitColor} />
      </Pressable>
    </View>
  );
}