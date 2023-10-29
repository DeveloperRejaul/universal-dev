
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppContext from 'src/context/AppContext'

export default function () {
  return (
    <AppContext>
      <SafeAreaView style={{flex:1}}>
      <Stack screenOptions={{headerShown:false}}>
          <Stack.Screen name='index' options={{title:"Login"}}/>
          <Stack.Screen name='(tab)' options={{headerShown:false}}/>
      </Stack>
      </SafeAreaView>
    </AppContext>
  )
}

