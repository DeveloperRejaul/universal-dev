
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { View , ScrollView} from 'react-native';
import React from 'react';
import { Input } from '@platform-components';
import SearchIcon from 'src/assets/icon/SearchIcon';
import Header from 'src/components/header/header';
import { Card, CardSlide, WebinarTime } from '@components';
import VerticalSlide from 'src/components/slider/VerticalSlide';


export default function Index() {

  return (
    <View className='flex-1 pt-12 bg-white'>
      <Header title='Webinars' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='flex-1 bg-white px-3 pt-5 gap-y-5 pb-20'>
          {/* Search Part  */}
          <Input type='search' leftIcon={<SearchIcon />} placeholder='Search' />

          <View className='gap-y-3'>

            {/* Display webinars time */}
            <WebinarTime />

            {/* Card1 webinars  */}
            <Card />

            {/* Card2 part speaker part  */}
            <CardSlide />

            {/* Video Card webinar part */}
            <VerticalSlide heading='Webinars' />

          </View>
        </View>
      </ScrollView>
    </View>
  );
}





