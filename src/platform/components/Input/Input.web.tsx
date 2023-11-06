import { Box, Text } from '@gluestack-ui/themed';
import React, { useState } from 'react';
import './style.css';

type appProps = {
  label?: string;
  placeholder?: string;
  labelStyle?: object;
  onChangeText?: (value: string) => void;
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
      <input
        className='input'
        placeholder={placeholder}
        onChange={onChangeText ? (e) => onChangeText(e.target.value) : () => {}}
      />
    </>
  );
}
