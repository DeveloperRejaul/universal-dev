import React from 'react';
import { Overly } from '@components';
import { Text } from 'react-native';
import { View } from 'react-native';

export default function Footer() {
  return (
    <View className='w-full h-10 bg-tahiti'>
      <Overly />
      <Text>Footer</Text>
    </View>
  );
}
