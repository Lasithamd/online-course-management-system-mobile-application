import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

function Videos({ navigation, route }) {
  const videoID = route.params;
  const [data, setData] = useState(null);
  const [paused, setPaused] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudentCourse = async () => {
      try {
     
        
        const token = await AsyncStorage.getItem('userToken');
        if (!token) {
          throw new Error('Token not found');
        }
        console.log('Token retrieved:', token); // Log the token to verify
  
        const response = await axios.get(`http://192.168.8.101:3000/video/${videoID}`, {
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
  }, [videoID]);

  // useEffect(() => {
  //   const fetchVideoData = async () => {
  //     try {
  //       const token = await AsyncStorage.getItem('userToken'); // Retrieve the token
  //       if (!token) {
  //         throw new Error('Token not found');
  //       }
  
  //       const response = await axios.get(`http://192.168.8.101:3000/video/detail/${videoID}`, {
  //         headers: { Authorization: `Bearer ${token}` }, // Add Bearer token
  //       });
  
  //       console.log('Response data:', response.data); // Log the response data directly
  //     } catch (error) {
  //       console.log('Error:', error.response || error.message); // Log error details
  //     }
  //   };
  
  //   fetchVideoData();
  // }, [videoID]); // Add videoID to the dependency array
  
  const togglePause = () => {
    setPaused(!paused);
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text style={styles.errorText}>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{data?.title || 'Video Title'}</Text>
      </View>
      <Video
        source={{ uri:'http://192.168.8.101:3000'+data.video_path }} // Use the fetched URL
        style={styles.video}
        controls={true}
        paused={paused}
        onBuffer={() => console.log('Buffering...')}
        onError={(error) => console.error('Video Error:', error)}
        resizeMode="cover"
      />
      <View style={styles.controls}>
        <Text style={styles.controlText} onPress={togglePause}>
          {paused ? 'Play' : 'Pause'}
        </Text>
      </View>
    </View>
  );
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: width - 40,
    height: 250,
    backgroundColor: '#000',
  },
  titleContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  controls: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 5,
  },
  controlText: {
    fontSize: 18,
    color: '#000',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Videos;
