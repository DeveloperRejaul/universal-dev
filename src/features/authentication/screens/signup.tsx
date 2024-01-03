import { Input } from '@platform-components';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import * as Yup from 'yup';
import { Button} from '@components';
import { Pressable, Text, View } from 'react-native';
import { useToken } from '@hooks/useToken';
import React from 'react';
import { useFrom } from '@hooks/useForm';


type signUpParams = {
  name: string;
  password: string;
  email: string;
};


type appProps = {
  handleLogin?: () => void;
  title?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  passwordLabel?: string;
  passwordPlaceholder?: string;
  confirmPasswordLabel?: string;
  confirmPasswordPlaceholder?: string;
  nameLabel?: string;
  namePlaceholder?: string;
  onChange?: (value: boolean) => void;
  handleSignUP?: (val: signUpParams) => void;
  isLoading?: boolean;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Must be a valid email').required('Email is required'),
  password: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Password is required'),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
});


const googleColor = useToken('colors', 'red500');
const fbColor = useToken('colors', 'blue800');
const gitColor = useToken('colors', 'black');


export default function SimpleSignUp(props: appProps) {

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
      <View className='space-y-4 base:w-[90%] web:w-[70%] lg:w-[50%]'>
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

        <View className='flex-row justify-center space-x-7 mt-1'>
          <Pressable
            onPress={()=>{}}
            className='h-8 w-8 rounded-full border-2 border-red500 justify-center items-center'
          >
            <AntDesign name='google' size={20} color={googleColor} />
          </Pressable>
          <Pressable
            onPress={()=>{}}
            className='h-8 w-8 rounded-full border-2 border-blue800 justify-center items-center'
          >
            <FontAwesome name='facebook-f' size={20} color={fbColor} />
          </Pressable>
          <Pressable
            onPress={()=>{}}
            className='h-8 w-8 rounded-full justify-center items-center border-2'
          >
            <FontAwesome name='github' size={18} color={gitColor} />
          </Pressable>
        </View>

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
