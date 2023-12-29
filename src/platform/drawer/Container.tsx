import { ScrollView, View } from 'react-native';
import React from 'react';
import { drawerItems } from './constance';
import { Accordion } from '@components';
import { IContainerProps } from './types';

export default (props: IContainerProps)=> {
  return (
    <ScrollView>
      <View className='pb-80'>
        {drawerItems.map((data)=> (
          <Accordion 
            key={data.id} 
            id={data.id} 
            items={data.items} 
            title={data.title}
            onPress={props.onPress}
            onPressItem={props.onPressItem}
          />
        ))}
      </View>
    </ScrollView>
  );
};
