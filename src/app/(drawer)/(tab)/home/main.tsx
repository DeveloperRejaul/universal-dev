import React, { useEffect } from 'react';
import {Input } from '@platform-components';
import { Header } from '@components';
import { ScrollView, View } from 'react-native';
import { useAppContext } from '@hooks/useAppContext';

export default function Home() {
  const {socket} = useAppContext();

  useEffect(()=>{
    if(!socket?.connected) socket?.connect();
  },[]);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <View className='flex-1 px-3 pb-10 bg-silver'>
        {/* header part */}
        <View>
          <Header />
          <Input
            placeholder='Search for products'
            type={'search'}
            onChangeText={(text) => { console.log(text);}}
          />
        </View>
      </View>
    </ScrollView>
  );
}