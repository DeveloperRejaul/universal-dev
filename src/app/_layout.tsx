import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppContext from 'src/store/context/AppContext';
import { Provider } from 'react-redux';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '../../config/gluestack-ui.config';
import { store } from 'src/store/rtk/store/store';

export default function () {
  return (
    <Provider store={store}>
      <AppContext>
        <GluestackUIProvider config={config} colorMode='light'>
          <SafeAreaView style={{ flex: 1 }}>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name='index' options={{ title: 'Login' }} />
              <Stack.Screen name='(drawer)' options={{ headerShown: false }} />
            </Stack>
          </SafeAreaView>
        </GluestackUIProvider>
      </AppContext>
    </Provider>
  );
}
