import React, { useState } from 'react';
import { Card, Avatar, Text, Button, IconButton, } from 'react-native-paper'
import Video from 'react-native-video';
import {StyleSheet,View,Dimensions } from 'react-native';

function Videos({navigation}){
  const [paused, setPaused] = useState(false);

  const togglePause = () => {
    setPaused(!paused);
  };
    return(
        <View style={styles.container}>
           <View style={styles.titleContainer}>
        <Text style={styles.title}>My Video Title</Text>
      </View>
        <Video
          source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}  // URL of the video or local file
          style={styles.video}
               controls={true} // Enables native controls
        paused={paused} // Controls playback state
           onBuffer={() => console.log('Buffering...')}
           onError={(error) => console.error('Video Error:', error)} // Show media controls (Play, Pause, etc.)
          resizeMode="cover"  // Resize the video to fit the view
        />
        <View style={styles.controls}>
        <Text style={styles.controlText} onPress={togglePause}>
          {paused ? 'Play' : 'Pause'}
        </Text>
      </View>
      </View>
      
    )
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
    top: 20, // Adjust this to position the title as needed
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
  });
export default Videos;