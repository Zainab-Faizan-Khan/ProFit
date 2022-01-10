import React from 'react';
import {StyleSheet, Button, Text, View,TextInput,Image } from 'react-native';

export default function FT({navigation}){
    return(
        <View style={{backgroundColor:'#d7edf0', height:2000}}>
         <Image source={require("../register/assetsregister/header.png")}  style={{ height:100, width: 150, marginTop:40,marginLeft:120}}/>
        <Text style={{marginTop:100,marginLeft:80, fontSize:25,fontWeight:'bold',marginBottom:70}}>What is your Height?</Text>
        <View style={styles.KG}>
            <Button title='Ft' color='#63d4dd'></Button>
        </View>
        <View style={styles.LB}>
            <Button title='Cm' color='#63d4dd'  onPress={()=>navigation.navigate('CM')}
             ></Button>
        </View>
        <View>
            <TextInput style={{ fontSize: 20 , marginTop:160,marginLeft:90,borderBottomColor: '#b7b6c1',  
                borderBottomWidth: 1,marginRight:240}}/>
            <Text style={{position:'absolute',marginLeft:180,marginTop:160, fontSize:18}}>ft</Text>
            <TextInput style={{ fontSize: 20 , marginTop:160,marginLeft:200,borderBottomColor: '#b7b6c1',  
                borderBottomWidth: 1,position:'absolute', marginRight:10}}/>
                <Text style={{position:'absolute',marginLeft:280,marginTop:160, fontSize:18}}>inch</Text>
        </View>
       
         <View style={styles.styleBtn1}>
          <Button
            color="#85bec5" //button color
             title="Next"
             onPress={()=>navigation.navigate('Fitness')}
           
          />
        </View>
            
       </View>
        
    );
}


const styles = StyleSheet.create({
    styleBtn1: {
      marginTop: 190,
      marginLeft: 30,
      marginRight: 30,
     
      borderRadius: 10,
      borderColor: "#86bac1", //button background/border color
      overflow: "hidden",
      marginBottom: 10,
    },
    KG:{
      width: 100,
      height:50,
      marginLeft:80,
      borderRadius:10,
      borderWidth: 2,
      borderColor: "#86bac1"
    },
    LB:{
        position:'absolute',
        width: 100,
        height:50,
        marginTop:344,
        marginLeft:226,
        borderRadius:10,
        borderWidth: 2,
        borderColor: "#86bac1"
      },
      fontkg:{
          position:'absolute',
          marginTop:130,
          marginLeft:70
      },
      fonttarget:{
        position:'absolute',
        marginTop:160,
        marginLeft:70
      }
})