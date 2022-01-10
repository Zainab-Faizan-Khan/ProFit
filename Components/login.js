import React from 'react';
import {StyleSheet, Button, Text, View ,TextInput, Image, ImageBackground} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Login({navigation}){
    const [text, onChangeText] = React.useState();
    const [text1, onChangeText1] = React.useState();
    return(
       
        <View style={{backgroundColor:'black', height:1000}}>
         <ImageBackground source={require('../assets/login.jpg')} style={styles.image}>
        
         <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='Enter Email'
        placeholderTextColor="white"
    
      />
      <MaterialIcons name="email" size={24} color="white" style={{marginLeft:44, marginTop:-29}} />
       <TextInput
        style={styles.input1}
        onChangeText={onChangeText1}
        value={text1}
        placeholder='Enter Password'
        secureTextEntry={true}
        placeholderTextColor="white"
      />
      <AntDesign name="lock1" size={24} color="white" style={{marginLeft:44, marginTop:-29}}/>
      <Text style={{fontSize:14,color:'white',marginLeft:244,marginTop:10}}  onPress={()=>navigation.navigate('FP1')} >Forget Password?</Text>
       <View style={{marginTop:20, marginLeft:120,marginRight:120, borderRadius:10}}><Button title='LOGIN' color='#5fa0b8' onPress={()=>navigation.navigate('Main')}/></View>
       <Text style={{color:'white',marginTop:20,marginLeft:106,fontSize:17}}>Or Login With:</Text>
       <FontAwesome name="google-plus-circle" size={30} color="#ce3c35" style={{ marginLeft:220, marginTop:-24}} />
       <Entypo name="facebook-with-circle" size={30} color="#6fa4fd" style={{marginLeft:260, marginTop:-31}}/>
       <Text style={{color:'white',marginTop:20,marginLeft:100,fontSize:15}}>Not a Member?</Text>
       <Text style={{color:'white',marginLeft:210,fontSize:15, marginTop:-21,color:'#6fa4fd'}} onPress={()=>navigation.navigate('Name')}>Register Now!</Text>
      </ImageBackground>
     
        </View>
        
    );
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      marginLeft:70,
      marginTop:270,
      marginRight:40,
      borderWidth:1,
     borderRightColor:'white',
     borderBottomColor:'white',
     borderTopColor:'white',
     borderLeftColor:'black',
     borderTopLeftRadius:1,
     borderRadius:19,
     borderWidth:4,
      padding:4,  
    },
    input1: {
      height: 40,
      marginLeft:70,
      marginTop:40,
      marginRight:40,
      borderWidth:1,
      borderRightColor:'white',
     borderBottomColor:'white',
     borderTopColor:'white',
     borderLeftColor:'black',
     borderTopLeftRadius:0.7,
     borderRadius:19,
     borderWidth:4,
      padding:4,  
      
    },
    image: {
      flex: 1,
      justifyContent: "center",
      opacity:500,
      width:410,
      height:780,
      opacity:1.8,
      marginTop:40
      
    }
  });