import { Input } from '@platform-components';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import * as Yup from 'yup';
import { Button } from '@components';
import { Pressable, View } from 'react-native';
import { Text } from 'react-native';
import { useToken } from '@hooks/useToken';
import React from 'react';
import { useFrom } from '@hooks/useForm';

type appProps = {
  emailPlaceholder?: string;
  setEmail?: (value: string) => void;
  handleLogin?: () => void;
  handleSignUP?: () => void;
  handleSend?: ({ email }: { email: string }) => void;
  isLoading?: boolean;
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email')
    .required('Email is required'),
});


const googleColor = useToken('colors', 'red500');
const fbColor = useToken('colors', 'blue800');
const gitColor = useToken('colors', 'black');


export default function ForgotPassword({
  isLoading,
  emailPlaceholder,
  handleLogin,
  handleSignUP,
  handleSend,
}: appProps) {
  const {Controller,errors,handleSubmit} = useFrom({initialState:{ email: '' },schema:validationSchema});

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
        <View className='flex-row justify-center mt-1'>
          <Pressable
            onPress={()=>{}}
            className='h-8 w-8 mx-2 rounded-full border-2 border-red500 justify-center items-center'
          >
            <AntDesign name='google' size={20} color={googleColor} />
          </Pressable>
          <Pressable
            onPress={()=>{}}
            className='h-8 w-8 mx-2 rounded-full border-2 border-blue800 justify-center items-center'
          >
            <FontAwesome name='facebook-f' size={20} color={fbColor} />
          </Pressable>
          <Pressable
            onPress={()=>{}}
            className='h-8 w-8 mx-2 rounded-full justify-center items-center border-2'
          >
            <FontAwesome name='github' size={18} color={gitColor} />
          </Pressable>
        </View>

        <View className='flex-row justify-center pace-x-1'>
          <Text>Do you have an account?</Text>
          <Pressable onPress={handleSignUP}>
            <Text className='uppercase underline font-medium'>
              Sing up
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
