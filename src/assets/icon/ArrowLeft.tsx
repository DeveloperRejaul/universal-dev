import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { IIconProps } from './type';

export default function ArrowLeft(props: IIconProps) {
  return (
    <Svg {...props} width={props.size || 25 } height={props.size || 25} viewBox='0 0 11 16' fill='none'>
      <Path fill-rule='evenodd' clip-rule='evenodd' d='M2.54103 1.16173L10.1498 7.31626C10.6167 7.69394 10.6167 8.30626 10.1498 8.68394L2.54103 14.8385C2.07411 15.2161 1.3171 15.2161 0.850185 14.8385C0.383272 14.4608 0.383272 13.8485 0.850185 13.4708L7.61355 8.0001L0.850185 2.52941C0.383272 2.15173 0.383272 1.53941 0.850185 1.16173C1.3171 0.784061 2.07411 0.784061 2.54103 1.16173Z' fill={ props.color ||'#C89963'} />
    </Svg>
  );
}