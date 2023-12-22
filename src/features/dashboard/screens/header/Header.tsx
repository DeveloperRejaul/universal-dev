import React from 'react';
import Icon from '@expo/vector-icons/Ionicons';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { drawerToggle } from 'src/features/drawer/slice/slice';
import { Overly } from '@components';
import { Pressable, Text, View } from 'react-native';

export default function Header() {
  const dispatch = useAppDispatch();

  return (
    <View className='flex-row bg-bubble-gum'>
      <Overly />
      <Pressable
        onPress={() => dispatch(drawerToggle())}
        className='h-7 w-7 bg-tahiti justify-center items-center md:opacity-0'>
        <Icon name='apps-sharp' />
      </Pressable>
      <Text>Header</Text>
    </View>
  );
}
