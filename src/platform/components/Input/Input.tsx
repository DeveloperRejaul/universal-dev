import React from 'react';
import { Input, InputField, Text, Box, Pressable } from '@gluestack-ui/themed';
import { colors } from 'src/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { rf } from 'src/constants/dimensions';
import { TextInput } from 'react-native';

type appProps = {
  label?: string;
  placeholder?: string;
  labelStyle?: object;
  onChangeText?: (value: string) => void;
  type?: 'search' | 'text' | 'password';
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
        <TextInput
          style={{ flex: 1 }}
          onChangeText={onChangeText}
          placeholder={placeholder}
        />
        {type === 'search' ? (
          <Pressable>
            <Ionicons name='search' size={rf(3)} color={colors.gray_100} />
          </Pressable>
        ) : null}
      </Box>
    </>
  );
}
