import { CustomDrawer } from '@drawer';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name='(tab)' options={{ title: 'Home' }} />
      <Drawer.Screen name='setting' />
    </Drawer>
  );
}
