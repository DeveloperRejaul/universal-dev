import { Pressable, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { HStack } from '@components';
import { useToken } from '@hooks/useToken';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import DrawerItems from './DrawerItems';
import { ITEM_HEIGHT, drawerItems } from '../constance';


export default function Container() {
  const [isOpen, toggle] = useState(false);
  const rotate = useSharedValue('0deg');
  const itemsHeight = useSharedValue(0);




  const rotateStyle = useAnimatedStyle(()=>({transform:[{rotate:rotate.value}]}));
  const animateHeith = useAnimatedStyle(()=>({transform:[{rotate:rotate.value}]}));


  return (
    <View>
      {drawerItems.map((data,i)=>(
        <View key={i}>
          <HStack className='bg-rose50 items-center justify-between'>
            <View className='border-y-2 border-rose200 w-[85%] h-10 justify-center pl-5'>
              <Text className=''>Containter</Text>
            </View>
            <Pressable 
              onPress={()=>{
                toggle((p)=>{
                  // handle animated icon 
                  if(p) rotate.value = withTiming('0deg',{duration:500});
                  if(!p)rotate.value = withTiming('-90deg',{duration:500});

                  // handle items animation
                  if(p)itemsHeight.value = withTiming((data.items.length-1) * ITEM_HEIGHT, {duration:500});
                  if(!p)itemsHeight.value = withTiming(0, {duration:500});

                  return !p;
                });

              }} 
              className={'border-l-2 w-[15%] border-y-2 border-rose200 h-10 justify-center items-center transition  web:hover:bg-amber400 '}
            >
              <Animated.View style={rotateStyle}>
                <Ionicons name='chevron-back' size={useToken('size', '5')} color={useToken('colors','coolGray700')} />
              </Animated.View>
            </Pressable>
          </HStack>
          <Animated.View key={i} style={{height:itemsHeight.value}}>
            {data.items.map((item, i)=> (<DrawerItems key={i} />))}
          </Animated.View>
        </View>
      )
      )}
      

     
     
    </View>
    
  );
}