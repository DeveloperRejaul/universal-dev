import { Pressable } from 'react-native';
import React, { useState } from 'react';
import { rf, rw } from 'src/constants/dimensions';
import { Entypo } from '@expo/vector-icons';

type appProps = {
  _web?: object;
  _mobile?: object;
  background?: string;
  size?: number;
  onCheck?: (value: boolean) => void;
  defaultChecked?: boolean;
};

export default function ({
  _mobile,
  size = 1,
  onCheck,
  defaultChecked = false,
  background,
}: appProps) {
  const [check, setCheck] = useState<boolean>(defaultChecked);
  return (
    <Pressable
      style={{
        ..._mobile,
        borderColor: '#ddd',
        width: rw(4) * size,
        height: rw(4) * size,
        borderWidth: 1,
        backgroundColor: check ? background : '#fff',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1,
      }}
      onPress={() => {
        setCheck((pre) => {
          onCheck?.(!pre);
          return !pre;
        });
      }}>
      {check && <Entypo name='check' size={rf(2)} color='#fff' />}
    </Pressable>
  );
}
