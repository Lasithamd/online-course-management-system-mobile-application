import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { TextInput, Button } from 'react-native-paper';
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,

  Keyboard, Image
} from 'react-native';
function Login({ navigation }) {

  const [credential, setCredential] = useState('');
   
  function onLogin() {
    const data = {
        email: 'jkjs@gmail.com',
        app_password: '478569'
    };

    axios.post('http://192.168.8.101:3000/user/mobile/login', data)
        .then(async (response) => {
            const token = response.data.token;
            const user = response.data.user;

            try {
             
                await AsyncStorage.setItem('userToken', token);
                await AsyncStorage.setItem('userData', JSON.stringify(user));

               
                navigation.navigate('Home');

                console.log(response.data);
            } catch (error) {
                console.error('Error saving data to AsyncStorage:', error);
            }
        })
        .catch((err) => {
            console.error('Login error:', err);
        });
}

  const [text, setText] = React.useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.logoText}>C M S</Text>

          <Text style={styles.slogon}>Course Management System</Text>
          <Text style={styles.header}>Student Login</Text>
          <TextInput label="Email" onChangeText={text => setEmail(text)} style={styles.textInput} mode="outlined" />
          <TextInput label="Password" onChangeText={text => setPassword(text)} style={styles.textInput} mode="outlined" />
          <View style={styles.btnContainer}>
            <Button style={styles.btn} mode="contained" onPress={onLogin} buttonColor={'#f39c12'}>
              Login
            </Button>
            
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

  );
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: "#00ade9", justifyContent: 'center'
  },
  image: {
    width: 50, height: 50,
    textAlign: 'center',

  },
  textInput:{
    borderColor:"#f39c12"
  },
 
  inner: {
    padding: 24,

    justifyContent: 'space-around',
  },
  logoText: {
    fontSize: 42,
    textAlign: "center",
    fontWeight: '800',
    color: 'white'
  },
  slogon: {
    color: 'white',
    textAlign: "center",
  },
  header: {
    color: 'white',
    textAlign: "center", fontSize: 24,
    marginTop: 90
  },
  btn: {
    marginTop: 5
  }
});
export default Login;