import { registerRootComponent } from 'expo';
import { ExpoRoot, SplashScreen } from 'expo-router';
import { configureReanimatedLogger, ReanimatedLogLevel } from 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

export function App() {
  const ctx = require.context('./src/routes');
  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);
