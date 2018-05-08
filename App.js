import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header.js';
import ToDo from './src/components/ToDo.js';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header name = 'ToDo-App' />
        <ToDo/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F06292',
  },
});
