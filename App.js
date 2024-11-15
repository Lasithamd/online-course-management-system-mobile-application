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
import Home from './src/screens/Home/Home'; 
import Videos from './src/screens/Video/Videoss'
import Login from './src/screens/Login/Login';
import Loading from './src/screens/Loading/Loading'
// import BottomNav from './src/components/BottomNav';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Course from './src/screens/Course/Course'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const Stack = createStackNavigator();
  const [user, setUser] = useState(null); // To store the logged-in user's data
  const [data, setData] = useState([]); // To store all the data fetched from the API
  const [filteredData, setFilteredData] = useState([]); // To store data filtered for the logged-in user

  useEffect(() => {
    // Fetch user data from AsyncStorage
    const fetchUserData = async () => {
        const userData = await AsyncStorage.getItem('userData');
        setUser(JSON.parse(userData)); // Parse the JSON string into an object
    };

    fetchUserData();
}, []);

useEffect(() => {
    // Fetch all data from the API
    const fetchData = async () => {
        const token = await AsyncStorage.getItem('userToken');
        axios.get('http://student-api.acpt.lk/api/student/getAll', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                setData(response.data); // Store all data in the state
            })
            .catch(err => {
                console.error(err);
            });
    };

    fetchData();
}, []);

useEffect(() => {
    // Filter data based on logged-in user
    if (user && data.length > 0) {
        const filtered = data.filter(item => item.userID === user.id); // Assuming each item has a `userID`
        setFilteredData(filtered);
    }
}, [user, data]);
useEffect(() => {
  // Simulate a delay for loading screen (e.g., 3 seconds)
  const timeout = setTimeout(() => {
    setIsLoading(false);
  }, 3000); // 3000 ms = 3 seconds

  // Cleanup the timeout if the component is unmounted before the delay completes
  return () => clearTimeout(timeout);
}, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Define screens for stack navigation */}
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Course" component={Course}  />
        <Stack.Screen name="Video" component={Videos}  />
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}

export default App;
