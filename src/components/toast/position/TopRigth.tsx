import { Platform, ViewStyle } from "react-native";
import { KeyboardAvoidingView, useWindowDimensions } from "react-native";
import { styles } from "../main/styles";
import { SafeAreaView } from "react-native";
import {Toast} from "../main/Toast";
import { PositionPropsType } from "./type";
import { TOAST_WIDTH } from "../constants";


export const TopRight = ({state, props}:PositionPropsType) => {
    const {width} = useWindowDimensions()
 
    const { toasts } = state;
     let { offset, offsetTop } = props;
     let style: ViewStyle = {
       top: offsetTop || offset,
       right:-((width/2.5)-TOAST_WIDTH),
       width: width,
       justifyContent: "flex-start",
       flexDirection: "column-reverse",
     };
 
     return <KeyboardAvoidingView
     behavior={Platform.OS === "ios" ? "position" : undefined}
     style={[styles.container, style]}
     pointerEvents="box-none"
   >
     <SafeAreaView>
       {toasts
         .filter((t) => t.placement === "top-right")
         .map((toast) => (
           <Toast key={toast.id} {...toast} />
         ))}
     </SafeAreaView>
   </KeyboardAvoidingView>
 }
 
 
 