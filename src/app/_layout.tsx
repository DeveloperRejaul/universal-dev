import '../config/app.css'
import { Stack} from 'expo-router';
import { Provider } from 'react-redux';;
import { SafeAreaView } from 'react-native-safe-area-context';
import { store } from 'src/store/rtk/store';
import AppContext from 'src/store/context/AppContext';
import { ToastProvider } from 'src/components/toast/main/Provider';

export default function () {
  return (
    <Provider store={store}>
      <AppContext >
        <ToastProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name='index' options={{ title: 'Login' }} />
              <Stack.Screen name='(drawer)' options={{ headerShown: false }} />
            </Stack>
          </SafeAreaView>
        </ToastProvider>
      </AppContext>
    </Provider>
  );
}