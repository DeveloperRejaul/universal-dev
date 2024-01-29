import { View } from 'react-native';
import React from 'react';


interface IContainerProps {
  children: React.ReactNode,
  className?: string
}
export default function Container({children, className}: IContainerProps) {
  return (
    <View className={`pt-6 px-3 flex-1 bg-white ${className}`}>
      {children}
    </View>
  );
}

