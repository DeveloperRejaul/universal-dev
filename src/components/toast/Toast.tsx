import { Platform, Text, View } from 'react-native';
import {ToastContainer} from './main/Container';
import { Props, ToastProps } from './main/types';
import { Ionicons } from '@expo/vector-icons';
import { TOAST_ICON_SIZE } from './constants';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type propsType= {toastRef: any;props: Props}


export const ToastCom = ({props,toastRef}: propsType) => {
  return (
    <ToastContainer
      placement={Platform.OS ==='web'? 'top-right':'bottom'}
      renderToast={(props: ToastProps)=><ToastBody {...props} />}
      ref={toastRef} {...props}
    />
  );
};



// custom toast
const ToastBody = (props: ToastProps)=>{
  const {type = 'normal', message} = props;
  return (<View className={`${bg[type]} w-48 h-16 my-2 justify-center items-center rounded-md flex-row space-x-2` }>
    <Ionicons name='checkmark-circle-outline' size={TOAST_ICON_SIZE} />
    <Text className='text-sm android:ml-2'>{message}</Text>
  </View>);
};


// all constants data 
const bg = {'success':'bg-success500', 'warning':'bg-warning500', 'danger':'bg-error500', 'normal':'bg-amber400'};