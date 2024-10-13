import React, { useEffect, useState } from 'react';
import { Card, Text, Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyAppBar from '../../components/MyAppBar';
import axios from 'axios';
function Home({ navigation }) {
  const [user, setUser] = useState(null); 
  const [name	, setName] = useState(null); 
  const [	description, setDescription] = useState(null); 

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData !== null) {
          setUser(JSON.parse(userData)); // Parse the JSON string into an object
        }
      } catch (err) {
        console.error("Error fetching user data: ", err);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    axios.post('http://192.168.8.104:3000/user/login', data)
        .then(async (response) => {
            const token = response.data.token;
            const user = response.data.user;

            try {
                // Store token and user data in AsyncStorage asynchronously
                await AsyncStorage.setItem('userToken', token);
                await AsyncStorage.setItem('userData', JSON.stringify(user));

                // Navigate to the Home screen after saving the data
                navigation.navigate('Home');

                console.log(response.data);
            } catch (error) {
                console.error('Error saving data to AsyncStorage:', error);
            }
        })
        .catch((err) => {
            console.error('Login error:', err);
        });
  }, []);

  const loadVideo = () => {
    navigation.navigate('Course');
  };

  return (
    <View style={styles.container}>
      <MyAppBar />
      <View style={styles.titlearea}>
        <Text style={styles.titleconent}>{user ? `Welcome, ${user.name}` : 'Welcome'}</Text>
        <Text style={styles.titleconent2}>Email: {user ? user.email : 'Loading...'}</Text>
      </View>
      <View style={styles.subtitlearea}><Text>Course List</Text></View>
      <Card>
        <Card.Title 
          title="Card Title" 
          subtitle="Card Subtitle"  
          right={(props) => <Button onPress={() => loadVideo()}>View More</Button>} 
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  titlearea: {
    backgroundColor: "#3498db",
    paddingTop: 40,
    paddingLeft: 20,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  titleconent: {
    color: "#fff",
    fontSize: 22
  },
  titleconent2: {
    color: "#fff"
  },
  subtitlearea: {
    padding: 20
  }
});

export default Home;
