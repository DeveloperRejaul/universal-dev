import { Input } from '@platform-components';
import {object,string }from 'yup';
import { Button } from '@components';
import { Pressable, View } from 'react-native';
import { Text } from 'react-native';
import React from 'react';
import { useFrom } from '@hooks/useForm';
import { forgotPassProps } from '../type';
import OAuth from './OAuth';

const schema = object({ email:string().email('Must be a valid email').required('Email is required'),});

export default function ForgotPassword(props: forgotPassProps) {
  const { isLoading,emailPlaceholder, handleLogin, handleSignUP, handleSend} = props;

  const {Controller,errors,handleSubmit} = useFrom({initialState:{ email: '' },schema});

  return (
    <View className='bg-light100 shadow-black justify-center items-center base:w-full base:h-full md:w-[60%] md:h-[60%] lg:w-[50%] lg:h-[80%]'>
      <View className='gap-y-4 base:w-[90%] web:w-[70%] lg:w-[50%]'>
        <Text className='font-semibold text-coolGray800 text-lg text-center'>
          Enter Email Address
        </Text>
        <Controller 
          name='email'
          render={({onChange})=>(
            <Input
              placeholder={emailPlaceholder || 'Enter email'}
              onChangeText={onChange}
              error={errors.email ? errors.email : ''}
            />
          )}
        />

        <Pressable onPress={handleLogin}>
          <Text className='text-sm font-normal text-coolGray500 text-center'> Back to login </Text>
        </Pressable>

        {/*  eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Button onPress={()=> handleSend(handleSubmit())} text='Send' isLoading={isLoading} />

        <View className='flex-row w-[100%] justify-center items-center'>
          <View className='w-[45%] h-1 bg-coolGray200' />
          <View className='w-[10%] justify-center items-center h-10 border-coolGray200 border-2 rounded-sm'>
            <Text className='text-coolGray400'>OR</Text>
          </View>
          <View className='w-[45%] h-1 bg-coolGray200' />
        </View>
        <OAuth />
        <View className='flex-row justify-center pace-x-1'>
          <Text>Do you have an account?</Text>
          <Pressable onPress={handleSignUP}>
            <Text className='uppercase underline font-medium ml-2'>
              Sing up
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
