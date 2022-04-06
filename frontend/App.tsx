import {
  Sniglet_400Regular, useFonts
} from '@expo-google-fonts/sniglet';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Routes from './src/Routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Sniglet_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style='auto' />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Routes />
      </GestureHandlerRootView>
    </>
  );
}