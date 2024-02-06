import { Text, View,Pressable } from 'react-native';
import React from 'react';
import GalleryImg from 'src/components/GalleryImg/GalleryImg';
import { randomId } from 'src/utils/random';
import { SafeAreaView } from 'react-native-safe-area-context';
import ArrowRightIcon from 'src/assets/icon/ArrowRightIcon';
import { Header } from '@components';
import { useRouter } from 'expo-router';
const uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4EhjRIvCnim1TgoLuLwTOd13NV194PSuHc6xgTgot0yN6B-MuGpqyh5Hore35f_k2Q2k&usqp=CAU';
const imagesData = new Array(7).fill(0).map(i=>i);

export default function gallery() {
  const router = useRouter();
  return (
    <SafeAreaView className='flex-1 bg-white px-4 '>
      <Header title='Farm Name' headerLeft={<ArrowRightIcon className='rotate-180' onPress={()=> router.back()} />} />

      <View className='flex-wrap justify-between flex-row gap-y-3 mb-5 py-3 '>
        {imagesData.map(()=> <GalleryImg uri={uri} key={randomId()} />)}
      </View>
      <Pressable className='border-2 border-gray/20 border-dashed rounded-2xl items-center justify-center' style={{paddingVertical:14}}>
        <Text className='text-gray text-lg font-manropeSemiBold'>Upload Photos</Text>
      </Pressable>
    </SafeAreaView>
  );
}
