import { View, Text } from 'react-native';
import React from 'react';
import { IIconProps } from './type';
import { Path, Svg } from 'react-native-svg';

export default function NotificationIcon(props: IIconProps) {
  return (
    <Svg {...props} width={props.size || 25 } height={props.size || 25} viewBox='0 0 28 28' fill='none'>
      <Path d='M14.0001 2.33337C18.0093 2.33337 21.2593 5.58345 21.2593 9.59263L21.2593 12.044C21.2593 12.1798 21.2879 12.3142 21.343 12.4384L23.7919 17.9483C24.6736 19.9322 23.2214 22.1667 21.0505 22.1667L6.9497 22.1667C4.77873 22.1667 3.32655 19.9322 4.20826 17.9483L6.65713 12.4384C6.71231 12.3142 6.74082 12.1798 6.74082 12.044L6.74082 9.59263C6.74082 5.58346 9.9909 2.33337 14.0001 2.33337V2.33337Z' stroke={props.color || '#CA9A61'} stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
      <Path d='M10.5 25.6666L17.5 25.6666' stroke={props.color || '#CA9A61'} stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
    </Svg>
  );
}