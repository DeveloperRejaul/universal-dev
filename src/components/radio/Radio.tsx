import { Pressable, View } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useToken } from '@hooks/useToken'



// create a new RadioContext
interface RadioContextProps {
    select: string | number;
    setSelect: React.Dispatch<React.SetStateAction<string | number>>;
}
  
const RadioContext = createContext({} as RadioContextProps);









// create a  RadioContext  provider
interface IRadioGroupProps {
    children: React.ReactNode;
    initialSelect:number | string;
    handleSelectValue?:(val:number|string)=>void
}
export function RadioGroup ({children, handleSelectValue,initialSelect}:IRadioGroupProps){
   const [select, setSelect] = useState<string|number>(initialSelect)

   useEffect(()=>{
    handleSelectValue?.(select)
   },[select])

  return  <RadioContext.Provider value={{select, setSelect}}>
        {children}
    </RadioContext.Provider>

}









// create a radio item 
interface IRadioProps {
    size?:number;
    borderColor?:string;
    ballColor?:string;
    value:string  | number;
    bgColor?:string
}


export function Item({size, borderColor, ballColor, value,bgColor}:IRadioProps) {

   const SIZE:number = size || useToken("size","5")
   const BORDER_COLOR:string = borderColor || useToken("colors","rose200")
   const BALL_COLOR:string = ballColor || useToken("colors","rose200")
   const BG_COLOR:string = bgColor || useToken("colors","rose50")
  const {select, setSelect} = useContext(RadioContext)

  return (
    <Pressable
        onPress={() => setSelect(value)}
        style={{
            width:SIZE,
            height:SIZE,
            borderColor:BORDER_COLOR,
        }} 
        className='border-2 rounded-full justify-center items-center'>
    
    <View style={{
        width:SIZE/2,
        height:SIZE/2,
        backgroundColor: select === value ? BALL_COLOR : BG_COLOR
    }}
      className='rounded-full'
    />
    </Pressable>
  )
}


