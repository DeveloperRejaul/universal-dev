import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Text, View } from 'react-native';
import { Pressable } from 'react-native';
import { rf } from 'src/constants/dimensions';

type RootStackParamList = {
  Drawer: undefined;
  Details: { itemId: number };
};

type DrawerScreenNavigationProp = DrawerNavigationProp<
  RootStackParamList,
  'Drawer'
>;

export default function () {
  const navigation = useNavigation<DrawerScreenNavigationProp>();
  return (
    <View className='px-3 py-2 flex-1'>
      <View className='flex-1 items-center justify-between flex-row'>
        <View className='space-x-2 items-center'>
          <Pressable onPress={() => navigation.toggleDrawer()}>
            <Ionicons name='menu' size={rf(4)} />
          </Pressable>
          <Text className='text-black font-semibold'>
            Menu
          </Text>
        </View>
        <Text> Logo </Text>
        <Pressable>
          <AntDesign name='shoppingcart' size={rf(3)} color='black' />
        </Pressable>
      </View>
    </View>
  );
}
