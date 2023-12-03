import React from 'react';
import { useRouter } from 'expo-router';
import {
  Box,
  Button,
  Center,
  Divider,
  Pressable,
  ScrollView,
  View,
} from '@gluestack-ui/themed';
import { Header, Input } from '@platform-components';
import { ShapingCard, SimpleCarousal } from '@components';
import { Text } from '@gluestack-ui/themed';
import Icon from '@expo/vector-icons/FontAwesome5';

const productCategory = [
  { name: 'Jersey', icon: '' },
  { name: 'T-Shirt', icon: '' },
  { name: 'Panjabi', icon: '' },
  { name: 'Attar', icon: '' },
  { name: 'Borka', icon: '' },
  { name: 'Offers', icon: '' },
  { name: 'Canvas', icon: '' },
  { name: 'Flash Sale', icon: '' },
];

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView>
      <Box flex={1} px={'$3'} paddingBottom={'$10'}>
        {/* header part */}
        <View>
          <Header />
          <Input
            placeholder='Search for products'
            type='search'
            onChangeText={(text) => {
              console.log(text);
            }}
          />
        </View>

        {/* slider part  */}
        <SimpleCarousal />

        {/* products list part  */}
        <Box
          my={'$10'}
          w={'$full'}
          flexDirection='row'
          flexWrap='wrap'
          borderWidth={'$2'}
          borderRadius={'$sm'}
          borderColor='$coolGray500'>
          {productCategory.map((category) => (
            <Center w={'$1/4'} py={'$2'} sx={{ _web: { cursor: 'pointer' } }}>
              <Center h={'$16'} w={'$16'} rounded={'$full'} bg={'$amber100'}>
                <Icon name='tshirt' size={25} />
              </Center>
              <Text>{category.name}</Text>
            </Center>
          ))}
        </Box>

        {/* card part  */}
        <Divider />
        <Box
          flexDirection='row'
          justifyContent='center'
          columnGap={'$10'}
          py={'$3'}>
          <Pressable>
            <Text>NEW</Text>
          </Pressable>
          <Pressable>
            <Text>TOP</Text>
          </Pressable>
          <Pressable>
            <Text>🔥FLASH SALE</Text>
          </Pressable>
        </Box>
        <ShapingCard />
      </Box>
    </ScrollView>
  );
}
