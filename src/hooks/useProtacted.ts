import { useEffect, useState } from 'react';
import { useCheckAuthMutation } from 'src/features/authentication/api';
import { storage } from 'src/utils/storage';

export function useProtected() {
  const [haveToken , setHaveToken] = useState(true);
  const [checkAuthUser , {isError, isLoading, isSuccess,data}] = useCheckAuthMutation();

  useEffect(()=>{
    const init = async()=>{
      const token = await storage.getAsyncData({key:'@authToken'});
      if(token === 'error')return setHaveToken(false);
      checkAuthUser(token);
    };
    init();
  },[]);

  return {isLoading,isError,isSuccess, user:data,haveToken};
}