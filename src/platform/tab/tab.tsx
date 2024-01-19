import { DrawerActions } from '@react-navigation/native';
import { Tabs, useNavigation } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';


export default () => {

  const navigation = useNavigation();
  return (
    <Tabs> 
      <Tabs.Screen name='home' options={{
        headerLeft() {
          return (<Text onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())}> Open  </Text>);
        },
      }} 
      />
      <Tabs.Screen name='profile' />
    </Tabs>
  );


};