import { Box, Text } from '@gluestack-ui/themed';
import React, { useState, forwardRef, Ref } from 'react';
import './style.css';
import { Pressable, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { rf } from 'src/constants/dimensions';
import { colors } from 'src/constants/colors';
import { TextStyle } from 'react-native';

type appProps = {
  label?: string;
  placeholder?: string;
  labelStyle?: object;
  onChangeText?: (value: string) => void;
  type?: 'search' | 'text' | 'password';
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  value?: string;
  onBlur?: (value: boolean) => boolean;
  error?: string;
  maxLength?: number;
  autoFocus?: boolean;
};

export default function ({
  label,
  placeholder,
  onChangeText,
  labelStyle,
  type,
  value,
  onBlur,
  error,
  containerStyle,
  maxLength,
  inputStyle,
  autoFocus,
}: appProps) {
  const [passwordHidden, setPasswordHidden] = useState<boolean>(true);

  return (
    <Box style={containerStyle}>
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
          autoFocus={autoFocus}
          style={inputStyle}
          maxLength={maxLength}
          onBlur={onBlur}
          className='input'
          placeholder={placeholder}
          onChange={
            onChangeText ? (e) => onChangeText(e.target.value) : () => {}
          }
          value={value}
          type={type === 'password' && passwordHidden ? 'password' : 'text'}
        />
        {type === 'search' ? (
          <Pressable>
            <Ionicons name='search' size={rf(2)} color={colors.gray_100} />
          </Pressable>
        ) : null}
        {type === 'password' ? (
          <Pressable onPress={() => setPasswordHidden((pre) => !pre)}>
            <Ionicons
              name={passwordHidden ? 'eye-off' : 'eye'}
              size={rf(2)}
              color={colors.gray_100}
            />
          </Pressable>
        ) : null}
      </Box>
      {error && (
        <Text fontSize={'$sm'} color='$warning500'>
          {error}
        </Text>
      )}
    </Box>
  );
}
