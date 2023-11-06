import React from 'react';
import { ForgotPassword } from '@components';
import { Center } from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';

export default function () {
  const router = useRouter();

  return (
    <Center bg='$light100' alignItems='center' flex={1}>
      <ForgotPassword
        handleSend={() => router.push('/(stack)/auth/verification')}
        handleLogin={() => router.push('/auth/login')}
        handleSignUP={() => router.push('/auth/register')}
      />
    </Center>
  );
}
