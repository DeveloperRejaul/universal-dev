
import { Loading } from '@components';
import { useProtected } from '@hooks/useProtacted';
import { Redirect } from 'expo-router';
import React from 'react';
import { userRole } from 'src/constants/constants';
const {ADMIN,MODERATOR,USER} = userRole;

export default ()=>{
  const {isError,isLoading,isSuccess, user, haveToken } = useProtected();

  if(isError) return <Redirect href={'/auth/login'} />;
  if(!haveToken) return <Redirect href={'/auth/login'} />;
  if(isLoading) return <Loading />;
  if(isSuccess && user.role === USER) return <Redirect href={{pathname:'/home/main'}} />;
  if(isSuccess && user.role === MODERATOR) return <Redirect href={{ pathname:'/dashboard/Home'}} />;
  if(isSuccess && user.role === ADMIN) return <Redirect href={{pathname:'/dashboard/Home'}} />;


};
