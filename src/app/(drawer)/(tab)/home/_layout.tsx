import { Stack } from 'expo-router';
import React from 'react';


export default () => (
  <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name='main' />
    <Stack.Screen name='details' />
  </Stack>
);
