import { CustomDrawer } from '@drawer';
import { Text } from '@gluestack-ui/themed';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name='(tab)'
        options={{
          title: ({ focused }) => (
            <Text fontWeight='$bold' color={focused ? '$amber500' : '$black'}>
              Home
            </Text>
          ),
          drawerActiveBackgroundColor: '#fff',
        }}
      />
    </Drawer>
  );
}
