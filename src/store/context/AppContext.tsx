import useFonts from '@hooks/useFonts';
import React, { ReactElement, createContext} from 'react';
import { View } from 'react-native';

type contextType = object
type AppProps = {
  children: ReactElement, 
}

export const Context = createContext<contextType>({});


export default function AppContext({children}: AppProps) {
  const {handleOnLayout,isLoaded} = useFonts();

  if (!isLoaded) return null;
  return (
    <Context.Provider value={{}}>
      <View onLayout={handleOnLayout} />
      {children}
    </Context.Provider>
  );
}