import { useMedia } from '@hooks/useMedia';
import { useToken } from '@hooks/useToken';
import React, { useContext } from 'react';
import { Pressable } from 'react-native';
import { DrawerContext } from '../Index';
const bg = useToken('colors', 'transparent');

export default function Overly() {
  const { md } = useMedia();
  const {isOpen, toggle} = useContext(DrawerContext)

  if (isOpen && !md)
    return (
      <Pressable
        className={`absolute h-full w-full bg=[${bg}]`}
        onPress={() => toggle(pre=>!pre)}
      />
    );
  return null;
}
