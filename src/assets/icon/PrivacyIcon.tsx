import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { IIconProps } from './type';

export default function PrivacyIcon(props: IIconProps) {
  return (
    <Svg {...props} width={props.size || 25 } height={props.size || 25} viewBox='0 0 22 25' fill='none'>
      <Path d='M18.5113 0H2.64447C1.19001 0 0 1.19001 0 2.64447V22.0372C0 23.4917 1.19001 24.6817 2.64447 24.6817H14.2801C18.0705 24.6817 21.1557 21.5965 21.1557 17.8061V2.64447C21.1557 1.19001 19.9657 0 18.5113 0ZM19.3928 17.8061C19.3928 20.6268 17.1009 22.9187 14.2801 22.9187H2.64447C2.15965 22.9187 1.76298 22.522 1.76298 22.0372V2.64447C1.76298 2.15965 2.15965 1.76298 2.64447 1.76298H18.5113C18.9961 1.76298 19.3928 2.15965 19.3928 2.64447V17.8061Z' fill={ props.color || '#C89963'} />
      <Path d='M5.28906 11.4594H15.8669V13.2223H5.28906V11.4594Z' fill={ props.color || '#C89963'} />
      <Path d='M5.28906 7.93335H15.8669V9.69633H5.28906V7.93335Z' fill={ props.color || '#C89963'} />
      <Path d='M5.28906 14.9854H13.2225V16.7483H5.28906V14.9854Z' fill={ props.color || '#C89963'} />
    </Svg>
  );
}