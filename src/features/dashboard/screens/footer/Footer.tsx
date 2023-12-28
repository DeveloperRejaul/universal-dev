import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import Overly from '../overly/overly';

export default function Footer() {
  return (
    <View className='w-full h-10 bg-tahiti'>
      <Overly />
      <Text>Footer</Text>
    </View>
  );
}
