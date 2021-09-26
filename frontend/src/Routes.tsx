import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Welcome from './pages/Welcome';
import Avatar from './pages/Avatar';
import Categories from './pages/Categories';
import DefineItem from './pages/DefineItem';

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='DefineItem' component={DefineItem} />
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Avatar' component={Avatar} />
        <Stack.Screen name='Categories' component={Categories} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
