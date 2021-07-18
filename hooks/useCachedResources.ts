import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'poppins-light': require('../assets/fonts/Poppins-Light.ttf'),
          'poppins-regular': require('../assets/fonts/Poppins-Regular.ttf'),
          'poppins-medium': require('../assets/fonts/Poppins-Medium.ttf'),
          'poppins-semibold': require('../assets/fonts/Poppins-SemiBold.ttf'),
          'poppins-black': require('../assets/fonts/Poppins-Black.ttf'),
          'poppins-thin': require('../assets/fonts/Poppins-Thin.ttf'),
          'poppins-bold': require('../assets/fonts/Poppins-Bold.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        await SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
