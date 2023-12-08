import React from 'react'
import { Box, Text } from '@gluestack-ui/themed'
import { Overly } from '@components'

export default function home() {
  return (
     <Box bg={'$fuchsia400'} flex={1} >
     <Overly/>
      <Text>home</Text>
      </Box> 
  )
}
