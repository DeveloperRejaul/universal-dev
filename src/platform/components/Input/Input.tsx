import React, { useState, forwardRef } from 'react';
import { Text, Box, Pressable } from '@gluestack-ui/themed';
import { colors } from 'src/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { rf } from 'src/constants/dimensions';
import { TextInput, TextStyle, ViewStyle } from 'react-native';

type appProps = {
  label?: string;
  placeholder?: string;
  labelStyle?: object;
  onChangeText?: (value: string) => void;
  type?: 'search' | 'text' | 'password';
  value?: string;
  onBlur?: (value: boolean) => void;
  error?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  maxLength?: number;
  autoFocus?: boolean;
};

export default forwardRef(function (
  {
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
  }: appProps,
  ref: React.ForwardedRef<any>,
) {
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
        <TextInput
          ref={ref}
          autoFocus={autoFocus}
          maxLength={maxLength}
          onBlur={onBlur}
          style={{ flex: 1, ...inputStyle }}
          onChangeText={onChangeText}
          placeholder={placeholder}
          value={value}
          secureTextEntry={type === 'password' && passwordHidden}
        />
        {type === 'search' ? (
          <Pressable>
            <Ionicons name='search' size={rf(3)} color={colors.gray_100} />
          </Pressable>
        ) : null}
        {type === 'password' ? (
          <Pressable onPress={() => setPasswordHidden((pre) => !pre)}>
            <Ionicons
              name={passwordHidden ? 'eye-off' : 'eye'}
              size={rf(3)}
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
});
