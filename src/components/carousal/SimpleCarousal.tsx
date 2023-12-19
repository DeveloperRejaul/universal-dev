import { Box } from '@gluestack-ui/themed';
import React, { useEffect, useState } from 'react';
import image01 from '../../assets/images/slide01.jpg';
import image02 from '../../assets/images/slide02.jpg';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { View, Image } from 'react-native';

let interval;
const slides = [image01, image02];
const INDICATOR_SIZE = 10;
const INDICATOR_RADIUS = INDICATOR_SIZE / 2;
const INDICATOR_GAP = 10;
const SLIDES_GAP = 20;
const AnimatedView = Animated.createAnimatedComponent(View);

export default function SimpleCarousal() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(null);

  const translate = useSharedValue(0);

  const handleLayout = (event) => {
    const cardWidth = event.nativeEvent.layout.width;
    setCardWidth(cardWidth);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: -translate.value }],
    };
  });

  useEffect(() => {
    interval = setInterval(() => {
      if (slides.length - 1 === activeIndex) {
        setActiveIndex(0);
      } else {
        setActiveIndex((pre) => pre + 1);
      }
    }, 5000);
    translate.value = withSpring((cardWidth + SLIDES_GAP) * activeIndex);
    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  return (
    <>
      <Box>
        <AnimatedView
          style={[
            animatedStyle,
            { flexDirection: 'row', columnGap: SLIDES_GAP },
          ]}>
          {slides.map((d, i) => (
            <View
              onLayout={handleLayout}
              key={Math.random()}
              className='w-full h-72 overflow-hidden my-2 cursor-pointer'>
              <Image
                className='h-full w-full'
                source={d}
                resizeMode='cover'
                alt='slide-image'
              />
            </View>
          ))}
        </AnimatedView>
        <View className='bottom-5 left-1/2 absolute flex-row space-x-2'>
          {slides.map((d, i) => (
            <Indicator key={d} activeIndex={activeIndex} index={i} />
          ))}
        </View>
      </Box>
    </>
  );
}

function Indicator({ activeIndex, index }) {
  return (
    <Box
      height={INDICATOR_SIZE}
      width={INDICATOR_SIZE}
      bg={index === activeIndex ? '$amber500' : '$coolGray700'}
      borderRadius={INDICATOR_RADIUS}
    />
  );
}
