import { Button, View } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '@platform-components';
import { useAppContext } from '@hooks/useAppContext';

export default function setting() {
  const router = useRouter();
  //  const {text} = useAppContext()
  //  console.log(text);

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Button
        title='Goto Details'
        onPress={() => router.push('/(drawer)/(tab)/home/details')}
      />
      <Button title='Goto demo' onPress={() => router.push('/(stack)/demo')} />
      <Button title='Logout' onPress={() => router.replace('/')} />
    </View>
  );
}
