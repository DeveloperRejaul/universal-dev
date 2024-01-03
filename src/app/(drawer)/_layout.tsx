
import { CustomDrawer } from '@drawer';
import { useToken } from '@hooks/useToken';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation, useRouter } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { Text } from 'react-native';
const color = useToken('colors', 'amber400');

export default function DrawerLayout() {
  const router = useRouter();
  const navigation = useNavigation();
  
  return (
    <Drawer
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => (
        <CustomDrawer 
          onPress={(id)=>{router.push( `/(drawer)/(tab)/home/${id}`); navigation.dispatch(DrawerActions.closeDrawer());}}
          onPressItem={(id)=>{router.push( `/(drawer)/(tab)/home/${id}`);navigation.dispatch(DrawerActions.closeDrawer());}}
          {...props}
        />)}
    >
      <Drawer.Screen
        name='(tab)'
        options={{
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          title: ({ focused }) => (
            <Text style={{fontWeight:'bold', color:focused ? color : 'black'}}>
              Home
            </Text>
          ),
          drawerActiveBackgroundColor: '#fff',
        }}
      />
    </Drawer>
  );
}
