import { useToken } from '@hooks/useToken';
import React from 'react';
import { TextStyle, ViewStyle,Pressable, Text,ActivityIndicator, GestureResponderEvent} from 'react-native';

interface IPropsType {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  text?: string;
  isLoading?: boolean;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
};

const textColor = useToken('colors', 'gray');

export default function button({ onPress ,text,isLoading,textStyle,containerStyle}: IPropsType) {
  return (
    <Pressable
      disabled={isLoading}
      style={containerStyle}
      className='bg-rose500 justify-center items-center rounded-md py-1 hover:bg-rose600'
      onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator color={'#fff'} />
      ) : (
        <Text
          style={textStyle}
          className={`text-[${textColor}] android:font-semibold ios:font-semibold text-lg web:font-bold`}>
          {text || "Click Me"}
        </Text>
      )}
    </Pressable>
  );
}
