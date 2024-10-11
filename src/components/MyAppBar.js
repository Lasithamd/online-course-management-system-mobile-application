import * as React from 'react';
import { Appbar } from 'react-native-paper';
import {StyleSheet} from 'react-native'
const MyAppBar = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header style={styles.appbar}>
      <Appbar.Content title="C M S" />    
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};
const styles = StyleSheet.create({
    appbar: {
    backgroundColor: "#45aaf2", 
  }});
export default MyAppBar;