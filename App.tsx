import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as React from 'react';
import useCachedResources from './hooks/useCachedResources';
import Navigation from "./navigation";
import useColorScheme from './hooks/useColorScheme';
import { AudioContextProvider, audioReducer, initialAudioState } from "./contexts/AudioContext";
import { useReducer } from 'react';

export default function App() {
  const colorScheme = useColorScheme();
  const isLoadingComplete = useCachedResources();
  const [audioState, audioDispatch] = useReducer(audioReducer, initialAudioState);

  const deviceContextValues = {
    audioState,
    audioDispatch
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AudioContextProvider value={deviceContextValues}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </AudioContextProvider>
      </SafeAreaProvider>
    );
  }
}

