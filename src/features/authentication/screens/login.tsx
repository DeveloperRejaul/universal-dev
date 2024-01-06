import { Input } from '@platform-components';
import {boolean, object, string} from 'yup';
import { Button, CheckBox} from '@components';
import { Pressable, View,Text } from 'react-native';
import React, { useState } from 'react';
import { useFrom } from '@hooks/useForm';
import { loginProps } from '../type';
import OAuth from './OAuth';
import * as Google from 'expo-auth-session/providers/google'; 
import * as WebBrowser from 'expo-web-browser';
import AsyncStorage from '@react-native-async-storage/async-storage';

const webClintSecret = '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';
const webClientId = '906303843926-r6f3iik126j11hdbcqkvint14673pthi.apps.googleusercontent.com';
const iosClientId = '906303843926-hnqf098i1bfmemd1r03trttqhgmb8f3d.apps.googleusercontent.com';
const androidClientId = '906303843926-o8u95pej0a076h9vrdqs2a6jd15lq557.apps.googleusercontent.com';



const validationSchema = object({
  email: string().email('Must be a valid email').required('Email is required'),
  password: string().min(6, 'Too Short!').max(50, 'Too Long!').required('Password is required'),
  isRemember: boolean(),
});


WebBrowser.maybeCompleteAuthSession();

export default function SimpleLogin(props: loginProps) {
 
  const {
    title,
    emailLabel,
    passwordLabel,
    emailPlaceholder,
    passwordPlaceholder,
    handleSignUP,
    handleForgotPassword,
    handleLogin,
    isLoading,
  } = props;

  
  const {Controller,errors,handleSubmit,setState} = useFrom({initialState:{email: '', password: '', isRemember: false}, schema:validationSchema});
  const [userInfo, setUserInfo] = useState();
  const [request, response, promptAsync] = Google.useAuthRequest({androidClientId,iosClientId,webClientId});















  return (
    <View className='bg-light100 shadow-black justify-center items-center base:w-full base:h-full md:w-[60%] md:h-[60%] lg:w-[50%] lg:h-[80%]'>
      <View className='gap-y-4 base:w-[90%] web:w-[70%] lg:w-[50%]'>
        <Text className='text-2xl text-trueGray800 font-semibold'>{title ? title : 'Login'}</Text>
         
        <Controller 
          name='email' 
          render={({onChange})=> (
            <Input
              onChangeText={onChange}
              label={emailLabel || 'Email'}
              placeholder={emailPlaceholder || 'Enter email'}
              error={errors.email ? errors.email : ''}
            />) 
          } 
        />

        <Controller 
          name='password' 
          render={({onChange})=> (
            <Input
              onChangeText={onChange}
              label={passwordLabel || 'Password'}
              placeholder={ passwordPlaceholder || 'Enter password'}
              error={errors.password ? errors.password : ''}
              type='password'
            />
          ) 
          } 
        />

        <View className='flex-row'>
          <CheckBox handleCheck={(check: boolean)=>setState('isRemember', !check)} />
          <Text> Remember me ? </Text>
        </View>
        <Button
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          onPress={()=>handleLogin(handleSubmit())}
          text='Login'
          isLoading={isLoading}
        />

        <Pressable onPress={handleForgotPassword}>
          <Text className='text-right'>Forgot password?</Text>
        </Pressable>

        <View className='flex-row w-[100%] justify-center items-center'>
          <View className='w-[45%] h-1 bg-coolGray200' />
          <View className='w-[10%] justify-center items-center h-10 border-coolGray200 border-2 rounded-sm'>
            <Text className='text-coolGray400'>OR</Text>
          </View>
          <View className='w-[45%] h-1 bg-coolGray200' />
        </View>

        <OAuth handleGoogleLogin={()=>promptAsync()} />
        <View className='flex-row justify-center'>
          <Text>Need an account?</Text>
          <Pressable onPress={handleSignUP}>
            <Text className='uppercase underline font-medium ml-2'>
              Sign up
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
