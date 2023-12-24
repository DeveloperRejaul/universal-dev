import { View } from 'react-native';
import React from 'react';
import * as Component from "@components"
import * as PComponent from "@platform-components"
import { ScrollView } from 'react-native';
import {useToast} from '@hooks/useToast';
import { Text } from 'react-native';
import { styled } from 'src/utils/styled';

const components = Object.values(Component);
const pcomponents = Object.values(PComponent);


export default function Components() {
  const {show} = useToast()
  return (
    <ScrollView>
      <View className='px-2'>
       {/* Display Toast message */}
       <Component.Button text='Toast' onPress={()=>show("Success message",{ type:"success"})}/>
       {components.map((Com,i)=><View key={i} className='py-4'><Com/></View>)}

    

       <Text className='text-center'> Platform specific components  </Text>
       {pcomponents.map((Com,i)=><View key={i} className='py-4'><Com/></View>)}
      </View> 
    </ScrollView>
  );
}
