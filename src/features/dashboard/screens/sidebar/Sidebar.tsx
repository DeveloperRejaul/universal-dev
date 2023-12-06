import React, { useEffect } from 'react'
import { Box, Pressable, ScrollView, Text, useMedia } from '@gluestack-ui/themed'
import { SIDEBAR_WIDTH } from '../../constants'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const AnimatedBox = Animated.createAnimatedComponent(Box);

export default function Sidebar({toggle, setToggle}) {

 const media = useMedia()
 const translateX =  useSharedValue( media.md ? 0 : -SIDEBAR_WIDTH)

 useEffect(()=>{
  if(toggle)translateX.value = withTiming(0,{duration:300})
  if(!toggle)translateX.value = withTiming(-SIDEBAR_WIDTH, {duration:300})
  if(media.md)translateX.value = 0
 },[toggle,media])

  return (
    <AnimatedBox 
    style={{transform:[{translateX}]}}
    bg={"$blue500"}
    w={SIDEBAR_WIDTH}
    zIndex={999}
    sx={{
      "@base":{position:"absolute", h:"$full"},
      "@md":{position:"static",h:"$full"}
      }}>
      <ScrollView>
        <Pressable onPress={()=>setToggle(pre=>!pre)}>
         <Text>User Logo</Text>
        </Pressable>
      </ScrollView>
    </AnimatedBox>
  )
}