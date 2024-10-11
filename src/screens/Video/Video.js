import React from "react";
import { Card, Avatar, Text, Button, IconButton, } from 'react-native-paper'
import Video from 'react-native-video';
import {StyleSheet,View} from 'react-native';

function Videos({navigation}){

    return(
        <View style={styles.container}>
        <Video
          source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}  // URL of the video or local file
          style={styles.video}
          controls={true}  // Show media controls (Play, Pause, etc.)
          resizeMode="contain"  // Resize the video to fit the view
        />
      </View>
      
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    video: {
      width: '100%',  // You can customize width and height based on your needs
      height: 300,
    },
  });
export default Videos;