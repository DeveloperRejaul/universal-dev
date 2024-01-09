import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

import InterBlack from '../assets/fonts/SpaceMono-Regular.ttf';


const customFonts = {
  'Inter-Black': InterBlack,
};

SplashScreen.preventAutoHideAsync();
export default () => {
  const [isLoaded] = useFonts(customFonts);

  const handleOnLayout = useCallback( async () => {
    console.log(isLoaded);
    
    if (isLoaded) await SplashScreen.hideAsync();
  },[isLoaded]);

  return { handleOnLayout, isLoaded };
};