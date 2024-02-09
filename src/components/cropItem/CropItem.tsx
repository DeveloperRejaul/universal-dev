import { Text,ImageSourcePropType, Pressable} from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { useToken } from '@hooks/useToken';


interface ICropItemProps {
  uri: ImageSourcePropType;
  name: string;
  onLongPress?: () => void;
  isSelected?: boolean;
}

const COLORS = useToken('colors','primary', 30);

export default function CropItem(props: ICropItemProps) {
  return (
    <Pressable style={{backgroundColor: props.isSelected ? COLORS :''}} onPress={props.onLongPress} className='h-32 w-32 border border-gray/20 justify-center items-center rounded-lg'> 
      <Image source={props.uri} />
      <Text>{props.name}</Text> 
    </Pressable>
  );
}
