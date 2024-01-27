import { useGlobal } from '@hooks/useGlobal';
import React, { createContext,useCallback} from 'react';
import { Socket } from 'socket.io-client';
import * as SplashScreen from 'expo-splash-screen';
import ManropeBold from '../../assets/fonts/Manrope-Bold.ttf';
import ManropeSemiBold from '../../assets/fonts/Manrope-SemiBold.ttf';
import ManropeMedium from '../../assets/fonts/Manrope-Medium.ttf';
import ManropeRegular from '../../assets/fonts/Manrope-Regular.ttf';
import {useFonts } from 'expo-font';
import { View } from 'react-native';


const customFonts = {
  'manrope-medium': ManropeMedium,
  'manrope-regular':ManropeRegular,
  'manrope-semiBold': ManropeSemiBold,
  'manrope-bold':ManropeBold,
};


interface IContextType {
  socket: Socket | null,
}

type AppProps = {
  children: React.ReactNode
}

export const Context = createContext({} as IContextType );



SplashScreen.preventAutoHideAsync();
export default function AppContext({children}: AppProps) {
  const [fontsLoaded] = useFonts(customFonts);
  const {socket} = useGlobal();

  const handleLayout = useCallback(async()=>{
    if(fontsLoaded) await SplashScreen.hideAsync();
  },[fontsLoaded]);

  if(!fontsLoaded) return null;



  return (
    <Context.Provider value={{socket}}>
      <View style={{flex:1}} onLayout={handleLayout}>
        {children}
      </View>
    </Context.Provider>
  );
}

