/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';
import { Button } from 'react-native-paper';
import Home from './src/screens/Home/Home'
import Login from './src/screens/Login/Login';
import Loading from './src/screens/Loading/Loading'
// import BottomNav from './src/components/BottomNav';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const Stack = createStackNavigator();

  useEffect(() => {
    const fetchData = async () => {
     
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
    };

    fetchData();
  }, []);
 
  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Define screens for stack navigation */}
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
