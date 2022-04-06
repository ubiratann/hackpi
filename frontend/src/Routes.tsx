import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Question from './pages/Question';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='question' component={Question} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
