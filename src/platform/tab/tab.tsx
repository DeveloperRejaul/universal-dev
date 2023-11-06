import { Ionicons } from '@expo/vector-icons';
import { Text } from '@gluestack-ui/themed';
import { Tabs } from 'expo-router';
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
            <Text fontSize={'$sm'} color={focused ? '#2196f3' : 'black'}>
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
            <Text fontSize={'$sm'} color={focused ? '#2196f3' : 'black'}>
              Notification
            </Text>
          ),
        }}
      />
    </Tabs>
  );
};
