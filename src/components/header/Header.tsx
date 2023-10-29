import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type AppProps = {
    onPress: ()=>{}
}

export  function Header({onPress}:AppProps) {
  return (
    <View>
      <Text onPress={onPress}>Header</Text>
    </View>
  )
}

const styles = StyleSheet.create({})