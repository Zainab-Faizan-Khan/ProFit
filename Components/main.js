import React from 'react';
import {StyleSheet, Button, Text, View ,TextInput,SafeAreaView, ScrollView, Image,} from 'react-native';

export default function Main({navigation}){
    return(
        <View style={{backgroundColor:'#d7edf0', height:2000}}>
        <ScrollView horizontal={true} style={{marginTop:120}}>
        <Text style={{marginTop:5,marginLeft:33, position:"absolute", fontSize:20, fontWeight:'bold'}}>CHALLENGES</Text>
       <View style={{height:200, width:200,backgroundColor:'#d3a6d6', marginLeft:20, borderRadius:25, marginTop:33}}></View>
      <View style={{height:200, width:200,backgroundColor:'#bed481', marginLeft:20, borderRadius:25,marginTop:33}}></View>
      <View style={{height:200, width:200,backgroundColor:'#ea9296', marginLeft:20, borderRadius:25, marginRight:20,marginTop:33}}></View>
    </ScrollView>
    <View style={{height:130, width:370,backgroundColor:'#ea9296', marginLeft:20, borderRadius:25, marginRight:20,marginTop:380, position:'absolute'}}>
        <Image source={require("../assets/bicepcurl.jpg")} style={styles.i1}/>
    </View>
      <View style={{height:120, width:370,backgroundColor:'#ea9296', marginLeft:20, borderRadius:25, marginRight:20,marginTop:530, position:'absolute'}}>
      <Image source={require("../assets/squ.jpg")} style={styles.i1}/>
      <Text style={{position:'absolute', marginLeft:30, color:'white', fontWeight:'bold', fontSize:40}}>SQUATS</Text>
      </View>
     
      <View style={{height:120, width:370,backgroundColor:'#ea9296', marginLeft:20, borderRadius:25, marginRight:20,marginTop:680, position:'absolute'}}>
      <Image source={require("../assets/sp.jpg")} style={styles.i1}/>
      </View>
    
    </View>
    

    
        
    );
}


const styles = StyleSheet.create({
   i1:{
       height:130,
       width:370,
       borderRadius:25,
       marginBottom:50
      
   }
  });