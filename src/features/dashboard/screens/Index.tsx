import { View } from 'react-native';
import Sidebar from 'src/features/drawer/screens/Sidebar';
import Header from './header/Header';
import { Slot } from 'expo-router';
import Footer from './footer/Footer';
import React, { createContext, useState } from 'react';
import { IDrawerProps, IDrawerValue } from '../type';

export const DrawerContext = createContext({} as IDrawerValue);

export const DrawerProvider = ({ children}: IDrawerProps) => {
  const [isOpen, toggle] = useState(false);

  return (<DrawerContext.Provider value={{isOpen, toggle}} >
    {children}
  </DrawerContext.Provider>);

};


const Dashboard = () => {
  return(
    <DrawerProvider>
      <View className='flex-1 flex-row'>
        <Sidebar />
        <View className='flex-1 justify-center'>
          <Header />
          <Slot />
          <Footer />
        </View>
      </View>
    </DrawerProvider>
  );
}; 

export default Dashboard;