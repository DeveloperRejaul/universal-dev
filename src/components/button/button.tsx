import React from 'react';
import { Pressable, Spinner, Text } from '@gluestack-ui/themed';
import { rf } from 'src/constants/dimensions';
import { TextStyle, ViewStyle } from 'react-native';

type propsType = {
  onPress: () => void;
  text: string;
  isLoading?: boolean;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
};

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
      bg='#ed5684'
      justifyContent='center'
      alignItems='center'
      borderRadius={5}
      sx={{
        _web: { paddingVertical: '$1', ':hover': { bg: '#f81d5f' } },
      }}
      paddingVertical={'$2'}
      onPress={onPress}>
      {isLoading ? (
        <Spinner color='$white' />
      ) : (
        <Text
          style={textStyle}
          color='$trueGray900'
          fontWeight='$semibold'
          fontSize={rf(2.2)}
          textTransform='uppercase'
          sx={{ _web: { fontSize: rf(1.2), fontWeight: '$bold' } }}>
          {text}
        </Text>
      )}
    </Pressable>
  );
}
