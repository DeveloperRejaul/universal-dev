import { View, Text } from 'react-native';
import React from 'react';


interface IWebinarTimeProps {
  isSubscribe?: boolean
}


export default function WebinarTime(props: IWebinarTimeProps) {

  const {
    isSubscribe = false
  } = props;

  return (
            
    <View className='gap-y-3'>
      <Text className='text-headline2 font-manropeSemiBold text-xl'> Upcoming Live Webinars </Text>
             
      {/* Live timing part */}
      <View className='bg-primary/30 w-full px-5 py-3 rounded-lg gap-y-2'>
        <Text className='text-center font-manropeBold text-xl text-headline2'>{isSubscribe ? 'Live' :' Live In'}</Text>
              
        {/* Display time */}
        { isSubscribe ? <Text className='text-center text-headline2 font-manropeBold text-3xl '>Now</Text> :
          <View className='flex-row justify-between'>
            <View className='justify-center items-center'>
              <Text className='text-headline2 font-manropeBold text-3xl'>48</Text>
              <Text className='text-headline2 text-xl font-manropeSemiBold'>Hours</Text>
            </View>
            <View>
              <Text className='text-headline2 font-manropeBold text-4xl'>:</Text>
              <View />
            </View>
            <View className='justify-center items-center'>
              <Text className='text-headline2 font-manropeBold text-3xl'>24</Text>
              <Text className='text-headline2 text-xl font-manropeSemiBold'>Minutes</Text>
            </View>
            <View className='justify-center items-center'>
              <Text className='text-headline2 font-manropeBold text-4xl'>:</Text>
              <View />
            </View>
            <View className='justify-center items-center'>
              <Text className='text-headline2 font-manropeBold text-3xl'>00</Text>
              <Text className='text-headline2 text-xl font-manropeSemiBold'>Seconds</Text>
            </View>
          </View>}
  
      </View>
    </View>
  );
}