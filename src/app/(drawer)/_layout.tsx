import { Drawer } from 'expo-router/drawer';
export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen name='(tab)' options={{ title: 'Home' }} />
      <Drawer.Screen name='setting' />
    </Drawer>
  );
}
