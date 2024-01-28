import React, { useState, forwardRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TextInput, TextStyle, ViewStyle } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native';
import { useToken } from '@hooks/useToken';

const ICON_SIZE = useToken('size','5');

type appProps = {
  label?: string;
  placeholder?: string;
  labelStyle?: object;
  onChangeText?: (value: string) => void;
  type?: 'search' | 'text' | 'password'| 'textarea';
  value?: string;
  onBlur?: () => void;
  error?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  maxLength?: number;
  autoFocus?: boolean;
  defaultValue?: string
  className?: string;
  keyboardType?: 'numeric'|'ascii-capable' | 'default'|'decimal-pad'| 'email-address'| 'name-phone-pad'| 'number-pad'| 'numbers-and-punctuation'|'phone-pad'|'twitter'|'url'| 'visible-password'|'web-search';
  rightIcon?: React.ReactNode
  leftIcon?: React.ReactNode
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
    className,
    keyboardType = 'default',
    rightIcon,
    leftIcon
  } = props;
  
  const [passwordHidden, setPasswordHidden] = useState<boolean>(true);
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <View className={className} style={containerStyle}>
      {label && <Text className='text-black text-lg ml-1 font-poppinsRegular' style={labelStyle}>{label?.replace('*','')} {label?.includes('*') ? <Text className='text-error'>*</Text> : ''} </Text>}
      <View className={`rounded-md p-1 w-full flex-row items-center bg-white px-3 py-2  ${focus? 'border border-primary2/50': error ? 'border border-error': type ==='search' ?'border border-border' : 'border border-white'} `}>
        {/* Left Icon  */}
        <View className='pr-2'>  
          {leftIcon && leftIcon }
        </View>
        <TextInput
          onFocus={()=> setFocus(true)}
          className='py-1'
          multiline={type === 'textarea'}
          ref={ref}
          autoFocus={autoFocus}
          maxLength={maxLength}
          onBlur={()=> {onBlur?.(); setFocus(false);}}
          style={{ flex: 1, ...inputStyle }}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={useToken('colors', 'text2')}
          value={value}
          secureTextEntry={type === 'password' && passwordHidden}
          defaultValue={defaultValue}
          keyboardType={keyboardType}
        />
        {/* right icon  */}
        {rightIcon && rightIcon }
        {rightIcon && type === 'password' && <Ionicons onPress={() => setPasswordHidden((pre) => !pre)} name={passwordHidden ? 'eye-off' : 'eye'} size={ICON_SIZE} color={'gray'} />}
      </View>
      {error && (
        <Text className='text-sm text-error font-poppinsMedium pt-1.5'>
          {error}
        </Text>
      )}
    </View>
  );
});