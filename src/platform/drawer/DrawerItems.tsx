import React from 'react';
import { ITEM_HEIGHT } from './constance';
import { Pressable, Text } from 'react-native';


export default function DrawerItems() {

  return (
    <Pressable className={`h-[${ITEM_HEIGHT}] transition border-b-2 border-coolGray400 justify-center`}>
      <Text className='hover:text-amber400 transition py-5 px-1'>
        DrawerItems
      </Text>
    </Pressable>
  );
}
