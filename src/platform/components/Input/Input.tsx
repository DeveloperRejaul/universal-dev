import React from 'react';
import { Input, InputField, Text } from '@gluestack-ui/themed';

type appProps = {
  label?: string;
  placeholder?: string;
  labelStyle?: object;
  onChangeText?: (value: any) => void;
};

export default function ({
  label,
  placeholder,
  onChangeText,
  labelStyle,
}: appProps) {
  return (
    <>
      <Text style={labelStyle}>{label}</Text>
      <Input
        w={'100%'}
        variant='outline'
        size='sm'
        borderColor={'$trueGray300'}
        sx={{ ':focus': { borderColor: '#63475035' } }}>
        <InputField
          type='text'
          placeholder={placeholder}
          onChangeText={onChangeText ? onChangeText : () => {}}
        />
      </Input>
    </>
  );
}
