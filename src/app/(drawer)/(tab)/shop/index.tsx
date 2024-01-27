import { Text, View } from 'react-native';
import React from 'react';
import { Header } from '@components';

export default function Index() {
  return (
    <View className='flex-1'>
      <Header title='Shop' />
      <View className='flex-1 bg-white px-3'>
        <Text>Index</Text>
      </View>
    </View>
  );
}
