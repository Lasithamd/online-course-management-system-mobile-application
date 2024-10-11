// src/screens/Home/Home.js
import React, { useEffect, useState } from 'react';
import { Card, Avatar, Text, Button, IconButton } from 'react-native-paper'
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import ListItems from '../../components/ListItem/ListItems'
import Course from '../Course/Course';
import { blue100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

import MyAppBar from '../../components/MyAppBar';

function Home({ navigation }) {
const loadVideo= ()=>{
  navigation.navigate('Course')
}
  const [data, setData] = useState('');
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {

    const color = item.id === selectedId ? 'white' : 'black';
  }
  // useEffect(() => {

  //     const token =  AsyncStorage.getItem('userToken');
  //     console.log(token);
  //     axios.get('http://student-api.acpt.lk/api/student/getAll',{
  //       headers: { Authorization: `Bearer ${token}` }
  //     }) 
  //     .then(response => {
  //       setData(response.data);
  //       console.log(data);

  //     })
  //     .catch(err => {
  //       console.error(err);
  //   });
  //     console.log(data);

  // }, []); // Empty dependency array to run only once on mount


  return (

    <View style={styles.container}>
      <MyAppBar />
      <View style={styles.titlearea}>
        <Text style={styles.titleconent}>Sudent Name</Text>
        <Text style={styles.titleconent2}>Email:sdsdjsdjsdjs</Text>
      </View>
      <View style={styles.subtitlearea}><Text>Course List</Text></View>
      <View>

      </View>
      <Card>
        <Card.Title title="Card Title" subtitle="Card Subtitle"  right={(props) =>   <Button onPress={()=>loadVideo()}>View More </Button>} />
      </Card>
     
   
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

export default Home;
