
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { View , Image ,Text , FlatList, NativeSyntheticEvent, NativeScrollEvent, StyleSheet, Pressable} from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
import { Button } from '@components';
import { useToken } from '@hooks/useToken';
import PlayIcon from 'src/assets/icon/PlayIcon';
import { rf, rw } from 'src/constants/dimensions';
import { randomId } from 'src/utils/random';
import { useRouter } from 'expo-router';

const uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4EhjRIvCnim1TgoLuLwTOd13NV194PSuHc6xgTgot0yN6B-MuGpqyh5Hore35f_k2Q2k&usqp=CAU';
const BTN_UNSUBSCRIBE_BG = useToken('colors', 'primary');

const data =[uri,uri,uri];
interface RenderItemsProps {
  item: string;
}

export default function CardSlide() {



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