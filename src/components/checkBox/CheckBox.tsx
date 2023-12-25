import { Pressable } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { CHECK_COLOR, CHECK_SIZE } from './constants';

interface ICheckboxProps {
    handleCheck: (check:boolean)=>void;
    activeCheckBg?:string;
    iconColor?:string;
}




export default function CheckBox({handleCheck, activeCheckBg,iconColor}:ICheckboxProps) {
  const [check, setCheck] = useState(false)
  
  return <Pressable 
            onPress={()=>{setCheck( (pre)=>!pre);handleCheck?.(check) }}
            className={`h-5 w-5 rounded-md ${check ? styles(activeCheckBg).check:styles().uncheck} justify-center items-center`}
        >
        <FontAwesome name='check' size={CHECK_SIZE} color={iconColor|| CHECK_COLOR}/>
    </Pressable>
}

// conditional styles 
const styles  = (activeCheckBg?:string|undefined) => {
    return {
        check: activeCheckBg || "bg-red500",
        uncheck:"bg-white border-2 border-coolGray400"
    }
}