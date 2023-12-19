import { Text, View } from 'react-native';
import React from 'react';
import {AnimatedButton,Button,Overly,ShapingCard,SimpleCarousal} from "@components"
import { ScrollView } from 'react-native';
const components = [AnimatedButton,Button,Overly,ShapingCard,SimpleCarousal]

export default function Components() {
  return (
    <ScrollView>
      <View>
        {components.map((Com,i)=> <Com key={i}/>)}
      </View>
    </ScrollView>
  );
}
