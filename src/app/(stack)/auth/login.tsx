import { useAppContext } from '@hooks/useAppContext';
import { useToast } from '@hooks/useToast';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useLoginMutation } from 'src/features/authentication/api';
import SimpleLogin from 'src/features/authentication/screens/login';
import { storage } from 'src/utils/storage';
import {type loginParams } from 'src/features/authentication/type';
import { userRole } from 'src/constants/constants';



export default function index() {
  const router = useRouter();
  const toast = useToast();
  const {socket} = useAppContext();
  const [login, { isLoading, isSuccess, isError, data }] = useLoginMutation();
  
  const loginReq = async (values: loginParams) => {
    if(await values) login(await values);
  };

  useEffect(() => {
    if (isSuccess) {
      const init = async ()=>await storage.saveAsyncData({data:data.token, key:'@authToken'});
      init();
      
      if(!socket?.connected)socket?.connect();
      toast.show('Login successful',{type:'success'});
     
      setTimeout(() => {
        if(data.role === userRole.USER)router.replace('/(drawer)/(tab)/home/main');
        if(data.role === userRole.MODERATOR)router.replace('/dashboard/Home');
        if(data.role === userRole.ADMIN)router.replace('/dashboard/Home');
      }, 1000);

    }
    if(isError) toast.show('Invalid user name or password',{type:'warning'});

  }, [isError, isSuccess, data]);


  return (
    <View className='flex-1 justify-center items-center bg-stone-100'>
      <SimpleLogin
        handleGoogleLogin={()=>{}}
        handleFacebookLogin={()=>{}}
        handleGithubLogin={() => {}}
        isLoading={isLoading}
        handleLogin={loginReq}
        handleSignUP={() => router.replace('/(stack)/auth/register')}
        handleForgotPassword={() => router.push('/auth/forgotPassword')}
      />
    </View>
  );
}
