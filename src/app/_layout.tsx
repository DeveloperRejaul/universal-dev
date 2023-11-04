import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppContext from 'src/context/AppContext';
import { Provider } from 'react-redux';
import { store } from 'src/rtk/store/store';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

export default function () {
  return (
    <Provider store={store}>
      <AppContext>
        <GluestackUIProvider config={config}>
          <SafeAreaView style={{ flex: 1 }}>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name='index' options={{ title: 'Login' }} />
              <Stack.Screen name='(tab)' options={{ headerShown: false }} />
            </Stack>
          </SafeAreaView>
        </GluestackUIProvider>
      </AppContext>
    </Provider>
  );
}
