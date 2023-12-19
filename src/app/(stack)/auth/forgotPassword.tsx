import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import useToast from '@hooks/useToast';
import ForgotPassword from 'src/features/authentication/screens/forgotPassword';
import { useForgetPasswordMutation } from 'src/features/authentication/api';
import { View } from 'react-native';

export default function () {
  const router = useRouter();
  const { showToast } = useToast();
  const [forgetPass, { isError, isLoading, isSuccess, error, data }] = useForgetPasswordMutation();

  const handleSend = async ({ email }: { email: string }) => {
    // router.push({ pathname: '/(stack)/auth/verification'});
    await forgetPass({ email });
  };

  useEffect(() => {
    if (isError)
      showToast({
        message: error.data,
        title: 'Error',
        action: 'error',
      });
    if (isSuccess) {
      showToast({
        message: 'Success',
        title: 'Success',
        action: 'success',
      });

      setTimeout(() => {
        router.push({ pathname: '/(stack)/auth/verification', params: data });
      }, 1000);
    }
  }, [isError, isSuccess]);


  return (
    <View className='flex-1 justify-center items-center bg-stone-100'>
      <ForgotPassword
        isLoading={isLoading}
        handleSend={handleSend}
        handleLogin={() => router.push('/auth/login')}
        handleSignUP={() => router.push('/auth/register')}
      />
    </View>
  );
}
