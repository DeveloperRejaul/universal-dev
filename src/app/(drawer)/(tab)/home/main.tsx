import React from 'react';
import { useRouter } from 'expo-router';
import { Box } from '@gluestack-ui/themed';
import { Header, Input } from '@platform-components';
import { SimpleCarousal } from '@components';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Header />
      <Box flex={1} px={'$3'}>
        <Input placeholder='Search for products' type='search' />
        <SimpleCarousal />
      </Box>
    </>
  );
}
