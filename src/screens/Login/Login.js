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
  //     function onLogin() {


  //     const data = {
  //       email: 'chamikara12345@gmail.com',
  //       password: '12345'
  //   };

  //   axios.post('http://student-api.acpt.lk/api/login', data)
  //       .then(response => {
  //         const token = response.data.token;

  //         // Store the token in AsyncStorage
  //         AsyncStorage.setItem('userToken', token);

  //         navigation.navigate('Home');  
  //           console.log(response.data);
  //       })
  //       .catch(err => {
  //           console.error(err);
  //       });

  // }

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
            <Button style={styles.btn} mode="contained" onPress={() => console.log('Pressed')} buttonColor={'#f39c12'}>
              Login
            </Button>
            <Button onPress={() => onLogin()} />
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