import React from 'react';
import { Center } from '@gluestack-ui/themed';
import { Verification } from '@components';
import { useRouter } from 'expo-router';

export default function verification() {
  const router = useRouter();
  return (
    <Center flex={1} bg='$light100'>
      <Verification
      
        handleSend={() => router.push('/auth/confirmPassword')}
        handleSignUP={() => router.push('/auth/register')}
      />
    </Center>
  );
}
