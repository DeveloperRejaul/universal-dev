
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppContext from 'src/context/AppContext'
import {Provider  } from "react-redux";
import { store } from 'src/rtk/store/store';

export default function () {
  return (
    <Provider store={store}>
      <AppContext>
        <SafeAreaView style={{flex:1}}>
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name='index' options={{title:"Login"}}/>
            <Stack.Screen name='(tab)' options={{headerShown:false}}/>
        </Stack>
        </SafeAreaView>
      </AppContext>
    </Provider>
  )
}

