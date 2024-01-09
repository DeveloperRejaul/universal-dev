import { useAppContext } from '@hooks/useAppContext';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useToast } from '@hooks/useToast';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useLoginMutation } from 'src/features/authentication/api';
import SimpleLogin from 'src/features/authentication/screens/login';
import { handleLogin } from 'src/features/authentication/slice';
import { storage } from 'src/utils/storage';

type loginParams = {
  email: string;
  password: string;
  isRemember: boolean;
};

export default function index() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const toast = useToast();
  const {socket} = useAppContext();
  const [login, { isLoading, isSuccess, isError, data }] = useLoginMutation();
  
  const loginReq = async (values: loginParams) => {
    if(await values) login(await values);
  };

  useEffect(() => {
    if (isSuccess) {
      const init = async ()=>{
        await storage.saveAsyncData({data:data.token, key:'@authToken'});
        socket?.connect();
      };
      init();
      dispatch(handleLogin());
      setTimeout(() => {
        router.replace('/(drawer)/(tab)/home/main');
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
