import React, { useEffect, useState } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { LayoutChangeEvent, View } from 'react-native';

let interval: NodeJS.Timeout;
const slides = [1,2];
const INDICATOR_SIZE = 10;
const INDICATOR_RADIUS = INDICATOR_SIZE / 2;
const SLIDES_GAP = 20;
const AnimatedView = Animated.createAnimatedComponent(View);

export default function SimpleCarousal() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState<number>(0);

  const translate = useSharedValue(0);

  const handleLayout = (event: LayoutChangeEvent) => {
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
    <View>
      <AnimatedView
        style={[
          animatedStyle,
          { flexDirection: 'row', columnGap: SLIDES_GAP },
        ]}
      >
        {slides.map(() => (
          <View
            onLayout={handleLayout}
            key={Math.random()}
            className='w-full h-72 overflow-hidden my-2 web:cursor-pointer bg-rose500'
          >
            {/* <Image
                className='h-full w-full'
                source={d}
                resizeMode='cover'
                alt='slide-image'
              /> */}
          </View>
        ))}
      </AnimatedView>
      <View className='bottom-5 left-1/2 absolute flex-row space-x-2'>
        {slides.map((d, i) => (
          <Indicator key={d} activeIndex={activeIndex} index={i} />
        ))}
      </View>
    </View>
  );
}


interface IIndicatorProps {
  activeIndex: number,
  index: number
}
function Indicator({ activeIndex, index }: IIndicatorProps) {
  return (
    <View style={{height:INDICATOR_SIZE, width:INDICATOR_SIZE, backgroundColor:index === activeIndex ? '$amber500' : '$coolGray700', borderRadius:INDICATOR_RADIUS}} />
  );
}
