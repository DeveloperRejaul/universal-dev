import { Pressable} from 'react-native'
import React, { useState } from 'react'
import Animated, { useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { useToken } from '@hooks/useToken'
const APressable =Animated.createAnimatedComponent(Pressable)


interface ISwitchProps  {
    size?:number;
    baColor?:string;
    borderColor?:string;
    ballColor?:string;
    activeBallColor?:string;
    activeBg?:string;
    activeBorderBg?:string;
    handleSwitch?:(val:boolean)=>void
}

export default function Switch(props:ISwitchProps) {

    const {
        size,
        baColor,
        borderColor,
        ballColor,
        activeBallColor,
        activeBg,
        activeBorderBg,
        handleSwitch
    } = props

    const [isON, setON] = useState(false)
    const translateX =  useSharedValue(0)

    const TOTAL_WIDTH:number = useToken("size","16")*(size || 1)
    const HUB_WIDTH:number = TOTAL_WIDTH/2;
    const TOTAL_HEIGHT:number = useToken("size","8")*(size || 1)

    const BORDER_COLOR = isON ?activeBorderBg || useToken("colors", "blue200") : borderColor  || useToken("colors", "rose200")

    const backgroundColor =  useSharedValue(baColor ||  useToken("colors", "rose50"))
    const AnimatedBallColor =  useSharedValue(ballColor || useToken("colors", "rose200"))

  return (
    <APressable 

        onPress={()=>{
            setON(pre=>{
                translateX.value = !pre ? withSpring(HUB_WIDTH): withSpring(0);
                backgroundColor.value = !pre ? withTiming(activeBg || useToken("colors", "blue400") ): withTiming(baColor ||  useToken("colors", "rose50") );
                AnimatedBallColor.value = !pre ? withTiming(activeBallColor || useToken("colors", "red500")): withTiming(ballColor || useToken("colors", "rose200") );
                handleSwitch?.(!pre)
                return !pre
            })
        }}

        style={{
            width:TOTAL_WIDTH, height:TOTAL_HEIGHT,
            borderColor:BORDER_COLOR,
            backgroundColor,
        }} 
        className={`border-2 rounded-full justify-center web:cursor-pointer`}> 

        <Animated.View 
           style={{
                width:HUB_WIDTH, height:TOTAL_HEIGHT,
                 transform:[{translateX}],
                 backgroundColor:AnimatedBallColor
                }} 
            className='rounded-full'/>
    </APressable>
  )
}