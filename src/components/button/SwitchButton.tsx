import { Text, View ,Pressable} from 'react-native';
import React, { useEffect, useState } from 'react';


const activeText = 'font-bold font-manropeBold text-lg';
const activeView = 'bg-white';

interface ISwitchButtonProps {
  onPress: (value: boolean) => void;
  leftBtnText?: string;
  rightBtnText?: string;
}

export default function SwitchButton (props: ISwitchButtonProps) {
  const [active, setActive] = useState<boolean>(false);

  
  useEffect(()=>{props.onPress(active);},[active]);

  return (
    <View className=' flex-2 flex-row justify-between bg-gray/20 py-3 rounded-xl px-3'>
      <Pressable 
        onPress={()=>setActive(true)}
        className={`justify-center items-center flex-1 py-2 rounded-lg ${active ? activeView :'' }`}
      >
        <Text className={active ? activeText :''}>Yes</Text>
      </Pressable>
      <Pressable
        onPress={()=>setActive(false)}
        className={`justify-center items-center flex-1 py-2 rounded-lg ${!active? activeView :'' }`}
      >
        <Text className={!active ? activeText :''}>No</Text>
      </Pressable>
    </View>
  );
}

