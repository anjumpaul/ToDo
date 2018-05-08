import React ,{ Component } from 'react';
import { View,Text,Button,TextInput,FlatList,StyleSheet,ScrollView } from 'react-native';
import ToDoHome from './ToDoHome.js';
// const rows = [
//   {id: 0, text: 'tea'},
//   {id: 1, text: 'lunch'},
//   {id: 2, text: 'evening tea '},
//   {id: 3, text: 'email'},
//   {id: 4, text: 'task'},
//   {id: 5, text: 'fb'},
//   {id: 6, text: 'bill'},
//   {id: 7, text: 'snacks'},
//   {id: 8, text: 'tea'},
// ]
//
// const extractKey = ({id}) => id

export default class ToDo extends Component{


  // renderItem = ({item}) => {
  //   return (
  //     <View  style = {styles.row}>
  //       <Button
  //         title='Completed'
  //         color='#4CAF50'/>
  //     <Text style={{flex:1,fontSize:30,}}>
  //       {item.text}
  //     </Text>
  //     <Button
  //         title='Delete'
  //         color='#EF5350'/>
  //     </View>
  //   )
  // }
  constructor(props){
    super(props)
    this.state = { text : '',noteArray:[],}
  }
      addNote(){
        if(this.state.text){
          this.state.noteArray.push({
            'text':this.state.text
          });
          this.setState({noteArray:this.state.noteArray })
          this.setState({text:''})
        }
      }
      deleteNote(key){
        this.state.noteArray.splice(key,1);
        this.setState({noteArray:this.state.noteArray})
      }
      // completeNote(key){
      //   alert('completed');
      // }

  render(){

    let notes = this.state.noteArray.map((val,key)=>{
      return <ToDoHome key={key} keyval={key} val={val}
             deleteMethod={ () => this.deleteNote(key) }/>
             // completeMethod={ () =>this.completeNote(key) }/>
    });

    return(
      <View>
        <View>
        <View style={{flexDirection:"row"}}>
        <TextInput style={{flex:1,color:'black',fontSize:30}}
          placeholder="write ToDo"
          underlineColorAndroid='transparent'
          onChangeText = {(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button onPress={ this.addNote.bind(this) } style={{Height:90,Width:90,borderRadius:50}}
          title='+'
        color='#4CAF50'/>
        </View>
        </View>
          <ScrollView >
            {notes}
          </ScrollView>
        </View>

      );
    }
  }
