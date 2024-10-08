import React,{useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import {
    View, TextInput,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    Platform,
    TouchableWithoutFeedback,
    Button,
    Keyboard,
  } from 'react-native';
function Login({ navigation }) {

  const [credential, setCredential]= useState('');
    function onLogin() {
   

    const data = {
      email: 'chamikara12345@gmail.com',
      password: '12345'
  };
  
  axios.post('http://student-api.acpt.lk/api/login', data)
      .then(response => {
        const token = response.data.token;

        // Store the token in AsyncStorage
        AsyncStorage.setItem('userToken', token);
       
        navigation.navigate('Home');  
          console.log(response.data);
      })
      .catch(err => {
          console.error(err);
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
          <Text style={styles.header}>Header</Text>
          <TextInput placeholder="Username"  onChangeText={text => setEmail(text)} style={styles.textInput} />
          <TextInput placeholder="Password" onChangeText={text => setPassword(text)} style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => onLogin()} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

    );
}
const styles = StyleSheet.create({
    container: {
   
    },
    inner: {
      padding: 24,
    
      justifyContent: 'space-around',
    },
    header: {
      fontSize: 36,
      marginBottom: 48,
    },
    textInput: {
      height: 40,
      borderColor: '#000000',
      borderBottomWidth: 1,
      marginBottom: 36,
    },
    btnContainer: {
      backgroundColor: 'white',
      marginTop: 12,
    },
  });
export default Login;