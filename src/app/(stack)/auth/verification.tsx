import React from 'react';
import { Center } from '@gluestack-ui/themed';
import { Verification } from '@components';
import { useRouter } from 'expo-router';

export default function verification() {
  const router = useRouter();

  const handleSend = (values: object) => {
    alert(JSON.stringify(values));
    router.push('/auth/confirmPassword');
  };

  const handleResend = () => {};

  return (
    <Center flex={1} bg='$light100'>
      <Verification
        handleResend={handleResend}
        handleSend={handleSend}
        handleSignUP={() => router.push('/auth/register')}
      />
    </Center>
  );
}
