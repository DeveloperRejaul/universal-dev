import React from 'react';
import { IIconProps } from './type';
import { Path, Svg } from 'react-native-svg';

export default function ShareIcon(props: IIconProps) {
  return (
    <Svg {...props} width={props.size || 25 } height={props.size || 25} viewBox='0 0 15 12' fill='none' >
      <Path d='M9 7.92V11.205L15 5.595L9 0V3.195C3.165 4.005 0.84 7.995 0 12C2.085 9.195 4.83 7.92 9 7.92Z' fill={props.color || '#CA9A62'} />
    </Svg>
  );
}