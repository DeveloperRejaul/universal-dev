import React from 'react';
import { Slot } from 'expo-router';
import Header from 'src/features/dashboard/screens/header/Header';
import Footer from 'src/features/dashboard/screens/footer/Footer';
import Sidebar from 'src/features/drawer/screens/Sidebar';
import { View } from 'react-native';

export default function dashboardLayout() {
  return (
    <>
      <View className='flex-1 flex-row'>
        <Sidebar />
        <View className='flex-1 justify-center'>
          <Header />
            <Slot />
          <Footer />
        </View>
      </View>
    </>
  );
}

