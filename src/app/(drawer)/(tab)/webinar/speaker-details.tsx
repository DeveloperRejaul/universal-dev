import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import ArrowRightIcon from 'src/assets/icon/ArrowRightIcon';
const uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4EhjRIvCnim1TgoLuLwTOd13NV194PSuHc6xgTgot0yN6B-MuGpqyh5Hore35f_k2Q2k&usqp=CAU';

export default function speaker() {
  return (
    <View className='flex-1 bg-white'>
      <View className='w-full'>
        <ArrowRightIcon className='rotate-180 fill-primary' />
        <Image source={{uri}} style={{height:300, width:'100%'}} />
      </View>
    </View>
  );
}