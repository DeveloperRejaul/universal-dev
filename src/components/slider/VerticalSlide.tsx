import { View, Text, FlatList, ViewStyle } from 'react-native';
import React from 'react';
import { rw } from 'src/constants/dimensions';
import { useToken } from '@hooks/useToken';
import { Image } from 'react-native';
import PlayIcon from 'src/assets/icon/PlayIcon';
import ArrowRightIcon from 'src/assets/icon/ArrowRightIcon';
import { router } from 'expo-router';

const uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4EhjRIvCnim1TgoLuLwTOd13NV194PSuHc6xgTgot0yN6B-MuGpqyh5Hore35f_k2Q2k&usqp=CAU';
const BTN_UNSUBSCRIBE_BG = useToken('colors', 'primary');


interface IVerticalSlideProps {
  heading?: string;
  containerStyle?: ViewStyle;
  headStyle?: ViewStyle
}


export default function VerticalSlide(props: IVerticalSlideProps) {
  return (
    <View style={props.containerStyle}>
      <View style={props.headStyle} className='flex-row justify-between items-center mb-2 mt-4'>
        <Text className='text-center text-headline2 font-manropeBold text-2xl'>{props.heading || 'Webinars'}</Text>
        <Text className='text-primary text-lg font-manropeBold'>View All</Text>
      </View>
    
      <FlatList 
        showsHorizontalScrollIndicator={false}
        horizontal
        data={[1,2,3,4,5,6]}
        keyExtractor={(item, index)=> index.toString()}
        renderItem={()=>(
          <View style={{width:rw(60)}} className='border border-border rounded-2xl overflow-hidden mr-3'>
            <View className='w-full'>
              <Image source={{uri}} style={{height:200, width:'100%', borderBottomRightRadius:15, borderBottomLeftRadius:15}} />
              {/* Play Icon */}
              <View className='absolute left-[40%] top-[40%] h-16 w-16 border-2 border-white rounded-full justify-center items-center'>
                <PlayIcon />
              </View>
            </View>
            <View className='flex-row justify-between px-2 py-2'>
              <Text className='text-headline2 text-xl font-manropeSemiBold'> Lorem Ipsum </Text>
              <Text className='text-paragraph text-sm font-manropeRegular'>25:00</Text>
            </View>
            <View className='flex-row justify-between px-2 pb-2'>
              <Text className='text-headline2 text-xl font-manropeSemiBold'> Lorem Ipsum </Text>
              <View />
            </View> 
            <View className='flex-row justify-between px-2 pb-2'>
              <Text className='text-paragraph text-sm font-manropeRegular'>Speaker Name</Text>
              <ArrowRightIcon color={BTN_UNSUBSCRIBE_BG} onPress={()=>router.push('/(drawer)/(tab)/webinar/webinar-details')} />
            </View>
          </View>
        ) }
      />
    </View>
  );
}