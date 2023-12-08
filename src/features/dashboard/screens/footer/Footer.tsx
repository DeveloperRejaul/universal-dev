import React from 'react'
import { Box } from '@gluestack-ui/themed'
import { Overly } from '@components'
import { Text } from '@gluestack-ui/themed'

export default function Footer() {
  return (
    <Box w={"$full"} h={"$10"} bg='$coolGray400'>
      <Overly/>
      <Text>Footer</Text>
    </Box>
  )
}