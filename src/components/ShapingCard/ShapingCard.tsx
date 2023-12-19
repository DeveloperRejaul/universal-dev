import React from 'react';
import cardImage from '../../assets/images/card.webp';
import AnimatedButton from '../button/AnimatedButton';
import { rw } from 'src/constants/dimensions';
import { Image, View } from 'react-native';
import { Pressable } from 'react-native';
import { Text } from 'react-native';


export default function ShapingCard() {
  return (
    <View className={`w-[${rw(45)}] h-96 bg-white p-2 rounded-md space-x-1 justify-between web:cursor-pointer web:w-56`}>
      <View className='h-[70%] w-full overflow-hidden rounded-md'>
        <Image
          className='h-full w-full'
          resizeMode='cover'
          source={cardImage}
          alt='product-image'
        />
      </View>
      <Pressable className='bg-white'>
        <Text className={`text-sm text-center text-purple hover:text-gray`}>
          Premium Exclusive Sneakers Grey-RSO7009
        </Text>
      </Pressable>

      <View className='justify-center flex-row space-x-2'>
        <Text className='text-gray font-normal text-center text-sm line-through'>
          ৳5,899
        </Text>
        <Text className='font-bold text-black text-center text-sm'>
          ৳1,225
        </Text>
      </View>
      <View className='justify-center items-center'>
        <AnimatedButton />
      </View>
    </View>
  );
}
