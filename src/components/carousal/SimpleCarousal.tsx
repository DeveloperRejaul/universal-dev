import { Dimensions } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { ScrollView, Box, Text } from '@gluestack-ui/themed';

const data = new Array(100).fill(0).map((d, i) => i);
const { width, height } = Dimensions.get('window');
export default function SimpleCarousal() {
  const scrollView = useRef();

  useEffect(() => {
    scrollView.current.scrollTo({ x: width * 3, y: 0, animated: true });
  }, []);

  return (
    <Box height={'$40'} borderRadius={'$md'}>
      <ScrollView
        ref={scrollView}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <Box flexDirection='row' columnGap={'$2'} width={width} h={'$full'}>
          {data.map((d, i) => (
            <Box
              backgroundColor='$red500'
              borderRadius={'$md'}
              key={i}
              w={width * 0.8}
              h='$full'
              justifyContent='center'
              alignItems='center'>
              <Text fontSize={'$4xl'}>{d}</Text>
            </Box>
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}
