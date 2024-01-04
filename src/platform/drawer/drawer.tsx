import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import Container from './Container';
import { CustomDrawerProps } from './types';


const CustomDrawer = (props: CustomDrawerProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <Container onPress={props.onPress} onPressItem={props.onPressItem} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;



