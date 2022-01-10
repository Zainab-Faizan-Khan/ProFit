import React from 'react';
import {StyleSheet, Button, Text, View ,TextInput,Image} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'

export default function FP2({navigation}){
    const [text, onChangeText] = React.useState();
    
    return(
        <View style={{backgroundColor:'white', height:1200}}>
        <Image source={require("../assets/headerlogo.png")}  style={{ height:100, width: 150, marginTop:60, marginLeft:120}}/>
        
        <View style={{backgroundColor:'#adacce', marginTop:100, marginLeft:20, marginRight:20, borderRadius:18}}>
        <Text style={{marginTop:60,marginLeft:95, fontSize:24,fontWeight:'bold',marginBottom:44}}>OTP Verification</Text>
        <Text style={{marginLeft:85, marginTop:-40, fontSize:11, color:"grey"}}>Enter four digit OTP send on your email</Text>
        <View style={styles.container}>
     
    </View>


         <View style={styles.styleBtn1}>
          <Button
            color="#ce3c35" //button color
             title="Back"
             
             onPress={()=>navigation.navigate('FP2')}
             
          />
        </View>
        <View style={styles.styleBtn2}>
          <Button
            color="#5fa0b8" //button color
             title="Submit"
             onPress={()=>navigation.navigate('FP3')}
             
          />
        </View>
        </View>
        </View>
        
    );
}
const styles = StyleSheet.create({
    styleBtn1: {
      marginTop: 69,
      marginLeft: 20,
      marginRight: 200,
      borderWidth: 3,
      borderRadius: 10,
      borderColor: "black", //button background/border color
      overflow: "hidden",
      marginBottom: 20,
      
    },
    styleBtn2: {
        marginTop: -60,
        marginLeft: 200,
        marginRight: 20,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: "black", //button background/border color
        overflow: "hidden",
        marginBottom: 20,
      },
    input: {
        height: 40,
        marginLeft:135,
        marginTop:17,
        marginRight:175,
        borderLeftColor:'transparent',
        borderRightColor:'transparent',
        borderTopColor:'transparent',
       borderRadius:3,
       borderWidth:2,
        padding:4,  
    }
})