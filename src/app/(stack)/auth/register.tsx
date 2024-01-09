import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import SimpleSignUp from 'src/features/authentication/screens/signup';
import { useSignupMutation } from 'src/features/authentication/api';
import { View } from 'react-native'; 
import { useToast } from '@hooks/useToast';
import { signUpParams } from 'src/features/authentication/type';


export default function register() {
  const router = useRouter();
  const [singUp, { isLoading, isError, isSuccess }] = useSignupMutation();
  const {show} = useToast();

  const handleSignUp = async (values: signUpParams) => values && singUp(values);

  useEffect(() => {
    if (isSuccess){
      show('Successfully create your account', {type:'success'});
      setTimeout(() => { router.push('/');}, 1000);
    }
  
    if(isError) show('Smoothing is wrong ', {type:'warning'});
  }, [isError, isSuccess]);


  return (
    <View className='flex-1 justify-center items-center bg-stone-100'>
      <SimpleSignUp
        handleSignUP={handleSignUp}
        handleLogin={() => router.push('/')}
        isLoading={isLoading}
      />
    </View>
  );
}
