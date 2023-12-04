import { Box, Text, Image, ScrollView } from '@gluestack-ui/themed';
import React, { useEffect, useState } from 'react';
import image01 from '../../assets/images/slide01.jpg';
import image02 from '../../assets/images/slide02.jpg';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { rh } from 'src/constants/dimensions';

let interval;
const slides = [image01, image02];
const INDICATOR_SIZE = 10;
const INDICATOR_RADIUS = INDICATOR_SIZE / 2;
const INDICATOR_GAP = 10;
const SLIDES_GAP = 20;
const AnimatedBox = Animated.createAnimatedComponent(Box);

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
        <AnimatedBox
          style={[animatedStyle]}
          flexDirection='row'
          columnGap={SLIDES_GAP}>
          {slides.map((d, i) => (
            <Box
              sx={{ _web: { cursor: 'pointer', height: '$72' } }}
              onLayout={handleLayout}
              key={Math.random()}
              height={'$72'}
              width={'$full'}
              overflow='hidden'
              h={rh(25)}
              my={'$2'}>
              <Image
                source={d}
                h={'$full'}
                w={'$full'}
                resizeMode='cover'
                alt='slide-image'
              />
            </Box>
          ))}
        </AnimatedBox>
        <Box
          bottom={'$5'}
          left={'$1/2'}
          position='absolute'
          flexDirection='row'
          columnGap={INDICATOR_GAP}>
          {slides.map((d, i) => (
            <Indicator key={d} activeIndex={activeIndex} index={i} />
          ))}
        </Box>
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
