import React from 'react';
import { ForgotPassword } from '@components';
import { Center } from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';

export default function () {
  const router = useRouter();
  const handleSend = (values:object)=>{
    alert(JSON.stringify(values))
    router.push('/(stack)/auth/verification')
  }

  return (
    <Center bg='$light100' alignItems='center' flex={1}>
      <ForgotPassword
        handleSend={handleSend}
        handleLogin={() => router.push('/auth/login')}
        handleSignUP={() => router.push('/auth/register')}
      />
    </Center>
  );
}
