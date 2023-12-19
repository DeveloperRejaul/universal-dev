import React from 'react';
import { GSBox, Overly } from '@components';
import { Text } from 'react-native';

export default function Footer() {
  return (
    <GSBox w={'$full'} h={'$10'} bg='$coolGray400'>
      <Overly />
      <Text>Footer</Text>
    </GSBox>
  );
}
