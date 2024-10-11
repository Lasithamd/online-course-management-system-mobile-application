// src/screens/Home/Home.js
import React,{useEffect, useState} from 'react';
import { View, Text, Button, StyleSheet,FlatList,TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import ListItems from '../../components/ListItem/ListItems'
import { blue100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

import BtnNavigation from '../../components/Navigation/BtnNavigation'
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'English',   decription:"sdsdsdsdsd",

  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Chines',   decription:"sdsdsdsdsd",
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'ICT',   decription:"sdsdsdsdsd",
  }, {
    id: '58694a0f-3da1-42471f-bd96-145571e29d72',
    title: 'ICT',   decription:"sdsdsdsdsd",
  }, {
    id: '58694a0f-3da1-4271f-bd96-145571e29d72',
    title: 'ICT',   decription:"sdsdsdsdsd",
  }, {
    id: '58694a0f-3da1-4471f-bd96-145571e29d72',
    title: 'ICT',
    decription:"sdsdsdsdsd",
  },
];
const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={(id)=>onPressList(item.id)} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
    <Text style={[styles.decription, {color: textColor}]}>{item.decription}</Text>
  </TouchableOpacity>
);
function Home({ navigation }) {

  const [data, setData] =useState('');
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
   
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
      <View style={styles.titlearea}>
     <Text style={styles.titleconent}>Sudent Name</Text>
     <Text style={styles.titleconent2}>Email:sdsdjsdjsdjs</Text>
      </View>
      <FlatList style={styles.titlearea}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
      
      <BtnNavigation />
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
  },
   item: {
    padding: 20,
   
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  titlearea:{
    width:"100%",
  }, item: {
    padding: 20,
   
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },

});

export default Home;
