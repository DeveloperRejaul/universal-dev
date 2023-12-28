import {Pressable, View, useWindowDimensions, Modal, Platform } from 'react-native';
import React from 'react';

interface DialogProps {
  height?: number;
  width?: number;
  children: React.ReactNode
  onBlur: () => void;
  open: boolean,
  onRequestClose: () => void;
  innerBg?: string,
  outerBg?: string;
  animationType?: 'slide'|'fade'|'none'
}

export default function Dialog(props: DialogProps) {
  const {
    height,
    width,
    children ,
    onBlur,
    open,
    onRequestClose, 
    innerBg,
    outerBg,
    animationType
  } = props;

  
  const {height:h, width:w} = useWindowDimensions();

  return (
    <Modal
      animationType={ animationType || 'none'}
      transparent
      visible={open}
      onRequestClose={onRequestClose}
    >
      <Pressable onPress={onBlur} style={{height:h, width:w, justifyContent:'center', alignItems:'center'}} className={ ` bg-${innerBg || 'transparent'}  ${Platform.OS ==='web' && 'cursor-auto'} `}>
        <View style={{height: height || h/5, width: width || w/1.5, borderRadius:15, overflow:'hidden'}} className={`shadow-2xl bg-${outerBg || 'white'}`}>
          {children}
        </View>
      </Pressable>
    </Modal>
  );
}