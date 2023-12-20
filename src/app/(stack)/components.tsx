import { Pressable, Text, View } from 'react-native';
import React from 'react';
import * as Component from "@components"
import { ScrollView } from 'react-native';
import { useToast } from 'react-native-toast-notifications';

export default function Components() {

  const {show} = useToast()
  return (
    <ScrollView>
      <View>
        <Pressable onPress={()=>{show("seccess",{ type:"success"})}}>
          <Text>Click Me </Text>
        </Pressable>
       {Object.values(Component).map((Com,i)=><View key={i} className='py-4'><Com/></View>)}
      </View>
    </ScrollView>
  );
}
