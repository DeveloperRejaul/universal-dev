import {ScrollView, Text, TextStyle, View, ViewStyle } from 'react-native';
import React, { useState } from 'react';
import ArrowRight from 'src/assets/icon/ArrowRight';

const DATA = ['Javascript', 'React', 'React Native', 'Dart', 'Flutter', 'Kotlin', 'Kotlin MultiPlatform'];

interface IDropDownPros {
  data: string[];
  onSelect: (value: string) => void
  className?: string;
  bodyHeight?: number;
  itemsStyle?: TextStyle;
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  itemContainerStyle?: ViewStyle;
  selectTextStyle?: TextStyle;
  containerWidth?: number ;
  itemContainerHeight?: number;
  itemContainerWidth?: number;
  itemContainerAline?: 'left' | 'right' ;
  
}

export default function DropDown(props: IDropDownPros) {

  const {
    data = DATA,
    className,
    bodyHeight = 50,
    containerWidth = 150,
    itemsStyle,
    containerStyle,
    inputStyle,
    selectTextStyle,
    onSelect,
    itemContainerStyle,
    itemContainerHeight,
    itemContainerWidth = props.containerWidth || 150,
    itemContainerAline = 'left',
  } = props;

  const [select, setSelect] = useState(data[0]);
  const [toggle , setToggle] = useState(false);

  const IStyle = itemContainerAline === 'left' ? {left:0} : {right:0};


  return (
    <View style={{width: containerWidth, ...containerStyle}}>
      <View
        style={{height:bodyHeight, ...inputStyle}}
        className={`border border-border bg-white p-2 px-4 flex-row justify-between items-center rounded-md w-full ${className}`}
      >
        <Text 
          style={selectTextStyle}
          className='text-black'
        >{select}</Text>
        <ArrowRight className='rotate-90' onPress={()=> setToggle(pre=> !pre)} />
      </View>
      {toggle && (
        <ScrollView 
          style={{top:bodyHeight+5, height: itemContainerHeight, width: itemContainerWidth,zIndex:9999,...IStyle, ...itemContainerStyle}}
          className='absolute bg-white w-full shadow-md rounded-lg'
        >
          {data.map(item=> <Text onPress={()=>{setSelect(item); onSelect?.(item); setToggle(false);}} style={{ ...itemsStyle}} key={item} className={`text-black px-2 py-3 ${select === item ? 'bg-primary2/10 text-primary2':''}`}>{item}</Text>)} 
        </ScrollView>
      )}
    </View>
  );
}