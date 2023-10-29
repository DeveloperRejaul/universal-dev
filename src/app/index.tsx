import {Button, Text, View } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'

export default function index() {
   const router =  useRouter()

  return (
    <View>
      <Button title='goto register with router ' onPress={()=>router.push("/register")}/>
      <Link href={"/register"} asChild>
          <Button title='Goto Register with Link'/>
      </Link>
      <Button title='Login' onPress={()=>router.replace("/(tab)/")}/>
      <Text style={{fontFamily:"Inter-Black", fontSize:30, textAlign:"center"}}>App</Text>
    </View>
  )
}