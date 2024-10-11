// LoadingScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator, MD2Colors, Text } from 'react-native-paper';

const Loading = () => {
  return (
    <View>
      <ActivityIndicator animating={true} color={MD2Colors.blue400} size={50} style={styles.middle} />
      <Text style={styles.logoext}>C M S</Text>
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: "#1112",
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
  logoext: {
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center"
  }
});
export default Loading;
