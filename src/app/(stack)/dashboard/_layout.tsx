import React, { useState } from 'react'
import { Slot } from 'expo-router';
import Header from 'src/features/dashboard/screens/header/Header';
import Footer from 'src/features/dashboard/screens/footer/Footer';
import Sidebar from 'src/features/dashboard/screens/sidebar/Sidebar';
import { VStack,HStack } from '@gluestack-ui/themed';

export default function dashboardLayout() {
const [toggle, setToggle]  = useState(false);

  return (
   <>
    <HStack h={"$full"}>
        <Sidebar toggle={toggle} setToggle={setToggle}/>
        <VStack h={"$full"} flex={1} justifyContent='space-between' >
          <Header toggle={toggle} setToggle={setToggle}/>
            <Slot/>
          <Footer/>
        </VStack>
    </HStack>
   </>
  )
}