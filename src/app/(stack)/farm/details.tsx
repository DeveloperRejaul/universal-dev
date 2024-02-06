import { Pressable, ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import Header from 'src/components/header/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import ArrowRightIcon from 'src/assets/icon/ArrowRightIcon';
import { router, useRouter } from 'expo-router';
import { Input } from '@platform-components';
import { Image } from 'react-native';
import carrot from '../../../assets/images/carrot.png';
import cucumber from '../../../assets/images/cucumber.png';
import { Button, CropItem, SwitchButton, VerticalSlide } from '@components';
import LocationIcon from 'src/assets/icon/LocationIcon';
import { randomId } from 'src/utils/random';
import { mainCrop } from 'src/db/mainCrop';
import ArrowLeft from 'src/assets/icon/ArrowLeft';
import GalleryImg from 'src/components/GalleryImg/GalleryImg';
const uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4EhjRIvCnim1TgoLuLwTOd13NV194PSuHc6xgTgot0yN6B-MuGpqyh5Hore35f_k2Q2k&usqp=CAU';
const imagesData = new Array(7).fill(0).map(i=>i);

export default function details() {
  const router = useRouter();
  const [active , setActive ] = useState<boolean>(true);

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
        {imagesData.map(()=> <GalleryImg uri={uri} key={randomId()} />)}
      </View>

      <Button text='Confirm Details' className='py-3' onPress={()=>{}} />

      <Text className='text-xl font-manropeBold py-3 text-headline -mb-3'>Plot Visibility </Text>
      <SwitchButton leftBtnText='Show' rightBtnText='Hide' onPress={()=> {}} />

      <Text className='text-xl font-manropeBold py-3 text-headline'> Suggested Next Crop </Text>
      <View className='flex-row justify-between'>
        {mainCrop.slice(0,3).map(d=> <CropItem name={d.name} uri={d.icon} key={d.id} />)}
      </View> 


      <Text className='text-xl font-manropeBold py-3 text-headline'>Farm Details</Text>
      <Input placeholder='Plot Name' />
      <Input placeholder='Plot Address' />
      <Input placeholder='Plot Area' />
      <Input placeholder='First Irrigation Date' />
      <Input placeholder='First Irrigation Date' />
      <Input placeholder='Days from First Irrigation Date' />
      <Input placeholder='Crop Stage' />

      <VerticalSlide heading='Videos related to Carrot' />


      <Text className='text-xl font-manropeBold py-3 text-headline'>Crop Schedule</Text>
      {['March 22nd 2023 to  21st April 2023', 'Feb 19th 2023 to March 21st 2023','Jan 19th 2023 to Feb 18th 2023'].map(d=> (
        <View key={randomId()} className='flex-row justify-between border border-border px-3 py-3 rounded-md'>
          <Text className='text-headline text-lg font-manropeBold'>{d}</Text>
          <ArrowLeft />
        </View>
      ))}


      <Text className='text-xl font-manropeBold py-3 text-headline'>Advice Asked</Text>
      <View className='border border-border p-5 gap-y-3' >
        <View className='flex-row justify-between'>
          <Text className='text-headline text-2xl font-manropeBold'>Root related problem</Text>
          <Text className='text-primary text-lg font-manropeSemiBold'>Active</Text>
        </View>
        <Text className='text-headline text-xl font-manropeBold'>SC20221216133300</Text>
        <Text className='text-gray text-xl font-manropeRegular'>Last updated on 9 May, 2023  01:33 pm</Text>
        <View className='flex-row justify-between'>
          <View className='flex-row justify-between items-center bg-primary/15 px-3 py-2 rounded-lg'>
            <View>
              <Text className='text-gray text-lg font-manropeRegular'>Plot</Text>
              <Text className='text-headline  text-xl font-manropeBold'>My Farm 1</Text>
            </View>
            <View className='h-20 w-20 rounded-full overflow-hidden ml-2'>
              <Image source={{uri:uri}} style={{height:'100%', width:'100%'}} />
            </View>
          </View>
          <View className='flex-row justify-between items-center bg-primary/15 px-3 py-2 rounded-lg'>
            <View>
              <Text className='text-gray text-lg font-manropeRegular'>Crop</Text>
              <Text className='text-headline  text-xl font-manropeBold'>Carrot</Text>
            </View>
            <View className='h-20 w-20 rounded-full overflow-hidden ml-2'>
              <Image source={{uri:uri}} style={{height:'100%', width:'100%'}} />
            </View>
          </View>
        </View>
        <Button text='Open Ticket' className='py-3' onPress={()=>router.push('/farm/gallery')} />
      </View>
    </View>
  );
} 


