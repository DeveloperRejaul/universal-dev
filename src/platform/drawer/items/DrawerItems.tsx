import {Text, View } from 'react-native';
import React from 'react';
import { ITEM_HEIGHT } from '../constance';

export default function DrawerItems() {
  return (
    <View style={{height:ITEM_HEIGHT}} className='px-5 bg-rose50 py-2 border-b-2 my-1 border-rose100'>
      <Text>DrawerItems</Text>
    </View>
  );
}