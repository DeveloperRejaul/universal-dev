import React, { useEffect, useState } from 'react';
import { storage } from 'src/utils/storage';
import { Redirect } from 'expo-router';
import { useCheckAuthMutation } from 'src/features/authentication/api';
import Loading from '../loading/loading';
import { protectedProps } from './type';


export default function Protected({children, role}: protectedProps) {
  const [checkAuthUser , {isError, isLoading, isSuccess, data}] = useCheckAuthMutation();
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
  if(isError || !isToken || (isSuccess && !role.includes(data.role)) ) return <Redirect href={'/auth/login'} />;
  if(isSuccess && role.includes(data.role))return children;
}