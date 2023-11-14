import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Center } from '@gluestack-ui/themed';
import { ConfirmPassword } from '@components';
import { useRouter } from 'expo-router';

export default function () {
  const router = useRouter();
  return (
    <Center flex={1} bg='$light100'>
      <ConfirmPassword handleSend={() => router.push('/auth/login')} />
    </Center>
  );
}