import React, { useState, forwardRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { rf } from 'src/constants/dimensions';
import { Pressable, TextInput, TextStyle, ViewStyle } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native';

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
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <View className='border-gray border-2 rounded-sm p-1 w-full flex-row items-center'>
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
            <Ionicons name='search' size={rf(3)} color={"gray"} />
          </Pressable>
        ) : null}
        {type === 'password' ? (
          <Pressable onPress={() => setPasswordHidden((pre) => !pre)}>
            <Ionicons
              name={passwordHidden ? 'eye-off' : 'eye'}
              size={rf(3)}
              color={"gray"}
            />
          </Pressable>
        ) : null}
      </View>
      {error && (
        <Text className='text-sm text-gray'>
          {error}
        </Text>
      )}
    </View>
  );
});
