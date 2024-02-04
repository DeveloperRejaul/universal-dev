import { Pressable, ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import Header from 'src/components/header/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import ArrowRightIcon from 'src/assets/icon/ArrowRightIcon';
import { useRouter } from 'expo-router';
import { Input } from '@platform-components';
import { Image } from 'react-native';
import carrot from '../../../assets/images/carrot.png';
import cucumber from '../../../assets/images/cucumber.png';
import { Button, SwitchButton } from '@components';
import LocationIcon from 'src/assets/icon/LocationIcon';
import { randomId } from 'src/utils/random';
import { rw } from 'src/constants/dimensions';
const uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4EhjRIvCnim1TgoLuLwTOd13NV194PSuHc6xgTgot0yN6B-MuGpqyh5Hore35f_k2Q2k&usqp=CAU';
const imagesData = new Array(7).fill(0).map(i=>i);

export default function details() {
  const router = useRouter();
  const [active , setActive ] = useState<boolean>(false);

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <Header title='Farm Name' headerLeft={<ArrowRightIcon className='rotate-180' onPress={()=> router.back()} />} />
      <ScrollView contentContainerStyle={{paddingBottom:50}}>
        <View className='px-3'>
          {/* crop input part  */}
          <View className='gap-y-4 mb-4'>
            <Text className='text-2xl font-manropeBold py-3 text-headline -mb-3'>Main Crop</Text>
            <Input 
              placeholder='Carrot' 
              leftIcon={
                <View className='bg-orang h-14 w-14 justify-center items-center rounded-lg mr-2'>
                  <Image source={carrot} resizeMode='contain' />
                </View>
              }
            />
            <Input 
              placeholder='Cucumber' 
              leftIcon={
                <View className='bg-orang h-14 w-14 justify-center items-center rounded-lg mr-2'>
                  <Image source={cucumber} resizeMode='contain' />
                </View>
              }
            />
          </View>
          <Text className='text-2xl font-manropeBold py-3 text-headline'>Schedule Plot for Buyer</Text>
          <Text className='text-2xl font-manropeBold py-3 text-headline'>Open Plot</Text>
          <SwitchButton onPress={(value)=> setActive(value)} />
          {active && <OpenPlot />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );}


function OpenPlot () {
  return (
    <View className='gap-y-4'>
      <Text className='text-2xl font-manropeBold py-3 text-headline -mb-3'>Farm Details</Text>
      <Input placeholder='Plot Name' />
      <Input placeholder='Number of Plants' />
      <Input placeholder='Avg. Expected Yield per Plant' />
      <Input placeholder='GPS Location' rightIcon={<LocationIcon />} />

      <Pressable className='border-2 border-gray/20 border-dashed rounded-2xl items-center justify-center' style={{paddingVertical:14}}>
        <Text className='text-gray text-lg font-manropeSemiBold'>Upload Photos</Text>
      </Pressable>

      <View />

      <View className='flex-wrap justify-between flex-row gap-y-3'>
        {imagesData.map(()=> <GalleryImg key={randomId()} />)}
      </View>

      <Button text='Confirm Details' className='py-3' onPress={()=>{}} />
    </View>
  );
} 


function GalleryImg () {
  return (
    <View className='rounded-lg overflow-hidden' style={{height:rw(27), width:rw(27)}}>
      <Image source={{uri}} className='w-full h-full' />
    </View>
  );
}