import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import Overly from '../overly/overly';

export default function Home() {
  return (
    <View className='bg-slate-200 flex-1 justify-center items-center'>
       <Overly /> 
      <Text>home</Text>
    </View>
  );
}
