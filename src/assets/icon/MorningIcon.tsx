import React from 'react';
import { IIconProps } from './type';
import { Defs, Ellipse, LinearGradient, Path, Stop, Svg } from 'react-native-svg';

export default function MorningIcon(props: IIconProps) {
  return (
    <Svg {...props} width={props.size || 25 } height={props.size || 25} viewBox='0 0 26 23' fill='none'>
      <Path d='M17.374 1V16.6269' stroke={props.color || '#FEE25C'} strokeWidth='0.832402' strokeLinecap='round' strokeLinejoin='round' strokeDasharray='2.77 2.77' />
      <Path d='M23.0447 3.28894L11.704 14.3389' stroke={props.color || '#FEE25C'} strokeWidth='0.832402' strokeLinecap='round' strokeLinejoin='round' strokeDasharray='2.77 2.77' />
      <Path d='M11.7041 3.28894L23.0448 14.3389' stroke={props.color || '#FEE25C'} strokeWidth='0.832402' strokeLinecap='round' strokeLinejoin='round' strokeDasharray='2.77 2.77' />
      <Path d='M9.35522 8.81311L25.3934 8.81311' stroke={props.color || '#FEE25C'} strokeWidth='0.832402' strokeLinecap='round' strokeLinejoin='round' strokeDasharray='2.77 2.77' />
      <Ellipse cx='17.3749' cy='8.81335' rx='5.34606' ry='5.20898' fill='url(#paint0_linear_1_22401)' />
      <Path d='M3.34351 22.5852C-1.43851 22.0874 -0.881161 14.0576 3.67939 13.9931C2.90261 5.38688 12.5817 3.5599 14.2509 9.69706C18.7084 7.25822 20.937 10.0723 21.484 12.7657C27.0479 13.9931 25.8257 22.0359 23.0357 22.5852H3.34351Z' fill='#97D5FA' />
      <Defs>
        <LinearGradient id='paint0_linear_1_22401' x1='17.3749' y1='3.60437' x2='17.3749' y2='14.0223' gradientUnits='userSpaceOnUse'>
          <Stop stopColor={props.color || '#FEE25C'} />
          <Stop offset='1' stopColor='#FFBF5E' />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}