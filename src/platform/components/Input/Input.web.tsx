import { Box, Text } from '@gluestack-ui/themed';
import React from 'react';
import './style.css';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { rf } from 'src/constants/dimensions';
import { colors } from 'src/constants/colors';

type appProps = {
  label?: string;
  placeholder?: string;
  labelStyle?: object;
  onChangeText?: (value: string) => void;
  type?: 'search' | 'text' | 'password';
  containerStyle?: object;
};

export default function ({
  label,
  placeholder,
  onChangeText,
  labelStyle,
  type,
}: appProps) {
  return (
    <>
      <Text style={labelStyle}>{label}</Text>
      <Box
        borderColor={colors.gray_100}
        borderWidth={'$1'}
        borderRadius={'$sm'}
        paddingHorizontal={'$1'}
        w={'$full'}
        flexDirection='row'
        alignItems='center'
        paddingVertical={'$1'}>
        <input
          className='input'
          placeholder={placeholder}
          onChange={
            onChangeText ? (e) => onChangeText(e.target.value) : () => {}
          }
        />
        {type === 'search' ? (
          <Pressable>
            <Ionicons name='search' size={rf(2)} color={colors.gray_100} />
          </Pressable>
        ) : null}
      </Box>
    </>
  );
}
