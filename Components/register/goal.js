import React from 'react';
import {StyleSheet, Button, Text, View,TextInput, Image } from 'react-native';
import { Checkbox } from 'react-native-paper';


export default function Goal({navigation}){
    const [checked, setChecked] = React.useState(false);
    return(
        <View style={{backgroundColor:'#d7edf0', height:800}}>
        <Text style={{marginTop:70,marginLeft:76, fontSize:24,fontWeight:'bold',marginBottom:44}}>Please choose Your Goal</Text>
        
        <View style={{paddingLeft:60, backgroundColor:'#f6b1f0', height:100, paddingRight:100, borderRadius:30,marginTop:20}}>
            <Image source={require("./assetsregister/strong.jpg")} style={{width:100, height:100, marginLeft:205}}/>
            <Text style={{position:'absolute',marginLeft:60, marginTop:28, fontSize:20, fontStyle:'italic',fontWeight:'bold'}}>Get Stronger</Text>
            <Text style={{position:'absolute',marginLeft:60, marginTop:58, fontSize:10, fontStyle:'italic'}}>Touch up and get in better shape</Text>
            <View style={{ position:'absolute',marginTop:30, marginLeft:20}}>
            <Checkbox
            value="first"
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {

        setChecked(!checked);
      }}
      
    /></View>

        </View>
        <View style={{paddingLeft:60, backgroundColor:'#e0eca1', height:100, paddingRight:20, borderRadius:30,marginTop:20}}>
            <Image source={require("./assetsregister/weight.jpg")} style={{width:120, height:100, marginLeft:180}}/>
            <Text style={{position:'absolute',marginLeft:60, marginTop:28, fontSize:20, fontStyle:'italic',fontWeight:'bold'}}>Lose Weight</Text>
            <Text style={{position:'absolute',marginLeft:60, marginTop:58, fontSize:10, fontStyle:'italic'}}>Get lean fast& healthy </Text>
            <View style={{ position:'absolute',marginTop:30, marginLeft:20}}>
            <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
      
    /></View>
        </View>
        <View style={{paddingLeft:60, backgroundColor:'#d1cbe1', height:100, paddingRight:20, borderRadius:30,marginTop:20}}>
            <Image source={require("./assetsregister/fitt.jpg")} style={{width:140, height:80, marginLeft:205, marginTop:15}}/>
            <Text style={{position:'absolute',marginLeft:60, marginTop:28, fontSize:20, fontStyle:'italic',fontWeight:'bold'}}>Keep Fit</Text>
            <Text style={{position:'absolute',marginLeft:60, marginTop:58, fontSize:10, fontStyle:'italic'}}>Stay fit and healthy</Text>
            <View style={{ position:'absolute',marginTop:30, marginLeft:20}}>
            <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
      
    /></View>
        </View>
        
      
        <View style={styles.styleBtn1}>
          <Button
            color="#85bec5" //button color
             title="Next"
             onPress={()=>navigation.navigate('Main')}
             
             
          />
        </View>
       
        </View>
    );}

    const styles = StyleSheet.create({
        styleBtn1: {
          marginTop: 170,
          marginLeft: 30,
          marginRight: 30,
          borderWidth: 2,
          borderRadius: 10,
          borderColor: "#86bac1", //button background/border color
          overflow: "hidden",
          marginBottom: 10,
        }})