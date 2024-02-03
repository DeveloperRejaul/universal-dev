import React from 'react';
import { IIconProps } from './type';
import { Ellipse, Path, Svg } from 'react-native-svg';

export default function ProfileIcon(props: IIconProps) {
  return (
    <Svg {...props} width={props.size || 25 } height={props.size || 25} viewBox='0 0 26 26' fill='none'>
      <Path d='M3.25 21.3572L3.48898 21.1182C6.01146 18.5957 9.43267 17.1786 13 17.1786V17.1786C16.5673 17.1786 19.9885 18.5957 22.511 21.1182L22.75 21.3572' stroke={props.color || '#ADB4C0'} stroke-width='2' stroke-linecap='round' stroke-linejoin='bevel' />
      <Ellipse cx='13.0003' cy='8.35709' rx='4.64286' ry='4.64286' stroke={props.color || '#ADB4C0'} stroke-width='2' stroke-linecap='round' stroke-linejoin='bevel' />
    </Svg>

  );
}
