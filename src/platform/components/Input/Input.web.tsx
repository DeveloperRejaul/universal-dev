
import React, { useState, forwardRef, FocusEvent } from 'react';
import './style.css';
import { Pressable, View, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { rf } from 'src/constants/dimensions';
import { useToken } from '@hooks/useToken';
import { Text } from 'react-native';

const textareaType = ['textarea'];

type appProps = {
  label?: string;
  placeholder?: string;
  labelStyle?: object;
  onChangeText?: (value: string) => void;
  type?: 'search' | 'text' | 'password'| 'textarea';
  containerStyle?: ViewStyle;
  inputStyle?: React.CSSProperties
  value?: string;
  onBlur?: (value: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => boolean | void;
  error?: string;
  maxLength?: number;
  autoFocus?: boolean;
  defaultValue?: string;
  className?: string;

};

const color = useToken('colors', 'gray');

export default forwardRef((props: appProps,ref: React.ForwardedRef<HTMLInputElement | HTMLTextAreaElement>) => {

  const {
    label,
    placeholder,
    onChangeText,
    labelStyle,
    type = 'text',
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
        {!textareaType.includes(type) && 
        <input
          ref={ref as React.RefObject<HTMLInputElement>}
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


        {textareaType.includes(type) && 
        <textarea 
          ref={ref as React.RefObject<HTMLTextAreaElement>}
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
          defaultValue={defaultValue}
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
