import React from 'react';
import {StyleSheet, Button, Text, View ,TextInput} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Login({navigation}){
    const [text, onChangeText] = React.useState();
    return(
        <View style={{backgroundColor:'#d7edf0', height:800}}>
        <Text style={{marginTop:100,marginLeft:150, fontSize:40,fontWeight:'bold'}}>LOGIN</Text>
       <Text style={{marginLeft:70, marginTop:80}}>Email:</Text>
       <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='Enter Email'
      />
       <Text style={{marginLeft:70, marginTop:20}}>Password:</Text>
       <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='Enter Email'
      />
      <Text style={{marginTop:10, marginLeft:270, fontSize:11}}>Forget Password?</Text>
      <View style={{marginTop:80, width:120,marginLeft:140,borderRadius:5}}>
          <Button title='Login'  onPress={()=>navigation.navigate('Main')} color='#80e5d9'/> 
      </View>
      <Text style={{marginTop:80, marginLeft:150}}>Or Sign Up using</Text>
      
      <View style={{marginTop:20, width:150,marginLeft:130,borderRadius:5}}>
      
          <Button title='Google Account'  onPress={()=>navigation.navigate('Main')} color='#d03519'/> 
      </View>
     
        </View>
        
    );
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      marginLeft:70,
      marginTop:10,
      marginRight:50,
      borderWidth:2,
      padding: 5
      
    },
  });