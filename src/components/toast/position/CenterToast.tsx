import { KeyboardAvoidingView, ViewStyle, useWindowDimensions } from 'react-native'
import React from 'react'
import { Platform } from 'react-native';
import { styles } from '../main/styles';
import {Toast} from '../main/Toast';
import { PositionPropsType } from './type';

export  const CenterToast = ({state, props}:PositionPropsType) => {
const {width, height} = useWindowDimensions()
    
    const { toasts } = state;
    let { offset, offsetTop } = props;
    let style: ViewStyle = {
      top: offsetTop || offset,
      height: height,
      width: width,
      justifyContent: "center",
      flexDirection: "column-reverse",
    };

    const data = toasts.filter((t) => t.placement === "center");
    const foundToast = data.length > 0;

    if (!foundToast) return null;

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "position" : undefined}
        style={[styles.container, style]}
        pointerEvents="box-none"
      >
        {toasts
          .filter((t) => t.placement === "center")
          .map((toast) => (
            <Toast key={toast.id} {...toast} />
          ))}
      </KeyboardAvoidingView>
    );

}
