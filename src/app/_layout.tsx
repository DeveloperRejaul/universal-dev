
import { Stack } from 'expo-router'
import React from 'react'

export default function () {
  return (
    <Stack>
        <Stack.Screen name='index' options={{title:"Login"}}/>
        <Stack.Screen name='(tab)' options={{headerShown:false}}/>
    </Stack>
  )
}

