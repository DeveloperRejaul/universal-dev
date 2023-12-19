import React from 'react';
import Icon from '@expo/vector-icons/Ionicons';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { drawerToggle } from 'src/features/drawer/slice/slice';
import { GSBox, GSPressable, Overly } from '@components';
import { Text } from 'react-native';

export default function Header() {
  const dispatch = useAppDispatch();

  return (
    <GSBox flexDirection='row' bg='$amber300'>
      <Overly />
      <GSPressable
        onPress={() => dispatch(drawerToggle())}
        justifyContent='center'
        alignItems='center'
        sx={{ '@md': { opacity: '$0' } }}
        h={'$7'}
        w={'$7'}
        bg='$blue400'>
        <Icon name='apps-sharp' />
      </GSPressable>
      <Text>Header</Text>
    </GSBox>
  );
}
