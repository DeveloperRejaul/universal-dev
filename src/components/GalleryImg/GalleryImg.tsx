
import { View ,Image} from 'react-native';
import React from 'react';
import {rw} from '../../constants/dimensions';

interface IGalleryImgProps{
  uri: string
}

export default function GalleryImg (props: IGalleryImgProps) {
  return (
    <View className='rounded-lg overflow-hidden' style={{height:rw(27), width:rw(27)}}>
      <Image source={{uri:props.uri}} className='w-full h-full' />
    </View>
  );
}
