import {StyleSheet,View } from 'react-native';
import React from 'react';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const OFFSET =17;
const BALL_SIZE = 20;
const MIN = -1;

interface ISliderProps {
  handlePresents: (val: number) => void;
  ballColor?: string;
  storkColor?: string;
  barColor?: string
  sliderWidth?: number
}

export default function SliderAlt({handlePresents, ballColor, storkColor, barColor, sliderWidth}: ISliderProps) {
  const translateX = useSharedValue(0);
  const scale = useSharedValue(1);
  const saveBall = useSharedValue(0);
 
  const SLIDER_WIDTH = sliderWidth || 300;
  const MAX = SLIDER_WIDTH-OFFSET;


  const pan = Gesture.Pan()
    .onBegin(()=>{scale.value = withSpring(1.2);})
    .onUpdate((e)=>{
      const TRANSLATE_X = e.translationX+saveBall.value;

      if((MIN<=TRANSLATE_X) && (TRANSLATE_X<MAX)){
        translateX.value = TRANSLATE_X;
        // calculate presents 
        const presents = ((TRANSLATE_X - MIN) / (MAX - MIN)) * 100;
        const finalPresent = presents > 50 ? Math.ceil(presents):Math.floor(presents);
        runOnJS(handlePresents)(finalPresent);
                
      }
    })
    .onEnd(()=>{
      saveBall.value = translateX.value; scale.value = withSpring(1);
    });

  const animatedStyle = useAnimatedStyle(()=>{
    return{
      transform:[
        {translateX:translateX.value/2},
        {scaleX:translateX.value},
      ],
      marginRight:translateX.value
    };
  });

     

  return (
    <GestureDetector gesture={pan}>
      <View style={[styles.mainBody]}>
        <View style={[styles.body, {width:SLIDER_WIDTH}]}>
          <Animated.View className={'web:cursor-pointer'} style={[styles.ball, {backgroundColor: ballColor || 'red', transform:[{translateX}, {scale}]}]} />
          <Animated.View style={[styles.bar,{backgroundColor: barColor || 'black', width: SLIDER_WIDTH}]}> 
            <Animated.View style={[styles.stork,animatedStyle, {backgroundColor:storkColor || 'green'}]} />
          </Animated.View>
        </View>
      </View>
    </GestureDetector>
  );
}



const styles = StyleSheet.create({
  mainBody:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body:{
    height:BALL_SIZE*1.5,
    justifyContent:'center',
    alignItems:'center',
  },
  ball:{
    height: BALL_SIZE,
    width: BALL_SIZE,
    borderRadius: BALL_SIZE/2,
    position:'absolute',
    zIndex:1000,
    left:0
  },
  bar:{
    height:BALL_SIZE/2,
    position:'absolute',
    zIndex:1,
    borderRadius:10,
    overflow:'hidden'
  },
  stork:{
    width:1,
    height:BALL_SIZE/2,
    zIndex:2,
    borderRadius:10
  }
});