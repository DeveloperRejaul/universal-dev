import { Input } from '@platform-components';
import{string, object, ref} from 'yup';
import { Button} from '@components';
import { Pressable, Text, View } from 'react-native';
import React from 'react';
import { useFrom } from '@hooks/useForm';
import { signUpProps } from '../type';
import OAuth from './OAuth';

const validationSchema = object({
  name: string().required('Name is required'),
  email: string().email('Must be a valid email').required('Email is required'),
  password: string().min(6, 'Too Short!').max(50, 'Too Long!').required('Password is required'),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  confirmPassword: string().oneOf([ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
});

export default function SimpleSignUp(props: signUpProps) {

  const {
    handleLogin,
    title,
    emailLabel,
    emailPlaceholder,
    passwordLabel,
    passwordPlaceholder,
    confirmPasswordLabel,
    confirmPasswordPlaceholder,
    nameLabel,
    namePlaceholder,
    handleSignUP,
    isLoading,
  } = props;

  const {Controller,errors,handleSubmit} = useFrom({initialState: { email: '', password: '', confirmPassword: '', name: ''},schema:validationSchema});

  
  return (
    <View className='bg-light100 shadow-black justify-center items-center base:w-full base:h-full md:w-[60%] md:h-[60%] lg:w-[50%] lg:h-[80%]'>
      <View className='gap-y-4 base:w-[90%] web:w-[70%] lg:w-[50%]'>
        <Text className='text-2xl text-trueGray800 font-semibold'>{title ? title : 'Sign Up'}</Text>
        <Controller 
          name='name'
          render={({onChange})=>(
            <Input
              label={nameLabel ? nameLabel : 'Full name'}
              placeholder={namePlaceholder || 'Enter full name'}
              onChangeText={onChange}
              error={errors.name? errors.name : ''}
            />
          )}
        />
        <Controller 
          name='email'
          render={({onChange})=>(
            <Input
              label={emailLabel || 'Email'}
              placeholder={emailPlaceholder || 'Enter email'}
              onChangeText={onChange}
              error={errors.email ? errors.email : ''}
            />
          )}
        />
        <Controller 
          name='password'
          render={({onChange})=>(
            <Input
              label={passwordLabel || 'Password'}
              placeholder={ passwordPlaceholder || 'Enter password'}
              onChangeText={onChange}
              type='password'
              error={errors.password ? errors.password : ''}
            />
          )}
        />
        <Controller 
          name='confirmPassword'
          render={({onChange})=>(
            <Input
              label={confirmPasswordLabel || 'Confirm Password'}
              placeholder={confirmPasswordPlaceholder || 'Enter password'}
              onChangeText={onChange}
              error={errors.confirmPassword ? errors.confirmPassword : ''}
              type='password'
            /> 
          )}
        />
        {/*  eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Button text=' Sing up' onPress={()=>handleSignUP(handleSubmit())} isLoading={isLoading} />

        <View className='flex-row w-[100%] justify-center items-center'>
          <View className='w-[45%] h-1 bg-coolGray200' />
          <View className='w-[10%] justify-center items-center h-10 border-coolGray200 border-2 rounded-sm'>
            <Text className='text-coolGray400'>OR</Text>
          </View>
          <View className='w-[45%] h-1 bg-coolGray200' />
        </View>
        <OAuth />

        <View className='flex-row justify-center pace-x-1'>
          <Text>Need an account?</Text>
          <Pressable onPress={handleLogin}>
            <Text className='uppercase underline font-medium'>
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
