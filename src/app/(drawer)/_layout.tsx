
import { CustomDrawer } from '@drawer';
import { useToken } from '@hooks/useToken';
import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { Text } from 'react-native';
const color = useToken('colors', 'bubble-gum');

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name='(tab)'
        options={{
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          title: ({ focused }) => (
            <Text style={{fontWeight:'bold', color:focused ? color : '$black'}}>
              Home
            </Text>
          ),
          drawerActiveBackgroundColor: '#fff',
        }}
      />
    </Drawer>
  );
}
