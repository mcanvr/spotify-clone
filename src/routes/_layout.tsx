import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import '../global.css';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'CircularStd-Black': require('@assets/fonts/CircularStd-Black.ttf'),
    'CircularStd-BlackItalic': require('@assets/fonts/CircularStd-BlackItalic.ttf'),
    'CircularStd-Bold': require('@assets/fonts/CircularStd-Bold.ttf'),
    'CircularStd-BoldItalic': require('@assets/fonts/CircularStd-BoldItalic.ttf'),
    'CircularStd-Book': require('@assets/fonts/CircularStd-Book.ttf'),
    'CircularStd-BookItalic': require('@assets/fonts/CircularStd-BookItalic.ttf'),
    'CircularStd-Medium': require('@assets/fonts/CircularStd-Medium.ttf'),
    'CircularStd-MediumItalic': require('@assets/fonts/CircularStd-MediumItalic.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar translucent barStyle="light-content" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SafeAreaProvider>
  );
}
