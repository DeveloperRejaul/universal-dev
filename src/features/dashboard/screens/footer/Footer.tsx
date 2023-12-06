import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box } from '@gluestack-ui/themed'

export default function Footer() {
  return (
    <Box w={"$full"} h={"$10"} bg='$coolGray400'>
      <Text>Footer</Text>
    </Box>
  )
}

const styles = StyleSheet.create({})