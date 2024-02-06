import { Text, View } from 'react-native';
import React from 'react';
import { Button, Header } from '@components';
import { Image } from 'react-native';
import farmImg from '../../../../assets/images/farm.png'; 
import farmImg2 from '../../../../assets/images/farm2.png'; 
import { rh } from 'src/constants/dimensions';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  return (
    <View className='flex-1 pt-12 bg-white'>
      <Header title='My Farm' />
      <View className='flex-1 bg-white px-3 justify-center items-center'>
        <View className='justify-center items-center' style={{height:rh(35)}}>
          <Image source={farmImg2} className='absolute ' />
          <Image source={farmImg} className='absolute ' />
        </View>
        <Text className='text-3xl text-center py-3 text-headline font-manropeBold'>You dont have any farm registered with Us</Text>
        <Text className='text-lg text-center py-3 text-gray font-manropeRegular'>Register your farm to get crop advisory and other resources related to your farm and crops that are grown.</Text>
        <Button text='Add your first plot' className='w-full py-3' containerStyle={{borderRadius:10}} onPress={()=> router.navigate('/farm/register')} />
      </View>
    </View>
  );
}
