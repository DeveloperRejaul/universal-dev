import { Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from 'src/components/header/header';
import { rw } from 'src/constants/dimensions';
import { Image } from 'react-native';
import ArrowRightIcon from 'src/assets/icon/ArrowRightIcon';
import { useToken } from '@hooks/useToken';
import { useRouter } from 'expo-router';

const uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4EhjRIvCnim1TgoLuLwTOd13NV194PSuHc6xgTgot0yN6B-MuGpqyh5Hore35f_k2Q2k&usqp=CAU';
const BTN_UNSUBSCRIBE_BG = useToken('colors', 'primary');


export default function farms() {

  const router = useRouter();


  return (
    <SafeAreaView className='flex-1 bg-white'>
      <Header title='My Plots' />
      <View className='flex-row justify-between ' style={{marginVertical:15}}>
        {/* farm */}
        <View style={{width:rw(45),height:220}} className='border border-gray/20 rounded-2xl overflow-hidden mx-3'>
          <Image source={{uri}} style={{height:150, width:'100%', borderBottomRightRadius:15, borderBottomLeftRadius:15}} />
          <View className='flex-row justify-between px-2 py-2'>
            <Text className='text-headline2 text-xl font-manropeSemiBold'> Farm Name</Text>
            <View />
          </View> 
          <View className='flex-row justify-between px-2 pb-2'>
            <Text className='text-paragraph text-lg font-manropeRegular'>Location</Text>
            <ArrowRightIcon color={BTN_UNSUBSCRIBE_BG} onPress={()=>router.push('/(drawer)/(tab)/webinar/webinar-details')} />
          </View>
        </View>

        {/*  Add new farm part */}
        <View style={{width:rw(45), height:220 }} className='border-2 border-gray/20 border-dashed rounded-2xl overflow-hidden mx-3 items-center justify-around' > 
          <Text className='text-xl text-gray font-manropeRegular '> Add a new farm</Text>
          <View />
        </View>

      </View>
    </SafeAreaView>
  );
}