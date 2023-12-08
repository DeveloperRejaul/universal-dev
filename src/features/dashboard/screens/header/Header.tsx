import React from 'react'
import {Text ,HStack, Pressable} from '@gluestack-ui/themed'
import Icon from '@expo/vector-icons/Ionicons'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { drawerToggle } from 'src/features/drawer/slice/slice'
import { Overly } from '@components'

export default function Header() {
  const dispatch = useAppDispatch()
 
  return (

    <HStack flexDirection='row' bg='$amber300'>
      <Overly/>
      <Pressable onPress={()=>dispatch(drawerToggle())} justifyContent='center' alignItems='center' sx={{"@md":{opacity:'$0'}}} h={'$7'} w={'$7'} bg='$blue400'>
          <Icon name='apps-sharp'/>
      </Pressable>
      <Text>Header</Text>
    </HStack>
  )
}