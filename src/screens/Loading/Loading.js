// LoadingScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator, MD2Colors, Text } from 'react-native-paper';

const Loading = () => {
  return (
    <View>
      <ActivityIndicator animating={true} color={MD2Colors.white800} size={50} style={styles.middle} />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: "#00ade9",
    justifyContent: 'center',
    alignItems: 'center', // You can change this to your preferred background color
  },
  loadingText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: "center"
  },
  middle: {
    marginTop: "80%",

  },

});

export default Loading;
