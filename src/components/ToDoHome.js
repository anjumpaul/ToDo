import React ,{ Component } from 'react';
import { View,Text,Button,StyleSheet,TouchableOpacity} from 'react-native';

export default class ToDoHome extends Component{
  constructor(){
    super()
    this.state={color:'green',textBackgroundColor:'yellow'}
  }
  render(){
    return(

      <View key={this.props.keyval} style={{flexDirection:'row'}}>
        <Button onPress={()=>this.setState({color:'red',textBackgroundColor:'red'})}
            title='Completed'
            color={this.state.color}/>
      <Text style={{flex:1,fontSize:30,backgroundColor:this.state.textBackgroundColor}}>{this.props.val.text}</Text>
      <Button onPress={this.props.deleteMethod}
            title='Delete'
            color='#EF5350'/>

      </View>

    );
  }
}
