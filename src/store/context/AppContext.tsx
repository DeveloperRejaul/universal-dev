import { useGlobal } from '@hooks/useGlobal';
import React, { createContext,useCallback} from 'react';
import { Socket } from 'socket.io-client';
import * as SplashScreen from 'expo-splash-screen';
import InterBlack from '../../assets/fonts/SpaceMono-Regular.ttf';
import {useFonts } from 'expo-font';
import { View } from 'react-native';


const customFonts = {
  'Inter-Black': InterBlack,
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

