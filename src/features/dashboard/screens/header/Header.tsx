import React, { useContext } from 'react';
import Icon from '@expo/vector-icons/Ionicons';
import { Pressable, Text, View } from 'react-native';
import Overly from '../overly/overly';
import { DrawerContext } from '../Index';

export default function Header() {
 const {toggle} = useContext(DrawerContext)

  return (
    <View className='flex-row bg-bubble-gum'>
      <Overly />
      <Pressable
        onPress={() => toggle(pre=>!pre)}
        className='h-7 w-7 bg-tahiti justify-center items-center md:opacity-0'>
        <Icon name='apps-sharp' />
      </Pressable>
      <Text>Header</Text>
    </View>
  );
}
