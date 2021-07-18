import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from "./navigation";
import useColorScheme from './hooks/useColorScheme';

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
          <StatusBar />
      </SafeAreaProvider>
  );
}

