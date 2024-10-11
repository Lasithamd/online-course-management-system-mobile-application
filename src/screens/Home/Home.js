import React, { useEffect, useState } from 'react';
import { Card, Text, Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyAppBar from '../../components/MyAppBar';

function Home({ navigation }) {
  const [user, setUser] = useState(null); 
  
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
