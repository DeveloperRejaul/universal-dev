import { StyleSheet, View, useWindowDimensions , Platform} from 'react-native'
import React from 'react'
import { useToken } from '@hooks/useToken'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
const SLIDER_BG =useToken("colors", "rose200");
const STROKE_BG = useToken("colors", "rose500");
const BALL_COLOR = useToken("colors", "tertiary700");
const BALL_SIZE = useToken("size","6")
const BALL_RADIUS = BALL_SIZE/2
const  web = Platform.OS === "web"


export default function Slider() {
  const {width}  = useWindowDimensions()
  const style = styles(width);

  const translateX = useSharedValue(0)
  const scale = useSharedValue(1)

  const pan = Gesture.Pan()
  .onBegin(()=>{scale.value = withSpring(1.2)})
  .onChange((e)=>{translateX.value = e.translationX})
  .onFinalize(()=>{scale.value = withSpring(1)})
 

  return (
    <View  style={style.body}>
        <GestureDetector gesture={pan}>
            <View style={{width:"100%",}}>
                {/* <Animated.View style={[ {transform:[{translateX}]} ,style.indicator]}/> */}
                <Animated.View style={[{transform:[{translateX}, {scale}]}, style.ball]} />
            </View>
           
        </GestureDetector>
    </View>
  )
}

const styles = (width:number) =>  {
    
    const SLIDER_WIDTH = width-30;


    return StyleSheet.create({
        body:{
            width:SLIDER_WIDTH,
            height:10, backgroundColor:SLIDER_BG, borderRadius:10,
        },
        indicator:{
            flex:1,
            width:SLIDER_WIDTH,
            height:10, backgroundColor:STROKE_BG, borderRadius:10,
            alignItems:"flex-end",
            justifyContent:"center"
        },
        ball:{
            width:BALL_SIZE, 
            height:BALL_SIZE,
             backgroundColor:BALL_COLOR,
            zIndex:100, 
            borderRadius:BALL_RADIUS
        }
    })

}

