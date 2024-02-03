import { Text, View } from 'react-native';
import React from 'react';
import { Card, Header, WebinarTime } from '@components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input } from '@platform-components';
import SearchIcon from 'src/assets/icon/SearchIcon';
import MorningIcon from 'src/assets/icon/MorningIcon';
import WalletIcon from 'src/assets/icon/WalletIcon';
import NotificationIcon from 'src/assets/icon/NotificationIcon';
import { rf } from 'src/constants/dimensions';

export default function Index() {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <Header title='Home' headerRight={
        <View className='flex-row'>
          <View className='mr-4 justify-center items-center'>
            <WalletIcon />
            <Text className='text-headline2 font-manropeBold text-xl'>₹450</Text>
          </View>
          <NotificationIcon size={rf(4)} />
        </View>
      }
      />
      <View className='flex-1 bg-white px-3 gap-y-6'>

        <View className='mt-4'>
          <View className='flex-row items-center'>
            <Text className='text-2xl font-manropeBold mr-2 text-headline ' >Good Morning</Text>
            <MorningIcon />
          </View>
          <Text className='text-black text-sm font-manropeRegular'>Tuesday, 09 May 2023</Text>
        </View>

        {/* Search Part  */}
        <Input type='search' leftIcon={<SearchIcon />} placeholder='Search' />

        {/* Display webinars time */}
        <WebinarTime />

        {/* Card1 webinars  */}
        <Card buttonShown={false} dateTimeShown ={false} />
      </View>
    </SafeAreaView>
  );
}
