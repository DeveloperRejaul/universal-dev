import { Box, Text, } from '@gluestack-ui/themed';
import React, { useState } from 'react';
import "./style.css"

type appProps = {
    label?: string,
    placeholder?:string,
    onChangeText?: (value: string) => void,
}


export default function ({label,placeholder,onChangeText}: appProps) {
  return (
    <>
        <Text>{label}</Text>
        <input className='input' placeholder={placeholder} onChange={ onChangeText ?(e)=>onChangeText(e.target.value):()=>{}}/>
    </>
  )
}