import { View } from 'react-native';
import React from 'react';
import * as Component from "@components"
import * as PComponent from "@platform-components"
import { ScrollView } from 'react-native';
import {useToast} from '@hooks/useToast';
import { Text } from 'react-native';
import { styled } from 'src/utils/styled';

const RNText = styled(Text, {backgroundColor:"red"})

export default function Components() {
  const {show} = useToast()
  return (
    <ScrollView>
      <View className='px-2'>
       {/* Display Toast message */}
       <Component.Button text='Toast' onPress={()=>show("Success message",{ type:"success"})}/>
       {Object.values(Component).map((Com,i)=><View key={i} className='py-4'><Com/></View>)}

      <RNText/>

       <Text className='text-center'> Platform specific components  </Text>
       {Object.values(PComponent).map((Com,i)=><View key={i} className='py-4'><Com/></View>)}
      </View>
    </ScrollView>
  );
}
