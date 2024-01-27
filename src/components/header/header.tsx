import { useNavigation } from 'expo-router';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Text, View } from 'react-native';
import React from 'react';
import MenuIcon from 'src/assets/icon/MenuIcon';
import { useToken } from '@hooks/useToken';
import { rf } from 'src/constants/dimensions';

type RootStackParamList = {
  Drawer: undefined;
  Details: { itemId: number };
};

type DrawerScreenNavigationProp = DrawerNavigationProp<
RootStackParamList,
'Drawer'
>;

interface IHeaderProps {
  title: string
}
const MENU_COLOR = useToken('colors', 'primary');

export default function (props: IHeaderProps) {
  const navigation = useNavigation<DrawerScreenNavigationProp>();

  return (
    <View className='flex-row px-3 py-2 bg-white justify-between'>
      <MenuIcon size={rf(4)} color={MENU_COLOR} onPress={()=> navigation.toggleDrawer()} />
      <Text className='ml-5 font-bold text-2xl text-headline'>{props.title}</Text>
      <View />
    </View>
  );
}
