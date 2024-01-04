import { Platform, Pressable, ScrollView, Text, View, useWindowDimensions} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useToken } from '@hooks/useToken';
import Dialog from '../dialog/Dialog';

const DATA = ['Javascript', 'React', 'React Native', 'Dart', 'Flutter', 'Kotlin', 'Kotlin MultiPlatform'];


interface selectProps {
  data?: string[];
}


export default function Select({data}: selectProps) {
  const [select, setSelect] = useState<string>('Select');
  const [open, setOpen] = useState<boolean>(false);
  const {width, height} = useWindowDimensions();

  return (
    <>
      <Pressable
        onPress={()=>{setOpen(true);}}
        className='h-12 bg-rose200 rounded-md border-2 border-rose300 justify-between items-center px-4 flex-row'
      >
        <Text className='text-lg text-coolGray800'>{select}</Text>
        <Ionicons name='chevron-down' size={useToken('size', '5')} color={useToken('colors', 'black')} />  
      </Pressable>

      <Dialog 
        onBlur={()=>setOpen(false)}
        open={open}
        onRequestClose={()=>setOpen(false)}
        width={width-20}
        height={height/3}
        animationType='slide'
        innerBg='#00000019'
      >
        <ScrollView>
          <View className='bg-rose50 p-9'>
            {(data || DATA).map((d,i)=> (<View key={i} className={`transition rounded-md  ${ Platform.OS === 'web' && 'hover:bg-rose200'}`}>
              <Text className={'text-lg py-1 px-2 my-2'} onPress={()=>{setSelect(d); setOpen(false);}}>{d}</Text>
            </View>))}
          </View>
        </ScrollView>
      </Dialog>
    </>
  );
}