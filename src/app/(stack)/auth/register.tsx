import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import SimpleSignUp from 'src/features/authentication/screens/signup';
import { useSignupMutation } from 'src/features/authentication/api';
import { View } from 'react-native';
import { collection, addDoc } from 'firebase/firestore'; 
import app from 'src/config/firebase';

type signUpParams = {
  name: string;
  password: string;
  email: string;
};

export default function register() {
  const router = useRouter();
  const [singUp, { isLoading, isError, isSuccess }] = useSignupMutation();

  const handleSignUp = async (values: signUpParams) => {
    try {
      const docRef = await addDoc(collection(app, 'users'), {
        first: 'Ada',
        last: 'Lovelace',
        born: 1815
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }


    // await singUp({
    //   name: values.name,
    //   password: values.password,
    //   email: values.email,
    // });
  };

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        router.push('/');
      }, 1000);
    }
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
