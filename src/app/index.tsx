import { Redirect } from 'expo-router';
import { Text } from 'react-native';

export default function index() {
//  return <Text> Hello</Text>
  return <Redirect href={'/(stack)/components'} />;
}
