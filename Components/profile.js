import React from 'react';
import {StyleSheet, Button, Text, View ,TextInput,Image} from 'react-native';
import Circle from './circle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function pro({navigation}){
    return(
        <View style={{ backgroundColor: "#d7edf0", height: 2000 }}>
        <View>
        <Circle/>
        </View>
         
    <Text style={{ marginTop:hp('36%'),fontSize:26,fontWeight:'bold',textAlign:'center'}}>ZAINAB FAIZAN KHAN</Text>
    <Text style={{ marginTop:hp('2%'),fontSize:18,textAlign:'center',fontStyle:"italic"}}>Goal</Text>

            
       </View> 
    );
}
const styles = StyleSheet.create({
  
})

