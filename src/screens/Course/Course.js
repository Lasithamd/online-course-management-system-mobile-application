import React, { useEffect, useState } from 'react';
import { Card, Avatar, Text, Button, IconButton } from 'react-native-paper'
import { View, StyleSheet ,SafeAreaView, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import ListItems from '../../components/ListItem/ListItems'
import Video from '../Video/Video';
import MyAppBar from '../../components/MyAppBar';
export default function Course({navigation}){
    const loadVideo= ()=>{
        navigation.navigate('Video')
      }
    return (

            <View style={styles.container}>
            
              <View style={styles.titlearea}>
                <Text style={styles.titleconent}>Course Name</Text>
                <Text style={styles.titleconent2}>Description</Text>
              </View>
              <View style={styles.subtitlearea}><Text>Video List</Text></View>
              <View>
        
              </View>
              <SafeAreaView>
              <ScrollView>
              <Card style={styles.videocard}>
              <Card.Cover source={{ uri: 'https://img.freepik.com/premium-psd/modern-youtube-thumbnail-design_892970-6.jpg' }} />
                <Card.Title title="Card Title" right={(props) =><Button onPress={()=>loadVideo()}>Play Now  </Button>} />
              </Card>

              <Card style={styles.videocard}>
              <Card.Cover source={{ uri: 'https://img.freepik.com/premium-psd/modern-youtube-thumbnail-design_892970-6.jpg' }} />
                <Card.Title title="Card Title" right={(props) =><Button onPress={()=>loadVideo()}>Play Now </Button>} />
              </Card>

              <Card style={styles.videocard}>
              <Card.Cover source={{ uri: 'https://img.freepik.com/premium-psd/modern-youtube-thumbnail-design_892970-6.jpg' }} />
                <Card.Title title="Card Title" right={(props) =><Button onPress={()=>loadVideo()}>Play Now </Button>} />
              </Card>
              <Card style={styles.videocard}>
              <Card.Cover source={{ uri: 'https://img.freepik.com/premium-psd/modern-youtube-thumbnail-design_892970-6.jpg' }} />
                <Card.Title title="Card Title" right={(props) =><Button onPress={()=>loadVideo()}>Play Now </Button>} />
              </Card></ScrollView>
              </SafeAreaView>
             
            </View>
          );
        }
    
        const styles = StyleSheet.create({
          titlearea: {
            backgroundColor: "#3498db",
            paddingTop: 40,
            paddingLeft: 20, paddingBottom: 20,
            borderBottomLeftRadius: 20,  // Set bottom-left radius
            borderBottomRightRadius: 20,
        
          },
          videocard:{
            padding:10,
          margin:1
          },
          titleconent: {
            color: "#fff",
            fontSize: 22
          },
          titleconent2: {
            color: "#fff"
          },
          subtitlearea:{
           
        padding:20
          }
        });