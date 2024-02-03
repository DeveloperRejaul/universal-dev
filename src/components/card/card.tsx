import { Text, View } from 'react-native';
import React from 'react';
import { Button } from '@components';
import { useToken } from '@hooks/useToken';
import { Image } from 'react-native';

const uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4EhjRIvCnim1TgoLuLwTOd13NV194PSuHc6xgTgot0yN6B-MuGpqyh5Hore35f_k2Q2k&usqp=CAU';
const isSubscribe = false;
const BTN_SUBSCRIBE_BG = useToken('colors', 'primary', 20);
const BTN_UNSUBSCRIBE_BG = useToken('colors', 'primary');

interface ICardProps {
  buttonShown?: boolean
  dateTimeShown?: boolean
}



export default function card(props: ICardProps) {

  const {
    buttonShown =true,
    dateTimeShown = true
  } = props;


  return (
    <View className='border border-border p-3 w-full rounded-xl gap-y-2' >
      {/* Image part  */}
      <View className='w-full'>
        <Image source={{uri}} style={{height:200, width:'100%'}} className='rounded-xl' />
        <Text className='text-black absolute top-3 right-4 bg-white rounded-full font-manropeRegular px-3 py-1 text-lg'>Premium</Text>
      </View>
       
      {/* Bottom body part  */}
      <View>
        <Text className='text-headline2 text-xl font-manropeSemiBold'> Lorem Ipsum </Text>
        <View className='flex-row justify-between items-center'>
          <Text className='text-headline2 text-xl font-manropeSemiBold'> Lorem Ipsum </Text>
          {buttonShown && <Button 
            className='px-4 py-1'
            containerStyle={{ backgroundColor:isSubscribe ? BTN_SUBSCRIBE_BG:BTN_UNSUBSCRIBE_BG}}
            textStyle={{color: isSubscribe ? useToken('colors', 'primary') : useToken('colors', 'white')}} 
            text='Subscribe'
          />}
        </View>
      </View>
      <View className='flex-row w-[50%] justify-between'>
        <Text className='text-paragraph text-sm font-manropeRegular' >Speaker</Text>
        {dateTimeShown && <Text className='text-paragraph text-sm font-manropeRegular' >|</Text>}
        {dateTimeShown && <Text className='text-paragraph text-sm font-manropeRegular' >Date and Time</Text>}
      </View>
    </View>
  );
}