import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import ForgotPassword from 'src/features/authentication/screens/forgotPassword';
import { useForgetPasswordMutation } from 'src/features/authentication/api';
import { View } from 'react-native';
import { IForgotPassParams } from 'src/features/authentication/type';
import { useToast } from '@hooks/useToast';

export default function () {
  const router = useRouter();
  const {show} = useToast();
  const [forgetPass, { isError, isLoading, isSuccess, data }] = useForgetPasswordMutation();

  const handleSend = async (value: IForgotPassParams) => { if(await value) forgetPass(await value);};

  useEffect(() => {
    if (isSuccess) {
      show('Mail is exist', {type:'success'});
      setTimeout(() => {
        router.push({ pathname: '/auth/verification', params: data });
      }, 1000);
    }
    if(isError) show('Your mail is not exists ', {type:'warning'});
  }, [isError, isSuccess,data]);


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
