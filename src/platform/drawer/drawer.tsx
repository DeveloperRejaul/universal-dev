import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import Container from './items/Container';


const CustomDrawer = (props: DrawerContentComponentProps) => {



  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <Container />
      
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;



