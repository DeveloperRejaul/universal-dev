import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Button, CropItem, HStack, Header } from '@components';
import ArrowRightIcon from 'src/assets/icon/ArrowRightIcon';
import { Input } from '@platform-components';
import ProfileIcon from 'src/assets/icon/ProfileIcon';
import { rf } from 'src/constants/dimensions';
import LocationIcon from 'src/assets/icon/LocationIcon';
import {mainCrop} from '../../../db/mainCrop';

export default function register() {
  const router = useRouter();
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <Header title='Register Plot' headerLeft={<ArrowRightIcon className='rotate-180' onPress={()=> router.back()} />} />
      
      <ScrollView contentContainerStyle={{paddingBottom:50}} showsVerticalScrollIndicator={false}>
        <View className='px-3'>
          {/* choose plot part  */}
          <View className='py-3'>
            <Text className='text-2xl font-manropeBold py-3 text-headline'>Choose a Plot Icon</Text>
            <HStack className='justify-between'>
              <Button className='w-[45%] py-3' text='Take a photo' />
              <Button className='w-[45%] py-3' text='Gallery' />
            </HStack>
          </View>
          {/* Add plot part */}
          <View className='py-3 gap-y-3'>
            <Text className='text-2xl font-manropeBold py-3 text-headline'>Add your first plot</Text>
            <Input placeholder='Name of Plot' leftIcon={<ProfileIcon size={rf(3.5)} />} />
            <Input placeholder='GPS Location ' rightIcon={<LocationIcon size={rf(3.5)} />} />
            <Input placeholder='Plot Address' leftIcon={<ProfileIcon size={rf(3.5)} />} />
            <Input placeholder='Plot Area' />
            <Input placeholder='First Irrigation Date' />
            <Input placeholder='Days from First Irrigation Date' />
            <Input placeholder='Crop Stage' />
          </View>

          {/* Spacing part */}
          <View className='py-3 gap-y-3'>
            <Text className='text-2xl font-manropeBold py-3 text-headline'> Spacing </Text>
            <Input placeholder='Name of Plot' leftIcon={<ProfileIcon size={rf(3.5)} />} />
            <Input placeholder='GPS Location ' rightIcon={<LocationIcon size={rf(3.5)} />} />
            <Input placeholder='Plot Address' leftIcon={<ProfileIcon size={rf(3.5)} />} />
          </View>

          {/* Main Crop part */}
          <View className='w-full gap-y-3'>
            <Text className='text-2xl font-manropeBold py-3 text-headline'> Main Crop </Text>
            <View className='w-full flex-row flex-wrap justify-between gap-y-3 mb-4'>
              {mainCrop.map(d=> <CropItem name={d.name} uri={d.icon} key={d.id} />)}
            </View>
            <Button text='Proceed' className='py-3' onPress={()=>router.navigate('/(drawer)/(tab)/farm/farms')} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
