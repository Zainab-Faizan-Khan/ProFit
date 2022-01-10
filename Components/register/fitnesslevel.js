import React from 'react';
import {StyleSheet, Button, Text, View,Image } from 'react-native';
import Slider from '@react-native-community/slider';
export default function Fitness({navigation}){
    return(
        <View style={{backgroundColor:'#d7edf0', height:2000}}>
         <Image source={require("../register/assetsregister/header.png")}  style={{ height:100, width: 150, marginTop:40,marginLeft:120}}/>
        <Text style={{marginTop:70,marginLeft:65, fontSize:23,fontWeight:'bold',marginBottom:70}}>What is your Fitness level?</Text>
        <Text style={{marginTop:120,marginLeft:65,color:"grey", fontSize:15,marginBottom:70}}>Select an option that closely matches you</Text>
       <View style={{paddingLeft:48}}>
       <Text style={{position:'absolute',marginLeft:65}}>Poor</Text>
       <Text style={{position:'absolute',marginLeft:150}}>Fair</Text>
       <Text style={{position:'absolute',marginLeft:220}}>Good</Text>
      <Text style={{position:'absolute',marginLeft:300}}>Excellent</Text>
        <Slider
  style={{width: 330, height: 40, marginTop:10}}
  minimumValue={0}
  maximumValue={10}
  minimumTrackTintColor="#FFFFFF"
  maximumTrackTintColor="#000000"
/></View>
      <View style={styles.styleBtn1}>
          <Button
            color="#85bec5" //button color
             title="Next"
             onPress={()=>navigation.navigate('daytype')}
           
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
    }})