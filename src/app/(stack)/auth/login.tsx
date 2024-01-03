import { useAppDispatch } from '@hooks/useAppDispatch';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useLoginMutation } from 'src/features/authentication/api';
import SimpleLogin from 'src/features/authentication/screens/login';
import { handleLogin } from 'src/features/authentication/slice';

type loginParams = {
  email: string;
  password: string;
  isRemember: boolean;
};

export default function index() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [login, { isLoading, isSuccess, isError }] = useLoginMutation();
  
  const loginReq = async (values: loginParams) => {
   
    console.log(await values);
   
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(handleLogin());
      setTimeout(() => {
        router.replace('/(drawer)/(tab)/home/main');
      }, 1000);
    }
  }, [isError, isSuccess]);

  return (
    <View className='flex-1 justify-center items-center bg-stone-100'>
      <SimpleLogin
        handleGoogleLogin={() => {}}
        handleFacebookLogin={() => {}}
        handleGithubLogin={() => {}}
        isLoading={isLoading}
        handleLogin={loginReq}
        handleSignUP={() => router.replace('/(stack)/auth/register')}
        handleForgotPassword={() => router.push('/auth/forgotPassword')}
      />
    </View>
  );
}
