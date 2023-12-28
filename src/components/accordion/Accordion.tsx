import { Pressable, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import HStack from '../HStack/HStack';
import { ITEM_HEIGHT } from './constance';
import { Ionicons } from '@expo/vector-icons';
import { useToken } from '@hooks/useToken';
import Items from './Items';

export default function Accordion({data}) {

const [isOpen, toggle] = useState(false);
  const rotate = useSharedValue('0deg');
  const itemsHeight = useSharedValue(0);
  
  useEffect(()=>{
    if(!isOpen) rotate.value = withTiming('0deg',{duration:500});
    if(isOpen)rotate.value = withTiming('-90deg',{duration:500});

    // handle items animation
    if(isOpen)itemsHeight.value = withTiming((data.items.length-1) * ITEM_HEIGHT, {duration:500});
    if(!isOpen)itemsHeight.value = withTiming(0, {duration:500});
  },[isOpen])

  const rotateStyle = useAnimatedStyle(()=>({transform:[{rotate:rotate.value}]}));
  const animateHeight = useAnimatedStyle(()=>({height:itemsHeight.value}));

  return (
    <View>
    <HStack className='bg-rose50 items-center justify-between'>
      <View className='border-y-2 border-rose200 w-[85%] h-10 justify-center pl-5'>
        <Text className=''>Containter</Text>
      </View>
      <Pressable 
        onPress={()=>{toggle((p)=>!p);}} 
        className={'border-l-2 w-[15%] border-y-2 border-rose200 h-10 justify-center items-center transition  web:hover:bg-amber400 '}
      >
        <Animated.View style={rotateStyle}>
          <Ionicons name='chevron-back' size={useToken('size', '5')} color={useToken('colors','coolGray700')} />
        </Animated.View>
      </Pressable>
    </HStack>
    <Animated.View style={animateHeight}>
      {data.items.map((item, i)=> (<Items key={i} />))}
    </Animated.View>
  </View>
  )
}