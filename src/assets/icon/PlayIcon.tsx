import React from 'react';
import { IIconProps } from './type';
import { Path, Svg } from 'react-native-svg';

export default function PlayIcon(props: IIconProps) {
  return (
    <Svg {...props} width={props.size || 25 } height={props.size || 25} viewBox='0 0 13 16' fill='none' >
      <Path d='M11.9999 6.26795C13.3333 7.03775 13.3333 8.96225 11.9999 9.73205L2.99994 14.9282C1.66661 15.698 -6.17667e-05 14.7358 -6.16994e-05 13.1962L-6.12451e-05 2.80385C-6.11778e-05 1.26425 1.66661 0.301995 2.99994 1.0718L11.9999 6.26795Z' fill={props.color || 'white'} />
    </Svg>
  );
}
