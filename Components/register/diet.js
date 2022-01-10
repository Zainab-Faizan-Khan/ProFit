import React from 'react';
import {StyleSheet, Button, Text, View,TextInput, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';


export default function Diet({navigation}){
    const [checked, setChecked] = React.useState('first');
    return(
        <View style={{backgroundColor:'#d7edf0', height:2000}}>
         <Image source={require("../register/assetsregister/header.png")}  style={{ height:100, width: 150, marginTop:40,marginLeft:120}}/>
        <Text style={{marginTop:30,marginLeft:76, fontSize:24,fontWeight:'bold',marginBottom:44}}>What is your diet type?</Text>
        
        <View style={{paddingLeft:60, backgroundColor:'#b9e36e', height:190, paddingRight:20, borderRadius:30}}>
            <Image source={require("./assetsregister/nonveg.jpg")} style={{width:180, height:140, marginTop:18, marginLeft:185}}/>
            <Text style={{position:'absolute',marginLeft:60, marginTop:28, fontSize:20, fontStyle:'italic',fontWeight:'bold'}}>STANDARD</Text>
            <Text style={{position:'absolute',marginLeft:70, marginTop:58, fontSize:10, fontStyle:'italic'}}>All kind of food</Text>
            <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
        style={styles.r1}  
      />
     
        </View>
        <View style={{paddingLeft:60, backgroundColor:'#b2ebf0', height:190, paddingRight:20, borderRadius:30, marginTop:70}}>
            <Image source={require("./assetsregister/veg.jpg")} style={{width:180, height:140, marginTop:10, marginLeft:-20}}/>
            <Text style={{position:'absolute',marginLeft:200, marginTop:30, fontSize:20, fontStyle:'italic',fontWeight:'bold'}}>VEGETARIAN</Text>
            <Text style={{position:'absolute',marginLeft:270, marginTop:60, fontSize:10, fontStyle:'italic'}}>Meat-free or Fish-free food</Text>
            <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
        style={styles.r1}  
      />
     
        </View>
        <View style={styles.styleBtn1}>
          <Button
            color="#85bec5" //button color
             title="Next"
             onPress={()=>navigation.navigate('Goal')}
          
             
          />
        </View>
       
        </View>
    );}

    const styles = StyleSheet.create({
        styleBtn1: {
          marginTop: 100,
          marginLeft: 30,
          marginRight: 30,
          borderWidth: 2,
          borderRadius: 10,
          borderColor: "#86bac1", //button background/border color
          overflow: "hidden",
          marginBottom: 10,
        },
    r1:{
        position:'absolute',
        marginTop:-30
    }})