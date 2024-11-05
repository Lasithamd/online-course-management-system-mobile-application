import React, { useEffect, useState } from 'react';
import { Card, Avatar, Text, Button, IconButton } from 'react-native-paper'
import { View, StyleSheet ,SafeAreaView, ScrollView,FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import ListItems from '../../components/ListItem/ListItems'
import Videos from '../Video/Videos';
import MyAppBar from '../../components/MyAppBar';
export default function Course({navigation,route}){
  const { courseID } = route.params;
  const [data, setData] = useState(null); // To store course data

  useEffect(() => {
    const fetchStudentCourse = async () => {
      try {
     
        
        const token = await AsyncStorage.getItem('userToken');
        if (!token) {
          throw new Error('Token not found');
        }
        console.log('Token retrieved:', token); // Log the token to verify
  
        const response = await axios.get(`http://192.168.8.101:3000/video/${courseID}`, {
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
  }, [courseID]);

    const loadVideo= (videoID)=>{
        navigation.navigate('Video',{videoID})
      }
    return (
      <ScrollView style={styles.safeAreaContainer}>
            <View style={styles.container}>
            
              <View style={styles.titlearea}>
                <Text style={styles.titleconent}>Course Name</Text>
                <Text style={styles.titleconent2}>Description</Text>
              </View>
              <View style={styles.subtitlearea}><Text>Video List</Text></View>
              
              
              <FlatList style={styles.fatlelist}
                  data={data}
                  keyExtractor={(item) => item.id.toString()} // Assuming each course has a unique 'id'
                  renderItem={({ item }) => (
                  <Card style={styles.videocard}>
              <Card.Cover source={{ uri: 'http://192.168.8.101:3000'+item.thumbnails_path }} />
                <Card.Title title={item.name} subtitle={item.description}  right={(props) =><Button onPress={()=>loadVideo(item.id)}>Play Now  </Button>} />
              </Card>
                  )}
              />
                

             
            </View></ScrollView>
          );
        }
    
        const styles = StyleSheet.create({
          fatlelist:{
            height:"100%"
          },
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