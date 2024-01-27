import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { IIconProps } from './type';

export default function MenuIcon(props: IIconProps) {
  return (
    <Svg {...props} width={props.size || 25 } height={props.size || 25} viewBox='0 0 27 22' fill='none'>
      <Path d='M2 2H25' stroke={props.color} strokeWidth='2.5' strokeLinecap='round' />
      <Path d='M2 11H25' stroke={props.color} strokeWidth='2.5' strokeLinecap='round' />
      <Path d='M2 20H25' stroke={props.color} strokeWidth='2.5' strokeLinecap='round' />
    </Svg>
  );
}

