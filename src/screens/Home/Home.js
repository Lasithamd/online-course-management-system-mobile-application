import React from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { Button, View,Text } from 'react-native-paper';
import {  StyleSheet } from 'react-native';

function Home(){
    return(
      <View>
      <Text>Main Content</Text>
    </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // You can change this to your preferred background color
      },
      loadingText: {
        marginTop: 20,
        fontSize: 16,
      },
    });

export default Home;