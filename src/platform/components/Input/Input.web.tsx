
import React, { useState, forwardRef } from 'react';
import './style.css';
import { Pressable, View, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { rf } from 'src/constants/dimensions';
import { TextStyle } from 'react-native';
import { useToken } from '@hooks/useToken';
import { Text } from 'react-native';

const textareaType =  ['textarea']

type appProps = {
  label?: string;
  placeholder?: string;
  labelStyle?: object;
  onChangeText?: (value: string) => void;
  type?: 'search' | 'text' | 'password'| 'textarea';
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  value?: string;
  onBlur?: (value: boolean) => boolean;
  error?: string;
  maxLength?: number;
  autoFocus?: boolean;
};

const color =  useToken("colors", 'gray')

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
      <View  className='border-rose300 bg-rose100 border-2 rounded-md p-1 w-full flex-row items-center'>
        {!textareaType.includes(type) && <input
          ref={ref}
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
        />}


          {textareaType.includes(type) && <textarea 
            ref={ref}
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
          />}


        {type === 'search' ? (
          <Pressable>
            <Ionicons name='search' size={rf(2)} color={color} />
          </Pressable>
        ) : null}
        {type === 'password' ? (
          <Pressable onPress={() => setPasswordHidden((pre) => !pre)}>
            <Ionicons
              name={passwordHidden ? 'eye-off' : 'eye'}
              size={rf(2)}
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
