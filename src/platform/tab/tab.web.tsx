import { Ionicons } from '@expo/vector-icons';
import { useMedia } from '@hooks/useMedia';
import { Tabs } from 'expo-router';
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { rf } from 'src/constants/dimensions';
export default () => {
  const {md} = useMedia();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: rf(1.2),
          color: 'black',
          fontWeight: 'bold',
        },
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={md && styles.icon}>
              <Ionicons
                name='home'
                size={rf(2)}
                color={focused ? '#2196f3' : 'black'}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <View style={md && styles.label}>
              <Text style={{color:focused ? '#2196f3' : 'black' , marginTop:3}}>Home</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={md && styles.icon}>
              <Ionicons
                name='person'
                size={rf(2)}
                color={focused ? '#2196f3' : 'black'}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <View style={ md && styles.label}>
              <Text style={{color:focused ? '#2196f3' : 'black', marginTop:3 }}>Profile</Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  label:{
    marginLeft:20,
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
  },
  icon:{
    height:'100%',
    justifyContent:'center',
    alignItems:'center'
  }
});