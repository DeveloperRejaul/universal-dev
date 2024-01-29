
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { View , Image ,Text, ScrollView, FlatList, NativeSyntheticEvent, NativeScrollEvent, StyleSheet, Pressable} from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
import { Input } from '@platform-components';
import SearchIcon from 'src/assets/icon/SearchIcon';
import Header from 'src/components/header/header';
import { Button, Container } from '@components';
import { useToken } from '@hooks/useToken';
import PlayIcon from 'src/assets/icon/PlayIcon';
import { rf, rw } from 'src/constants/dimensions';
import { randomId } from 'src/utils/random';
import ArrowRightIcon from 'src/assets/icon/ArrowRightIcon';
import { useRouter } from 'expo-router';

const uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4EhjRIvCnim1TgoLuLwTOd13NV194PSuHc6xgTgot0yN6B-MuGpqyh5Hore35f_k2Q2k&usqp=CAU';
const isSubscribe = true;
const BTN_SUBSCRIBE_BG = useToken('colors', 'primary', 20);
const BTN_UNSUBSCRIBE_BG = useToken('colors', 'primary');

const data =[uri,uri,uri];
interface RenderItemsProps {
  item: string;
}

export default function Index() {
  const [activeIndex, setIndex] = useState(0);
  const router = useRouter();

  const slider = useRef<FlatList>(null);
  
  const onScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    setIndex(roundIndex);
  }, []);



  return (
    <View className='flex-1 pt-12 bg-white'>
      <Header title='Webinars' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='flex-1 bg-white px-3 pt-5 gap-y-5 pb-20'>
          {/* Search Part  */}
          <Input type='search' leftIcon={<SearchIcon />} placeholder='Search' />

          {/* Webinars */}
          <View className='gap-y-3'>
            <Text className='text-headline2 font-manropeSemiBold text-xl'> Upcoming Live Webinars </Text>
           
            {/* Live timing part */}
            <View className='bg-primary/30 w-full px-5 py-3 rounded-lg gap-y-2'>
              <Text className='text-center font-manropeBold text-xl text-headline2'>{isSubscribe ? 'Live' :' Live In'}</Text>
            
              {/* Display time */}
              { isSubscribe ? <Text className='text-center text-headline2 font-manropeBold text-3xl '>Now</Text> :
                <View className='flex-row justify-between'>
                  <View className='justify-center items-center'>
                    <Text className='text-headline2 font-manropeBold text-3xl'>48</Text>
                    <Text className='text-headline2 text-xl font-manropeSemiBold'>Hours</Text>
                  </View>
                  <View>
                    <Text className='text-headline2 font-manropeBold text-4xl'>:</Text>
                    <View />
                  </View>
                  <View className='justify-center items-center'>
                    <Text className='text-headline2 font-manropeBold text-3xl'>24</Text>
                    <Text className='text-headline2 text-xl font-manropeSemiBold'>Minutes</Text>
                  </View>
                  <View className='justify-center items-center'>
                    <Text className='text-headline2 font-manropeBold text-4xl'>:</Text>
                    <View />
                  </View>
                  <View className='justify-center items-center'>
                    <Text className='text-headline2 font-manropeBold text-3xl'>00</Text>
                    <Text className='text-headline2 text-xl font-manropeSemiBold'>Seconds</Text>
                  </View>
                </View>}

            </View>

            {/* Card1 webinars  */}
            <View className='border border-border p-3 w-full rounded-xl gap-y-2' >
              {/* Image part  */}
              <View className='w-full'>
                <Image source={{uri}} style={{height:200, width:'100%'}} className='rounded-xl' />
                <Text className='text-black absolute top-3 right-4 bg-white rounded-full font-manropeRegular px-3 py-1 text-lg'>Premium</Text>
              </View>
       
              {/* Bottom body part  */}
              <View>
                <Text className='text-headline2 text-xl font-manropeSemiBold'> Lorem Ipsum </Text>
                <View className='flex-row justify-between items-center'>
                  <Text className='text-headline2 text-xl font-manropeSemiBold'> Lorem Ipsum </Text>
                  <Button 
                    className='px-4 py-1'
                    containerStyle={{ backgroundColor:isSubscribe ? BTN_SUBSCRIBE_BG:BTN_UNSUBSCRIBE_BG}}
                    textStyle={{color: isSubscribe ? useToken('colors', 'primary') : useToken('colors', 'white')}} 
                    text='Subscribe'
                  />
                </View>
              </View>
              <View className='flex-row w-[50%] justify-between'>
                <Text className='text-paragraph text-sm font-manropeRegular' >Speaker</Text>
                <Text className='text-paragraph text-sm font-manropeRegular' >|</Text>
                <Text className='text-paragraph text-sm font-manropeRegular' >Date and Time</Text>
              </View>
            </View>

            {/* Card2 part speaker part  */}
            <View className='w-full gap-y-3'>
              <Text className='text-headline2 text-xl font-manropeSemiBold'>Lorem Ipsum</Text>
              <Text className='text-paragraph text-sm font-manropeRegular'>Speaker Name</Text>
              <View className='w-full rounded-xl overflow-hidden shadow-2xl' > 
                <FlatList
                  ref={slider}
                  onScroll={onScroll}
                  snapToAlignment='center'
                  decelerationRate='fast'
                  pagingEnabled
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={()=>randomId()}
                  horizontal
                  data={data}
                  renderItem={({item})=> (
                    <Pressable onPress={()=>router.push('/(drawer)/(tab)/webinar/speaker-details')}>
                      <RenderItems {...{item}} />
                    </Pressable>
                  ) }
                />
                <View className='absolute flex-row bottom-2 right-3'>
                  {data.map((ind, i)=> <View key={i} style={[styles.indicator,{backgroundColor:activeIndex === i ? '#fff': '#ffffffad'}]} />)}
                </View>
                <Button containerStyle={{backgroundColor:BTN_UNSUBSCRIBE_BG}} leftIcon={<PlayIcon size={rf(2)} />} textStyle={{color:useToken('colors','white' ), marginLeft:4}} text='Subscribe' className='absolute px-3 py-1 bottom-3 left-4' />
              </View>
            </View>

            {/* Video Card webinar part */}
            <View>
              <View className='flex-row justify-between items-center mb-2 mt-4'>
                <Text className='text-center text-headline2 font-manropeBold text-2xl'>Webinars</Text>
                <Text className='text-primary text-lg font-manropeBold'>View All</Text>
              </View>
              
              <FlatList 
                showsHorizontalScrollIndicator={false}
                horizontal
                data={[1,2,3,4,5,6]}
                keyExtractor={(item, index)=> index.toString()}
                renderItem={()=>(
                  <View style={{width:rw(60)}} className='border border-border rounded-2xl overflow-hidden mx-3'>
                    <View className='w-full'>
                      <Image source={{uri}} style={{height:200, width:'100%', borderBottomRightRadius:15, borderBottomLeftRadius:15}} />
                      {/* Play Icon */}
                      <View className='absolute left-[40%] top-[40%] h-16 w-16 border-2 border-white rounded-full justify-center items-center'>
                        <PlayIcon />
                      </View>
                    </View>
                    <View className='flex-row justify-between px-2 py-2'>
                      <Text className='text-headline2 text-xl font-manropeSemiBold'> Lorem Ipsum </Text>
                      <Text className='text-paragraph text-sm font-manropeRegular'>25:00</Text>
                    </View>
                    <View className='flex-row justify-between px-2 pb-2'>
                      <Text className='text-headline2 text-xl font-manropeSemiBold'> Lorem Ipsum </Text>
                      <View />
                    </View> 
                    <View className='flex-row justify-between px-2 pb-2'>
                      <Text className='text-paragraph text-sm font-manropeRegular'>Speaker Name</Text>
                      <ArrowRightIcon color={BTN_UNSUBSCRIBE_BG} onPress={()=>router.push('/(drawer)/(tab)/webinar/webinar-details')} />
                    </View>
                  </View>
                ) }
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}


const RenderItems = ({item}: RenderItemsProps) =>{
  return <Image source={{uri:item}} style={styles.imageSlide} />;
};


const styles = StyleSheet.create({
  imageSlide:{
    width:rw(95),
    height:200
  },
  indicator:{
    height:15,
    width:15,
    borderRadius:10,
    backgroundColor:'#ffffffad',
    marginHorizontal:3

  }
});