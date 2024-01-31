import { View, ViewStyle } from 'react-native';
import React from 'react';
import Avatar from '../avatar/Avatar';
import HStack from '../HStack/HStack';
import { Text } from 'react-native';
import StarIcon from 'src/assets/icon/StarIcon';
import LikeIcon from 'src/assets/icon/LikeIcon';
import ThreeDotIcon from 'src/assets/icon/ThreeDotIcon';
const uri = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';


interface IRattingProps {
  name?: string;
  avatar?: string;
  rating?: number;
  showIcon?: boolean;
  dis?: string;
  avatarStyle?: ViewStyle;
  cardContainerStyle?: ViewStyle;
  sub?: string;
}


export default function Ratting(props: IRattingProps) {

  const {
    name = 'Karna',
    avatar = uri,
    rating ='0.00',
    showIcon = true,
    avatarStyle ,
    cardContainerStyle,
    sub='Professor of M.Sc. Crop Engineering',
    dis ='Tis is Speaker Bio Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
  } = props;

  return (
    <View className='w-full py-3 border border-border rounded-2xl px-3' style={cardContainerStyle}>
      <HStack className='w-full justify-between'>
        <Avatar uri={avatar} style={avatarStyle} />
        <View className='w-[80%]'>
          <HStack className='justify-between items-center w-full'>
            <Text className='text-headline text-xl font-manropeBold'>{name}</Text>
            <HStack className='items-center'>
              <StarIcon />
              <Text className='text-paragraph font-manropeBold text-lg ml-2' >{rating}</Text>
            </HStack>
          </HStack>
          <Text className='text-paragraph text-sm font-manropeRegular py-1' >{sub}</Text>
        </View>
      </HStack>
      <Text className='text-paragraph text-lg py-2 font-manropeRegular'>{dis} </Text>
      {showIcon && <HStack className='justify-between items-center'>
        <LikeIcon />
        <ThreeDotIcon />
      </HStack>}
    </View>
  );
}
