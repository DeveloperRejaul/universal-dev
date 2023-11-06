import React from 'react';
import { useRouter } from 'expo-router';
import { Box } from '@gluestack-ui/themed';
import { Header } from '@platform-components';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Header />
      <Box flex={1}></Box>
    </>
  );
}
