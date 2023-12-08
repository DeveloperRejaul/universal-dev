import React from 'react'
import { Slot } from 'expo-router';
import Header from 'src/features/dashboard/screens/header/Header';
import Footer from 'src/features/dashboard/screens/footer/Footer';
import Sidebar from 'src/features/drawer/screens/Sidebar';
import { VStack,HStack } from '@gluestack-ui/themed';

export default function dashboardLayout() {

  return (
   <>
    <HStack h={"$full"}>
        <Sidebar/>
        <VStack h={"$full"} flex={1} justifyContent='space-between'>
          <Header/>
            <Slot />
          <Footer />
        </VStack>
    </HStack>
   </>
  )
}