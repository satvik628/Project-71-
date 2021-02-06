import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import db from '../config.js';


export  default class WriteStory extends React.Component{
constructor(){
    super();
    this.state={
    title:'',
    author:'',
    story:'',
    }
}
submitStory = async()=>{
    db.collection('stories').add({
         author:this.state.author,
         title:this.state.title,
         story:this.state.story,
         storyType:"Submitted"
     });   
 }
render(){

    
   
    
    return(

        
   <View>

   
    <TextInput 
              style={{width:800,alignSelf:'center',height:40,borderRadius:140,textAlign:'center',marginTop:30,border:'solid'}}
              placeholder="Title"
              onChangeText={(text) => {
                this.setState({
                  title: text,
                });
              }}
              
              />

<TextInput 
              style={{width:800,alignSelf:'center',height:40,borderRadius:140,textAlign:'center',marginTop:10,border:'solid'}}
              placeholder="Author"
              onChangeText={(text) => {
                this.setState({
                  author: text,
                });
              }}
              />

<TextInput 
              style={{width:800,marginLeft:370,height:300,/*borderRadius:50,textAlign:'center',*/marginTop:10,border:'solid'}}
              placeholder="Story"
              multiline={true}
              onChangeText={(text) => {
                this.setState({
                  story: text,
                });
              }}
              
              />
              <TouchableOpacity 
               
              onPress={this.submitStory}
              >
                  <Text style={{marginTop:10,alignSelf:'center',width:200,backgroundColor:'black',color:'white',fontSize:18,borderRadius:20}}>              Publish</Text>
              </TouchableOpacity>
   </View>

    )
}

}