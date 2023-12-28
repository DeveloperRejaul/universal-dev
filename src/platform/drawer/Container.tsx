import {  View } from 'react-native'
import React from 'react'
import { drawerItems } from './constance'
import { Accordion } from '@components'

export default ()=> drawerItems.map((data,i)=> <Accordion key={i} {...{data}}/>)
