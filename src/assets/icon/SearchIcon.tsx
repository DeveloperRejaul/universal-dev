import React from 'react';
import { Circle, Path, Svg } from 'react-native-svg';
import { IIconProps } from './type';

export default function SearchIcon(props: IIconProps) {
  return (
    <Svg {...props} width={props.size || 25 } height={props.size || 25} viewBox='0 0 26 26' fill='none'>
      <Circle cx='8.125' cy='8.125' r='8.125' transform='matrix(-1 0 0 1 19.5 3.25)' stroke={ props.color || '#ADB4C0'} stroke-width='2' stroke-linecap='square' stroke-linejoin='bevel' />
      <Path d='M18.9583 20.0415L21.6667 22.7498' stroke={ props.color || '#ADB4C0'} stroke-width='2' stroke-linecap='round' stroke-linejoin='bevel' />
    </Svg>

  );
}