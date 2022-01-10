import React from 'react';
import {StyleSheet, Button, Text, View ,TextInput,Image} from 'react-native';

export default function Name({navigation}){
    return(
        <View style={{backgroundColor:'white', height:1200}}>
         <Image source={require("../register/assetsregister/header.png")}  style={{ height:100, width: 150, marginTop:40,marginLeft:120}}/>
        <Text style={{marginTop:70,marginLeft:76, fontSize:24,fontWeight:'bold',marginBottom:44}}>Please Enter Your Details</Text>
        <Text style={{marginTop:80,marginLeft:27, fontSize:20,fontWeight:'bold'}}>Name:</Text>
        <TextInput style={{ fontSize: 20 , marginTop:-32,marginLeft:150,borderBottomColor: 'grey',  
                borderBottomWidth:2, marginRight:28 }}      
                    />
           <Text style={{marginTop:40,marginLeft:27, fontSize:20,fontWeight:'bold'}}>Email:</Text>
        <TextInput style={{ fontSize: 20 , marginTop:-32,marginLeft:150,borderBottomColor: 'grey',  
                borderBottomWidth:2, marginRight:28 }}      
                    />
           <Text style={{marginTop:40,marginLeft:27, fontSize:20,fontWeight:'bold'}}>UserName:</Text>
        <TextInput style={{ fontSize: 20 , marginTop:-32,marginLeft:150,borderBottomColor: 'grey',  
                borderBottomWidth:2, marginRight:28 }}      
                    />
         <Text style={{marginTop:40,marginLeft:27, fontSize:20,fontWeight:'bold'}}>Password:</Text>
        <TextInput style={{ fontSize: 20 , marginTop:-32,marginLeft:150,borderBottomColor: 'grey',  
                borderBottomWidth:2, marginRight:28 }}      
                    />
         <View style={styles.styleBtn1}>
          <Button
            color="#85bec5" //button color
             title="Next"
             onPress={()=>navigation.navigate('Gender')}
             
          />
        </View>
        </View>
        
    );
}
const styles = StyleSheet.create({
    styleBtn1: {
      marginTop: 200,
      marginLeft: 30,
      marginRight: 30,
      borderWidth: 2,
      borderRadius: 10,
      borderColor: "#86bac1", //button background/border color
      overflow: "hidden",
      marginBottom: 10,
    },
})