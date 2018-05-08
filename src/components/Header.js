import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
      <Text style = {{fontSize:40}}>
        {this.props.name}
      </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header:{
    backgroundColor:'#6A1B9A',
    alignItems:'center',

    borderBottomWidth:10,
    borderBottomColor:'#ddd',
  }
})
