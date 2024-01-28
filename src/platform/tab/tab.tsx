import { useToken } from '@hooks/useToken';
import { Tabs } from 'expo-router';
import React, { useEffect } from 'react';
import { Pressable, StyleSheet,Text } from 'react-native';
import CoursesIcon from 'src/assets/icon/CoursesIcon';
import FarmIcon from 'src/assets/icon/FarmIcon';
import HomeIcon from 'src/assets/icon/HomeIcon';
import MessageIcon from 'src/assets/icon/MessageIcon';
import ShopIcon from 'src/assets/icon/ShopIcon';
import { rf } from 'src/constants/dimensions';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { IIconProps } from 'src/assets/icon/type';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface TabButtonProps extends BottomTabBarButtonProps {
  item: {
    name: string;
    icon: React.ComponentType<IIconProps>;
    title: string
  }
}


// constants colors 
const LABEL_INACTIVE = useToken('colors','paragraph');
const TAB_INACTIVE_ICON = useToken( 'colors','dark');
const TAB_ACTIVE_BG = useToken( 'colors','primary');


// items 
const tabItems = [
  {name:'home', icon: HomeIcon , title:'Home'},
  {name:'farm', icon: FarmIcon , title:'Farm'},
  {name:'webinar', icon: MessageIcon , title:'Webinars'},
  {name:'courses', icon: CoursesIcon , title:'My Courses'},
  {name:'shop', icon: ShopIcon , title:'Shop'},
];



const TabButton = (props: TabButtonProps) => {
  const {item, accessibilityState, onPress} = props;
  const focused = accessibilityState?.selected;

  const translateY = useSharedValue(0);


  useEffect(()=>{
    if(focused) translateY.value = withTiming(-30);
    if(!focused) translateY.value = withTiming(0);
  },[focused]);

  const animatedStyle = useAnimatedStyle(()=>({transform:[{translateY:translateY.value}]}));

  
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Animated.View style={[animatedStyle, focused ? styles.btn :{}]}>
        <item.icon color={focused ? '#fff' : TAB_INACTIVE_ICON} size={focused ? rf(3.3):rf(3)} />
      </Animated.View>
      {focused || <Text style={styles.label}>{item.title}</Text>}
    </Pressable>
  );
};


export default () => {
  return (
    <Tabs 
      screenOptions={{
        tabBarStyle:{
          height:60,
        },
        headerShown:false
      }}
    > 
      {tabItems.map(item=> (
        <Tabs.Screen 
          key={item.name}
          name={item.name} 
          options={{
            tabBarButton:(props)=> <TabButton {...props} item={item} />
          }}
        />
      ))}
    </Tabs>
  );
};




const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  label:{
    fontSize:rf(1.6),
    fontWeight:'400',
    color:LABEL_INACTIVE
  },
  btn:{
    width:60,
    height:60,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:TAB_ACTIVE_BG
  }
});