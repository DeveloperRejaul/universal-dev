import React from 'react'
import {Text ,HStack, Pressable} from '@gluestack-ui/themed'
import Icon from '@expo/vector-icons/AntDesign'

export default function Header({toggle, setToggle}) {
  return (
    <HStack w={"$full"} h={"$10"} bg='$amber200' alignItems='center'>
      <Pressable onPress={()=>setToggle(pre=>!pre)} justifyContent='center' alignItems='center' sx={{"@md":{opacity:'$0'}}} h={'$7'} w={'$7'} bg='$blue400'>
        <Icon name='menuunfold'/>
      </Pressable>
      <Text>Header</Text>
    </HStack>
  )
}