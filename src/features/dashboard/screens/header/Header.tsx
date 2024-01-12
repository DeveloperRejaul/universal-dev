import React, { useContext } from 'react';
import Icon from '@expo/vector-icons/Ionicons';
import {View } from 'react-native';
import Overly from '../overly/overly';
import { DrawerContext } from '../Index';
import { SIDEBAR_ICON_SIZE } from '../../constants/constants';
import { useMedia } from '@hooks/useMedia';

export default function Header() {
  const {toggle} = useContext(DrawerContext);
  const { md} = useMedia();

  return (
    <View className='flex-row h-12 bg-white shadow'>
      <Overly />

      {/* button for sidebar  close and open its only show when screen is small  */}
      {!md && <View className='h-[100%] justify-center'>
        <Icon name='menu' size={(SIDEBAR_ICON_SIZE)} onPress={()=>toggle(pre=>!pre)} />
      </View>}
      
    </View>
  );
}
