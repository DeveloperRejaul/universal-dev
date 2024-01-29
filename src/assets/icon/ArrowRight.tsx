


import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { IIconProps } from './type';


export default function ArrowRight(props: IIconProps) {
  return (
    <Svg {...props} width='10' height='14' viewBox='0 0 8 12' fill='none' >
      <Path d='M1.5 11C1.5 11 6.49999 7.31758 6.5 6C6.50001 4.68233 1.5 1 1.5 1' stroke={'black'} stroke-width='3' stroke-linecap='round' stroke-linejoin='round' />
    </Svg>
  );
}