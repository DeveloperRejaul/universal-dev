import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import { rf } from 'src/constants/dimensions';

export default () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name='home'
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name='home'
              size={rf(2.5)}
              color={focused ? '#2196f3' : 'black'}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{fontSize:16, color:focused ? '#2196f3' : 'black' }}>
              Home
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name='notification'
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name='notifications'
              size={rf(2.5)}
              color={focused ? '#2196f3' : 'black'}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{fontSize:16, color:focused ? '#2196f3' : 'black' }}>
              Notification
            </Text>
          ),
        }}
      />
    </Tabs>
  );
};
