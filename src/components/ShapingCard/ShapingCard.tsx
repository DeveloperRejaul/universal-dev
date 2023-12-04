import {
  Box,
  Button,
  ButtonText,
  Center,
  HStack,
  Image,
  Pressable,
  Text,
} from '@gluestack-ui/themed';
import React, { useState } from 'react';
import cardImage from '../../assets/images/card.webp';
import AnimatedButton from '../button/AnimatedButton';
import { rw } from 'src/constants/dimensions';

export default function ShapingCard() {
  const [isHover, setIsHover] = useState(false);

  return (
    <Box
      sx={{
        _web: { cursor: 'pointer', w: '$56' },
        _android: { justifyContent: 'space-between' },
        _ios: { justifyContent: 'space-between' },
      }}
      w={rw(45)}
      h={'$96'}
      bg='$white'
      p={'$2'}
      rounded={'$md'}
      rowGap={'$1'}>
      <Box h={'70%'} w={'$full'} overflow='hidden' rounded={'$md'}>
        <Image
          resizeMode='cover'
          source={cardImage}
          h={'$full'}
          w={'$full'}
          alt='product-image'
        />
      </Box>
      <Button
        onHoverIn={() => setIsHover(true)}
        onHoverOut={() => setIsHover(false)}
        bg='$white'>
        <ButtonText
          fontSize={'$sm'}
          textAlign='center'
          color={isHover ? '$black' : '$coolGray600'}>
          Premium Exclusive Sneakers Grey-RSO7009
        </ButtonText>
      </Button>

      <HStack justifyContent='center' columnGap={'$2'}>
        <Text
          color='$coolGray400'
          fontWeight='$normal'
          textAlign='center'
          fontSize={'$sm'}
          textDecorationLine='line-through'>
          ৳5,899
        </Text>
        <Text
          fontWeight='$bold'
          color='$black'
          textAlign='center'
          fontSize={'$sm'}>
          ৳1,225
        </Text>
      </HStack>
      <Center>
        <AnimatedButton />
      </Center>
    </Box>
  );
}
