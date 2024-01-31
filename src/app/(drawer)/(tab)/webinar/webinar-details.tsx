import { Text, View } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
import ArrowRightIcon from 'src/assets/icon/ArrowRightIcon';
import { Image } from 'react-native';
import { Button, HStack, Ratting } from '@components';
import ShareIcon from 'src/assets/icon/ShareIcon';
import { rw } from 'src/constants/dimensions';
import VerticalSlide from 'src/components/slider/VerticalSlide';
import { useRouter } from 'expo-router';
const uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4EhjRIvCnim1TgoLuLwTOd13NV194PSuHc6xgTgot0yN6B-MuGpqyh5Hore35f_k2Q2k&usqp=CAU';

export default function webinar() {
  const router = useRouter();
  
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:70, backgroundColor:'#fff'}}>
      <View className='flex-1 bg-white'>
        <View className='w-full'>
          <ArrowRightIcon className='rotate-180 absolute z-50 top-14 ml-4' color='#000' onPress={()=>router.back()} />
          <Image source={{uri}} style={{height:300, width:'100%'}} />
        </View>
        <View className='px-4 py-4'>
          <HStack className='justify-between items-center py-2'>
            <Text className={'text-headline text-2xl font-semibold'}>Webinar Name</Text>
            <HStack className=''>
              <ShareIcon />
              <Text className='ml-3 text-headline font-manropeRegular text-lg'>Share</Text>
            </HStack>
          </HStack>
          {/* date part */}
          <HStack>
            <HStack className='items-center'>
              <View className='h-2 w-2 rounded-full bg-gray' />
              <Text className='text-sm text-paragraph ml-2 font-manropeRegular'>Jan 3rd  2023</Text>
            </HStack>
            <HStack className='items-center ml-2'>
              <View className='h-2 w-2 rounded-full bg-gray' />
              <Text className='text-sm text-paragraph ml-2 font-manropeRegular'>4:30 PM</Text>
            </HStack>
          </HStack>
          <Text className='text-paragraph text-lg py-2 font-manropeRegular'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</Text>
          <Button text='Subscribe' className='py-2 my-2' />
        </View>
        <View style={{width:rw(100), height:1}} className='bg-paragraph/20 mr-4' />
        <View className='px-4 py-2'> 
          <Ratting rating={4.40} />  
        </View>
        <VerticalSlide heading='More by the Speaker' headStyle={{paddingHorizontal:15}} />
      </View>
    </ScrollView>
  );
}

