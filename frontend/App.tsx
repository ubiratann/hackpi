import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Rubik_400Regular,
} from '@expo-google-fonts/rubik';
import AppLoading from 'expo-app-loading';

import Routes from './src/Routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style='auto' />
      <Routes />
    </>
  );
}