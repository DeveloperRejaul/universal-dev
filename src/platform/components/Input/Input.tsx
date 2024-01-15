import React, { useState, forwardRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NativeSyntheticEvent, Pressable, TextInput, TextStyle, ViewStyle } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native';
import { TextInputFocusEventData } from 'react-native';
import { ICON_SIZE } from './constants';

type appProps = {
  label?: string;
  placeholder?: string;
  labelStyle?: object;
  onChangeText?: (value: string) => void;
  type?: 'search' | 'text' | 'password'| 'textarea';
  value?: string;
  onBlur?: (value: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  error?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  maxLength?: number;
  autoFocus?: boolean;
  defaultValue?: string
  className?: string;
};

export default forwardRef(( props: appProps,ref: React.ForwardedRef<TextInput>) => {

  const {
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
    defaultValue,
    className
  } = props;
  
  const [passwordHidden, setPasswordHidden] = useState<boolean>(true);

  return (
    <View className={className} style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <View className='border-rose300 bg-rose100 border-2 rounded-md p-1 w-full flex-row items-center'>
        <TextInput
          multiline={type === 'textarea'}
          ref={ref}
          autoFocus={autoFocus}
          maxLength={maxLength}
          onBlur={onBlur}
          style={{ flex: 1, ...inputStyle }}
          onChangeText={onChangeText}
          placeholder={placeholder}
          value={value}
          secureTextEntry={type === 'password' && passwordHidden}
          defaultValue={defaultValue}
        />
        {type === 'search' ? (
          <Pressable>
            <Ionicons name='search' size={ICON_SIZE} color={'gray'} />
          </Pressable>
        ) : null}
        {type === 'password' ? (
          <Pressable onPress={() => setPasswordHidden((pre) => !pre)}>
            <Ionicons
              name={passwordHidden ? 'eye-off' : 'eye'}
              size={ICON_SIZE}
              color={'gray'}
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
