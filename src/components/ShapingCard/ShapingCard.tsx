import { Box, HStack, Image, Text } from '@gluestack-ui/themed';
import React from 'react';
import cardImage from '../../assets/images/card.webp';
import AnimatedButton from '../button/AnimatedButton';

export default function ShapingCard() {
  return (
    <Box w={'$64'} h={'$96'} bg='$blueGray300' p={'$2'} rounded={'$md'}>
      <Box h={'75%'} w={'$full'} overflow='hidden' rounded={'$md'}>
        <Image resizeMode='cover' source={cardImage} h={'$full'} w={'$full'} />
      </Box>
      <Text fontSize={'$sm'} textAlign='center'>
        Premium Exclusive Sneakers Grey-RSO7009
      </Text>
      <HStack justifyContent='center' columnGap={'$2'}>
        <Text
          textAlign='center'
          fontSize={'$sm'}
          textDecorationLine='line-through'>
          ৳5,899
        </Text>
        <Text textAlign='center' fontSize={'$sm'}>
          ৳1,225
        </Text>
      </HStack>
      <AnimatedButton />
    </Box>
  );
}
