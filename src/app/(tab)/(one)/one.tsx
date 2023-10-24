import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function index() {
    const router = useRouter()
  return (
    <View>
      <Text>index</Text>
      <Button title='Goto Details' onPress={()=>router.push("/(tab)/(one)/details")}/>
    </View>
  )
}

const styles = StyleSheet.create({})