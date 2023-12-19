import { useMedia, useToken } from '@gluestack-style/react';
import { useAppSelector } from '@hooks/useAppSelector';
import React from 'react';
import { Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { drawerToggle } from 'src/features/drawer/slice/slice';
export default function Overly() {
  const dispatch = useDispatch();
  const { md } = useMedia();
  const isDrawerOpen = useAppSelector((state) => state.drawer.isOpen);
  const bg = useToken('colors', 'transparent100');

  if (isDrawerOpen && !md)
    return (
      <Pressable
        className={`absolute h-full w-full bg=[${bg}]`}
        onPress={() => dispatch(drawerToggle())}
      />
    );
  return null;
}
