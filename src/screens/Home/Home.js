import React, { useEffect, useState } from 'react';
import { Card, Text, Button } from 'react-native-paper';
import { View, StyleSheet, ActivityIndicator,FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyAppBar from '../../components/MyAppBar';
import axios from 'axios';

function Home({ navigation, route }) {
  const [user, setUser] = useState(null); 
  const [data, setData] = useState(null); // To store course data
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle errors
  const [id, setId] = useState(null); // Initialize id as null

  // Fetch user data from AsyncStorage
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData !== null) {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
        }
      } catch (err) {
        console.error("Error fetching user data: ", err);
      }
    };
    
    fetchUserData();
  }, []);

  // Set the ID once the user data is loaded
  useEffect(() => {
    if (user) {
      setId(user.id); // Ensure user object exists before accessing id
    }
  }, [user]);

  // Fetch student course data when id is available
  useEffect(() => {
    const fetchStudentCourse = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        if (!token) {
          throw new Error('Token not found');
        }
        console.log('Token retrieved:', token); // Log the token to verify
  
        const response = await axios.get(`http://192.168.8.101:3000/student-course/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(response.data);
        console.log(response.data)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchStudentCourse();
  }, [id]);
  

  const loadVideo = (courseID) => {
    console.log(courseID);
    
    navigation.navigate('Course', { courseID });
  };

  // // Show loading indicator while fetching data
  // if (loading) {
  //   return <ActivityIndicator size="large" color="#0000ff" />;
  // }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <MyAppBar />
      <View style={styles.titlearea}>
        <Text style={styles.titleconent}>{user ? `Welcome, ${user.name}` : 'Welcome'}</Text>
        <Text style={styles.titleconent2}>Email: {user ? user.email : 'Loading...'}</Text>
      </View>
      <View style={styles.subtitlearea}><Text>Course List</Text></View>

      
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()} // Assuming each course has a unique 'id'
        renderItem={({ item }) => (
          <Card>
          <Card.Title 
            title={item.name || "Course Title"} 
            subtitle={item.description || "Course Description"}  
            right={(props) => <Button onPress={() => loadVideo(item.id)}>View More</Button>} 
          />
        </Card>
        )}  />
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
