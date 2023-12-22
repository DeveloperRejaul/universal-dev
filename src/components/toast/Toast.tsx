import { Text, View } from "react-native";
import Toast from "./main/Container";
import { Props, ToastProps } from "./main/types";
type propsType= {toastRef:any;props:Props}


export const ToastCom = ({props,toastRef}:propsType) =>  {
  return <Toast
    renderToast={(props:ToastProps)=><ToastBody {...props}/>}
    ref={toastRef} {...props} 
  />
}

// custom toast
// @ts-ignore: fixed is available on web.
const ToastBody = (props:ToastProps)=>{
const {type, message} = props;


  return <View className={`${bg[type]} w-40 h-16 my-2 justify-center items-center`}>
    <Text>{message}</Text>
  </View>
}


// all constants data 
const bg = {"success":"bg-success500", "warning":"bg-warning500", "error":"bg-error500"}