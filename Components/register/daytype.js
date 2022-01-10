import React from 'react';
import {StyleSheet, Button, Text, View,TextInput, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function daytype({navigation}){
    const [checked, setChecked] = React.useState('first');
    return(
        <View style={{backgroundColor:'#d7edf0', height:2000}}>
         <Image source={require("../register/assetsregister/header.png")}  style={{ height:100, width: 150, marginTop:40,marginLeft:120}}/>
        <Text style={{marginTop:23,marginLeft:46, fontSize:20,fontWeight:'bold',marginBottom:44}}>What does your typical day look like?</Text>
        
        <View style={{paddingLeft:20}}>
            <Image source={require("./assetsregister/standing.jpg")} style={{width:170, height:230, borderWidth:2,borderColor:"black"}}/>
            <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}  
      />
      <Text style={{position:'absolute', paddingLeft:55, marginTop:240, fontSize:13, fontStyle:'italic'}}>Standing all day</Text>
        </View>
        <View style={{paddingLeft:220, marginTop:-30}}>
        <Image source={require("./assetsregister/sitting.jpg")} style={{width:170, height:230, borderWidth:2,borderColor:"black", position:"absolute", marginLeft:220, marginTop:-236}}/>
    
             <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}  
      />     
        </View>
        <Text style={{marginLeft:260,fontSize:13, fontStyle:'italic', marginTop:-29}}>Sitting all day</Text>
        <View style={{paddingLeft:20, marginTop:10}}>
            <Image source={require("./assetsregister/physical.jpg")} style={{width:170, height:230, borderWidth:2,borderColor:"black"}}/>
            <RadioButton
        value="third"
        status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('third')}  
      />
      <Text style={{position:'absolute', paddingLeft:55, marginTop:240, fontSize:13, fontStyle:'italic'}}>Some physical activity</Text>
        </View>
        <View style={{paddingLeft:220, marginTop:-30}}>
        <Image source={require("./assetsregister/walk.jpg")} style={{width:170, height:230, borderWidth:2,borderColor:"black", position:"absolute", marginLeft:220, marginTop:-234}}/>
    
             <RadioButton
        value="forth"
        status={ checked === 'forth' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('forth')}  
      />     
        </View>
        <Text style={{marginLeft:260,fontSize:13, fontStyle:'italic', marginTop:-29}}>Walking all day</Text>
        
        <View style={styles.styleBtn1}>
          <Button
            color="#85bec5" //button color
             title="Next"
             onPress={()=>navigation.navigate('Diet')}
             
          />
        </View>
        </View>
    );}


    const styles = StyleSheet.create({
        styleBtn1: {
          marginTop: 30,
          marginLeft: 30,
          marginRight: 30,
          borderWidth: 2,
          borderRadius: 10,
          borderColor: "#86bac1", //button background/border color
          overflow: "hidden",
          marginBottom: 10,
        },
        r2:{
            position:'absolute',
            marginLeft:260,
            marginTop:-26
        }
    })