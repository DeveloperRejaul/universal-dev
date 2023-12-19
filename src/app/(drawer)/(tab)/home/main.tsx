import React from 'react';
import { Header, Input } from '@platform-components';
import { SimpleCarousal } from '@components';
import { ScrollView, View } from 'react-native';

export default function Home() {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View className='flex-1 px-3 pb-10 bg-silver'>
        {/* header part */}
        <View>
          <Header />
          <Input
            placeholder='Search for products'
            type='search'
            onChangeText={(text) => { console.log(text)}}
          />
        </View>

        {/* slider part  */}
        <SimpleCarousal />

      </View>
    </ScrollView>
  );
}
