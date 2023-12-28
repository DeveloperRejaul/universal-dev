import { Platform, View } from 'react-native';
import React from 'react';

interface IProgressProps {
  percent: number;
  storkBg?: string;
  bg?: string;
  size?: number;
}



export default function Progress({percent, bg, storkBg, size}: IProgressProps) {
  return (
    <View style={{height:size|| 10}} className={`${bg || 'bg-red200'} w-full rounded overflow-hidden ${Platform.OS ==='web' && 'cursor-pointer'}`}>
      <View style={{height:size|| 10, width:   `${percent || '10'}%`}} className={`${ storkBg || 'bg-red500'}`} />
    </View>
  );
}