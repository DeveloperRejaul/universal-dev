import { Stack } from 'expo-router';

export default () => (
  <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name='main' />
    <Stack.Screen name='details' />
  </Stack>
);
