import { Box, HStack, Image, Pressable, Text } from '@gluestack-ui/themed';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { rf, rw } from 'src/constants/dimensions';
import { useNavigation } from 'expo-router';
import Logo from '../../../assets/images/logo.png';
import { DrawerNavigationProp } from '@react-navigation/drawer';

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
    <Box
      px={'$3'}
      py={'$2'}
      borderBottomColor={'$coolGray200'}
      borderBottomWidth={'$1'}>
      <HStack alignItems='center' justifyContent='space-between'>
        <HStack columnGap={'$2'} alignItems='center'>
          <Pressable onPress={() => navigation.toggleDrawer()}>
            <Ionicons name='menu' size={rf(4)} />
          </Pressable>
          <Text color='$textDark900' fontWeight='$semibold'>
            Menu
          </Text>
        </HStack>
        <Image
          source={Logo}
          style={{ height: 40, width: rw(50), resizeMode: 'contain' }}
          alt='logo'
        />
        <Pressable>
          <AntDesign name='shoppingcart' size={rf(3)} color='black' />
        </Pressable>
      </HStack>
    </Box>
  );
}
