import { CustomDrawer } from '@drawer';
import { Drawer } from 'expo-router/drawer';
import React from 'react';

export default ()=> (
  <Drawer
    screenOptions={{headerShown:false}}
    drawerContent={(props) => (<CustomDrawer {...props} />)}
  />

);
