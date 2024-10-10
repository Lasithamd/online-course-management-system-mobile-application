// src/screens/Home/Home.js
import React,{useEffect, useState} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import ListItems from '../../components/ListItem/ListItems'
import { blue100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

import BtnNavigation from '../../components/Navigation/BtnNavigation'
function Home({ navigation }) {
  const [data, setData] =useState('');
  useEffect(() => {
  
      const token =  AsyncStorage.getItem('userToken');
      console.log(token);
      axios.get('http://student-api.acpt.lk/api/student/getAll',{
        headers: { Authorization: `Bearer ${token}` }
      }) 
      .then(response => {
        setData(response.data);
        console.log(data);
        
      })
      .catch(err => {
        console.error(err);
    });
      console.log(data);
      
  }, []); // Empty dependency array to run only once on mount



  return (
    <View style={styles.container}>
      <View style={styles.titlearea}>
     <Text style={styles.titleconent}>Sudent Name</Text>
     <Text style={styles.titleconent2}>Email:sdsdjsdjsdjs</Text>
      </View>
      <ListItems/>
      
      <BtnNavigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  titlearea:{
height:200,
backgroundColor:'blue',
  width:"100%"
  },
  titleconent:{
    color:"#fff",
    textAlign:"center",
fontSize:26,
marginTop:80
  },
  titleconent2:{
    color:"#fff",
    textAlign:"center",
fontSize:20,
  }
});

export default Home;
