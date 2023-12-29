import { Pressable, Text, View,StyleSheet, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { ITEM_HEIGHT, MARGIN } from './constance';
import { Ionicons } from '@expo/vector-icons';
import { useToken } from '@hooks/useToken';
import Items from './Items';
import { IAccordionProps } from './type';
const ACTIVE_COLOR = useToken('colors','amber400');
const ICON_SIZE = useToken('size', '5');
const ICON_COLOR = useToken('colors','coolGray700');
const BORDER_COLOR = useToken('colors','rose200');
const CONTAINER_HEIGHT = useToken('size', Platform.OS ==='web'? '10':'9');
const BG_COLOR = useToken('colors','bg-rose50');
const BG = useToken('colors','white');

export default function Accordion(props: IAccordionProps) {

  const [isOpen, toggle] = useState(false);
  const [isHover , setIsHover ] = useState(false);
  const rotate = useSharedValue('0deg');
  const itemsHeight = useSharedValue(0);
  
  useEffect(()=>{
    if(!isOpen) rotate.value = withTiming('0deg',{duration:500});
    if(isOpen)rotate.value = withTiming('-90deg',{duration:500});

    // handle items animation
    if(isOpen)itemsHeight.value = withTiming(((props.items.length) * (ITEM_HEIGHT+MARGIN)), {duration:500});
    if(!isOpen)itemsHeight.value = withTiming(0, {duration:500});
  },[isOpen]);

  const rotateStyle = useAnimatedStyle(()=>({transform:[{rotate:rotate.value}]}));
  const animateHeight = useAnimatedStyle(()=>({height:itemsHeight.value}));

  return (
    <>
      <Pressable onPress={()=>props.onPressItem?.(props.id)} className='bg-rose50 items-center justify-between my-1 flex-row'>
        <View className='border-y-2 border-rose200 w-[85%] h-10 justify-center pl-5'>
          <Text className=''>{props.title}</Text>
        </View>
        <Pressable
          onHoverIn={()=>{Platform.OS === 'web' && setIsHover(true);}}
          onHoverOut={()=>{Platform.OS === 'web' && setIsHover(false);}}
          onPress={()=>{toggle((p)=>!p);}} 
          style={[styles.buttonBody,{backgroundColor:isOpen || isHover ? ACTIVE_COLOR:BG_COLOR}]}
        >
          <Animated.View style={rotateStyle}>
            <Ionicons name='chevron-back' size={ICON_SIZE} color={ICON_COLOR} />
          </Animated.View>
        </Pressable>
      </Pressable>
      <Animated.View style={[animateHeight,{backgroundColor:BG, overflow:'hidden'}]}>
        {props.items.map(({id,label})=> (<Items onPress={(id)=>props?.onPressItem(id)} id={id} label={label} key={id} />))}
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonBody: {
    width:'15%',
    justifyContent:'center',
    alignItems:'center',
    height:CONTAINER_HEIGHT,
    borderLeftWidth:2,
    borderTopWidth:2,
    borderBottomWidth:2,
    borderColor:BORDER_COLOR
  }

});
    