import { Center } from '@gluestack-ui/themed';
import { useAppDispatch } from '@hooks/useAppDispatch';
import useToast from '@hooks/useToast';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { useLoginMutation } from 'src/features/authentication/api';
import SimpleLogin from 'src/features/authentication/screens/login';
import { handleLogin } from 'src/features/authentication/slice';
import * as WebBrowser from 'expo-web-browser';
import * as Auth from 'expo-auth-session';

type loginParams = {
  email: string;
  password: string;
  isRemember: boolean;
};

export default function index() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { showToast } = useToast();
  const [login, { isLoading, isSuccess, isError }] = useLoginMutation();

  const loginReq = async (values: loginParams) => {
    await login({
      email: values.email,
      password: values.password,
      isRemember: values.isRemember,
    });
  };

  useEffect(() => {
    if (isError)
      showToast({
        message: 'Account login failed',
        title: 'Error',
        action: 'error',
      });
    if (isSuccess) {
      dispatch(handleLogin());
      showToast({
        message: 'Account login success',
        title: 'Success',
        action: 'success',
      });

      setTimeout(() => {
        router.replace('/(drawer)/(tab)/home/main');
      }, 1000);
    }
  }, [isError, isSuccess]);

  return (
    <Center bg='$light100' alignItems='center' flex={1}>
      <SimpleLogin
        handleGoogleLogin={() => {}}
        handleFacebookLogin={() => {}}
        handleGithubLogin={() => {}}
        isLoading={isLoading}
        handleLogin={loginReq}
        handleSignUP={() => router.replace('/(stack)/auth/register')}
        handleForgotPassword={() => router.push('/auth/forgotPassword')}
      />
    </Center>
  );
}
