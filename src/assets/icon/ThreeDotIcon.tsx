import React from 'react';
import { IIconProps } from './type';
import { Path, Svg } from 'react-native-svg';

export default function ThreeDotIcon(props: IIconProps) {
  return (
    <Svg {...props} width={props.size || 25 } height={props.size || 25} viewBox='0 0 16 4' fill='none'>
      <Path d='M8.83341 1.99992C8.83341 1.53968 8.46032 1.16659 8.00008 1.16659C7.53984 1.16659 7.16675 1.53968 7.16675 1.99992C7.16675 2.46016 7.53984 2.83325 8.00008 2.83325C8.46032 2.83325 8.83341 2.46016 8.83341 1.99992Z' stroke={props.color || '#A2A5B1'} stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
      <Path d='M14.6667 1.99992C14.6667 1.53968 14.2936 1.16659 13.8333 1.16659C13.3731 1.16659 13 1.53968 13 1.99992C13 2.46016 13.3731 2.83325 13.8333 2.83325C14.2936 2.83325 14.6667 2.46016 14.6667 1.99992Z' stroke={props.color || '#A2A5B1'} stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
      <Path d='M3.00004 1.99992C3.00004 1.53968 2.62694 1.16659 2.16671 1.16659C1.70647 1.16659 1.33337 1.53968 1.33337 1.99992C1.33337 2.46016 1.70647 2.83325 2.16671 2.83325C2.62694 2.83325 3.00004 2.46016 3.00004 1.99992Z' stroke={props.color || '#A2A5B1'} stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
    </Svg>
  );
}