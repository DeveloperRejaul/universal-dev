import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Icon from "@expo/vector-icons/Ionicons"


export default function () {
  return <Tabs screenOptions={{headerShown:false}} > 
  <Tabs.Screen name='index' options={{href:null}}/>
  <Tabs.Screen name='(one)' options={{
    title:"Home",
     tabBarIcon:({focused})=><Icon name='home' size={25}/>
    }}/>
  <Tabs.Screen name='(two)' options={{
    title:"Setting",
     tabBarIcon:({focused})=><Icon name='settings' size={25}/>
    }}/>
</Tabs>
}
