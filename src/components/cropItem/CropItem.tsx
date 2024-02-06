import { Text, View ,ImageSourcePropType} from 'react-native';
import React from 'react';
import { Image } from 'react-native';


interface ICropItemProps {
  uri: ImageSourcePropType;
  name: string
}


export default function CropItem(props: ICropItemProps) {
  return (
    <View className='h-32 w-32 border border-gray/20 justify-center items-center rounded-lg'> 
      <Image source={props.uri} />
      <Text>{props.name}</Text> 
    </View>
  );
}
