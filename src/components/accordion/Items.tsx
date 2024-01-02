import { Pressable, Text } from 'react-native';
import React from 'react';
import { ITEM_HEIGHT, MARGIN } from './constance';
import { IAccordionItemProps } from './type';

export default function Items({label,onPress,id}: IAccordionItemProps) {
  return ( 
    <Pressable 
      onPress={()=>onPress?.(id)}
      style={{height:ITEM_HEIGHT,marginVertical:MARGIN/2}}
      className='bg-rose50 justify-center pl-5 border-y-2 border-y-rose100 group'
    >
      <Text className='transition duration-500 group-hover:text-amber400'>{label}</Text>
    </Pressable>
  );
}