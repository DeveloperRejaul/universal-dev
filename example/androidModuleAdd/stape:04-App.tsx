import { Text, View, NativeModules } from 'react-native'
import React, { useEffect } from 'react'

export default function App() {

  useEffect(()=>{
    NativeModules.demo.play((error, result)=>{console.log(result)})
  },[])

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}