// LoadingScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';

const Loading = () => {
  return (
    <View>
    <ActivityIndicator animating={true} />
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

export default Loading;
