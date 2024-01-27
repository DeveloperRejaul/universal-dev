/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useToken } from '@hooks/useToken';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import Animated from 'react-native-reanimated';
import CoursesIcon from 'src/assets/icon/CoursesIcon';
import FarmIcon from 'src/assets/icon/FarmIcon';
import HomeIcon from 'src/assets/icon/HomeIcon';
import MessageIcon from 'src/assets/icon/MessageIcon';
import ShopIcon from 'src/assets/icon/ShopIcon';
import { rf } from 'src/constants/dimensions';


const LABEL_INACTIVE = useToken('colors','paragraph');
const TAB_INACTIVE_ICON = useToken( 'colors','dark');
const TAB_ACTIVE_BG = useToken( 'colors','primary');

export default () => {

  return (
    <Tabs 
      screenOptions={{
        tabBarStyle:{height:60},
        headerShown:false,
        tabBarActiveTintColor:TAB_ACTIVE_BG,
        tabBarInactiveTintColor:TAB_INACTIVE_ICON,
      }}
    > 
      <Tabs.Screen name='home' options={{
        tabBarIcon:({ color, focused})=> {
          return (
            <Animated.View > 
              <HomeIcon color={color} size={rf(3)} /> 
            </Animated.View>
          );
        },
        //@ts-expect-error
        title: ({focused})=> <Text style={[styles.label,{color:focused ? TAB_ACTIVE_BG:LABEL_INACTIVE}]}>{ 'Home'}</Text>
      }}
      />
      <Tabs.Screen name='farm' options={{
        tabBarIcon:({ color,focused})=> (
          <Animated.View >
            <FarmIcon color={color} size={rf(3)} />
          </Animated.View>
        ), 
        //@ts-expect-error
        title: ({focused})=> <Text style={[styles.label,{color:focused ? TAB_ACTIVE_BG:LABEL_INACTIVE}]}>{ 'Farm'}</Text>
      }}
      />
      <Tabs.Screen name='message' options={{
        tabBarIcon:({ color, focused})=> (
          <Animated.View >
            <MessageIcon size={rf(3)} color={color} />
          </Animated.View>
        ),
        //@ts-expect-error
        title:({focused})=> <Text style={[styles.label,{color:focused ? TAB_ACTIVE_BG:LABEL_INACTIVE}]}>{ 'Webinars'}</Text> 
      }}
      />   
      <Tabs.Screen name='courses' options={{
        tabBarIcon:({ color, focused})=> (
          <Animated.View >
            <CoursesIcon color={color} size={rf(3)} />
          </Animated.View>
        ),
        //@ts-expect-error
        title: ({focused})=> <Text style={[styles.label,{color:focused ? TAB_ACTIVE_BG:LABEL_INACTIVE}]}>{'My Courses'}</Text>
      }}
      />
      <Tabs.Screen name='shop' options={{
        tabBarIcon:({ color, focused})=>(
          <Animated.View >
            <ShopIcon color={color} size={rf(3)} />
          </Animated.View>
        ),
        //@ts-expect-error
        title: ({focused})=> <Text style={[styles.label,{color:focused ? TAB_ACTIVE_BG:LABEL_INACTIVE}]}>{'Shop'}</Text>
      }}
      />
    </Tabs>
  );


};




const styles = StyleSheet.create({
  label:{
    fontSize:rf(1.6),
    marginTop:-10,
    marginBottom:5,
    fontWeight:'400'
  },
});