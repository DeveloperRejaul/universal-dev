import { useAppSelector } from '@hooks/useAppSelector';
import { useMedia } from '@hooks/useMedia';
import { useToken } from '@hooks/useToken';
import React from 'react';
import { Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { drawerToggle } from 'src/features/drawer/slice/slice';

const bg = useToken('colors', 'transparent');

export default function Overly() {
  const dispatch = useDispatch();
  const { md } = useMedia();
  const isDrawerOpen = useAppSelector((state) => state.drawer.isOpen);

  if (isDrawerOpen && !md)
    return (
      <Pressable
        className={`absolute h-full w-full bg=[${bg}]`}
        onPress={() => dispatch(drawerToggle())}
      />
    );
  return null;
}
