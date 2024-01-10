import React, { useEffect, useState } from 'react';
import { storage } from 'src/utils/storage';
import { Redirect } from 'expo-router';
import { useCheckAuthMutation } from 'src/features/authentication/api';
import Loading from '../loading/loading';
import { protectedProps } from './type';


export default function Protected({children}: protectedProps) {
  const [checkAuthUser , {isError, isLoading, isSuccess}] = useCheckAuthMutation();
  const [isToken, setToken] = useState(true);

  useEffect(()=>{
    const init = async()=>{
      const token = await storage.getAsyncData({key:'@authToken'});
      if(token === 'error') return setToken(false);
      checkAuthUser(token);
    };
    init();
  },[]);


  if(isLoading) return <Loading />;
  if(isError) return <Redirect href={'/auth/login'} />;
  if(isSuccess) return children;
  if(!isToken) return <Redirect href={'/auth/login'} />;
}