import { Pressable, useMedia } from '@gluestack-ui/themed'
import { useAppSelector } from '@hooks/useAppSelector'
import React from 'react'
import { useDispatch } from 'react-redux'
import { drawerToggle } from 'src/features/drawer/slice/slice'
export default function Overly() {
   const dispatch = useDispatch()
  const {md} = useMedia()
   const isDrawerOpen =  useAppSelector(state=>state.drawer.isOpen)
  if(isDrawerOpen && !md) return <Pressable  onPress={()=>dispatch(drawerToggle())} position='absolute' h={"$full"} w={"$full"} bg='$transparent100' zIndex={9999}/>
  return null
}