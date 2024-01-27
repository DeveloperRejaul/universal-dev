import { View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';

interface IAvatarProps {
  uri: string;
  size?: number
}


export default function Avatar({uri, size}: IAvatarProps ) {
  return (
    <View className='border-2 border-primary' style={{width:size || 50, height: size || 50 , borderRadius:  25, overflow:'hidden'}}>
      <Image style={{height:'100%', width:'100%'}} source={{uri}} />
    </View>
  );
}