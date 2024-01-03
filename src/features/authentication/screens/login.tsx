import { Input } from '@platform-components';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import * as Yup from 'yup';
import { Button, CheckBox} from '@components';
import { Pressable, View } from 'react-native';
import { Text } from 'react-native';
import { useToken } from '@hooks/useToken';
import React from 'react';
import { useFrom } from '@hooks/useForm';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Must be a valid email').required('Email is required'),
  password: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Password is required'),
  isRemember: Yup.boolean(),
});

type loginParams = {
  email: string;
  password: string;
  isRemember: boolean;
};

type appProps = {
  title?: string;
  emailLabel?: string;
  passwordLabel?: string;
  emailPlaceholder?: string;
  passwordPlaceholder?: string;
  handleSignUP?: () => void;
  handleLogin?: (val: loginParams) => object;
  handleForgotPassword?: () => void;
  handleGoogleLogin?: () => void;
  handleFacebookLogin?: () => void;
  handleGithubLogin?: () => void;
  isLoading?: boolean;
};

const googleColor = useToken('colors', 'red500');
const fbColor = useToken('colors', 'blue800');
const gitColor = useToken('colors', 'black');


export default function SimpleLogin({
  title,
  emailLabel,
  passwordLabel,
  emailPlaceholder,
  passwordPlaceholder,
  handleSignUP,
  handleForgotPassword,
  handleLogin,
  isLoading,
  handleFacebookLogin,
  handleGithubLogin,
  handleGoogleLogin,
}: appProps) {
 

  const {Controller,errors,handleSubmit,setState} = useFrom({initialState:{email: '', password: '', isRemember: false}, schema:validationSchema});


  return (
    <View className='bg-light100 shadow-black justify-center items-center base:w-full base:h-full md:w-[60%] md:h-[60%] lg:w-[50%] lg:h-[80%]'>
      <View className='space-y-4 base:w-[90%] web:w-[70%] lg:w-[50%]'>
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

        <View className='flex-row justify-center space-x-7 mt-1'>
          <Pressable
            onPress={handleGoogleLogin}
            className='h-8 w-8 rounded-full border-2 border-red500 justify-center items-center'
          >
            <AntDesign name='google' size={20} color={googleColor} />
          </Pressable>
          <Pressable
            onPress={handleFacebookLogin}
            className='h-8 w-8 rounded-full border-2 border-blue800 justify-center items-center'
          >
            <FontAwesome name='facebook-f' size={20} color={fbColor} />
          </Pressable>
          <Pressable
            onPress={handleGithubLogin}
            className='h-8 w-8 rounded-full justify-center items-center border-2'
          >
            <FontAwesome name='github' size={18} color={gitColor} />
          </Pressable>
        </View>
        <View className='flex-row justify-center space-x-1'>
          <Text>Need an account?</Text>
          <Pressable onPress={handleSignUP}>
            <Text className='uppercase underline font-medium'>
              Sign up
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
