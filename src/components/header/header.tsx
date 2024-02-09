import { useNavigation } from 'expo-router';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Text, View } from 'react-native';
import React from 'react';
import MenuIcon from 'src/assets/icon/MenuIcon';
import { useToken } from '@hooks/useToken';
import { rf } from 'src/constants/dimensions';
import { styles } from 'src/styles/styles';

type RootStackParamList = {
  Drawer: undefined;
  Details: { itemId: number };
};

type DrawerScreenNavigationProp = DrawerNavigationProp<
RootStackParamList,
'Drawer'
>;

interface IHeaderProps {
  title: string;
  headerLeft?: React.ReactNode;
  headerRight?: React.ReactNode
}
const MENU_COLOR = useToken('colors', 'primary');

export default function (props: IHeaderProps) {
  const navigation = useNavigation<DrawerScreenNavigationProp>();

  return (
    <View className='flex-row px-3 py-2 bg-white justify-between'>
      {props.headerLeft ? props.headerLeft : <MenuIcon size={rf(4)} color={MENU_COLOR} onPress={()=> navigation.toggleDrawer()} />}
      <Text style={styles.xl3} className='ml-5 font-bold text-headline'>{props.title}</Text>
      {props.headerRight ? props.headerRight : <View /> }
    </View>
  );
}
