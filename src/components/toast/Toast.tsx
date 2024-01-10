import { Platform, Text, View } from 'react-native';
import {ToastContainer} from './main/Container';
import { Props, ToastProps } from './main/types';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { TOAST_ICON_SIZE } from './constants';
import React from 'react';
import { useToken } from '@hooks/useToken';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type propsType= {toastRef: any;props: Props}


const ICON_COLOR = useToken('colors','coolGray900');

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

  return (
    <View className={`w-48 h-16 flex-row rounded-md items-center px-2 ${bg[type]}` }>
      <View className='mr-2'> 
        {icons[type]}
      </View>
      <Text className='text-sm text-coolGray900 font-medium android:ml-2'>{message}</Text>
    </View>
  );
};


const icons = {
  success: <Ionicons name='checkmark-circle-outline' size={TOAST_ICON_SIZE} color={ICON_COLOR} />,
  warning: <AntDesign name='exclamationcircleo' size={TOAST_ICON_SIZE} color={ICON_COLOR} />,
  danger: <AntDesign name='exclamationcircleo' size={TOAST_ICON_SIZE} color={ICON_COLOR} />,
  normal:  <Ionicons name='checkmark-circle-outline' size={TOAST_ICON_SIZE} color={ICON_COLOR} />,
};


// all constants data 
const bg = {'success':'bg-lightBlue300', 'warning':'bg-warning500', 'danger':'bg-error500', 'normal':'bg-amber400'};