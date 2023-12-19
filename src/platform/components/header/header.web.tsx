import { Ionicons, AntDesign } from '@expo/vector-icons';
import { rf, rw } from 'src/constants/dimensions';
import { useNavigation } from 'expo-router';
import Logo from '../../../assets/images/logo.png';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Text, View } from 'react-native';
import { Pressable } from 'react-native';
import { Image } from 'react-native';

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
    <View className='px-3 py-2'
    style={{
      borderBottomColor:'gray',
      borderBottomWidth:1
    }}>
      <View className='items-center justify-center flex-row'>
        <View className='space-x-2 items-center'>
          <Pressable onPress={() => navigation.toggleDrawer()}>
            <Ionicons name='menu' size={rf(4)} />
          </Pressable>
          <Text className='text-black font-semibold'>
            Menu
          </Text>
        </View>
        <Image
          source={Logo}
          style={{ height: 40, width: rw(50), resizeMode: 'contain' }}
          alt='logo'
        />
        <Pressable>
          <AntDesign name='shoppingcart' size={rf(3)} color='black' />
        </Pressable>
      </View>
    </View>
  );
}
