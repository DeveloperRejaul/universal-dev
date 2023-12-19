import { useToken } from '@hooks/useToken';
import React from 'react';
import {
  TextStyle,
  ViewStyle,
  Pressable,
  Text,
  ActivityIndicator,
} from 'react-native';

type propsType = {
  onPress: () => void;
  text: string;
  isLoading?: boolean;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
};

const textColor = useToken('colors', 'gray');

export default function button({
  onPress,
  text,
  isLoading,
  textStyle,
  containerStyle,
}: propsType) {

  return (
    <Pressable
      disabled={isLoading}
      style={containerStyle}
      className='bg-[#ed5684] justify-center items-center rounded-md py-1 hover:bg-[#f81d5f]'
      onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator color={'#fff'} />
      ) : (
        <Text
          style={textStyle}
          className={`text-[${textColor}] font-semibold text-lg web:font-bold`}>
          {text}
        </Text>
      )}
    </Pressable>
  );
}
