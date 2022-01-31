import React , {useState , Component} from 'react';
import {StyleSheet, Button, Text, View ,TextInput,Image , Linking, Alert} from 'react-native';
import qs from 'qs';
import firebase from '../firebase';



export default function FP1({navigation}){

/*async function sendEmail(to,subject,body){
let url = `mailto:${to}`;

    // Create email link query
    const query = qs.stringify({
        subject: subject,
        body: body,
    });

    if (query.length) {
        url += `?${query}`;
    }
    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
        Alert.alert('Provided URL can not be handled');
    }

    return Linking.openURL(url);
}
*/ 
 
    const [otpaddress,setotpaddress]=React.useState(null)
   
  function GenerateRandomNumber()
{

 

if (otpaddress==null){Alert.alert('Enter your email address')}
else{

navigation.navigate('Login')


firebase.auth.sendPasswordResetEmail(otpaddress).then(()=>{navigation.navigate('Login')})
.catch((err)=>{})

  
}


}

 
    const [textmail, onChangeText] = React.useState();
    return(
        <View style={{backgroundColor:'white', height:1200}}>
        <Image source={require("../assets/headerlogo.png")}  style={{ height:100, width: 150, marginTop:60, marginLeft:120}}/>
        
        <View style={{backgroundColor:'#d7edf0', marginTop:100, marginLeft:20, marginRight:20, borderRadius:18}}>
        <Text style={{marginTop:60,marginLeft:76, fontSize:24,fontWeight:'bold',marginBottom:44}}>Forget Password?</Text>
        <Text style={{marginLeft:75, marginTop:-40, fontSize:9, color:"grey"}}>Enter your email address below to reset your Password</Text>
        <TextInput
        style={styles.input}
        onChangeText={setotpaddress}
        value={otpaddress}
        placeholder='Enter Email'
        placeholderTextColor="black"
    
      />

         <View style={styles.styleBtn1}>
          <Button
            color="#ce3c35" //button color
             title="Back"
             
             onPress={()=>navigation.navigate('Login')}
             
          />
        </View>
        <View style={styles.styleBtn2}>
          <Button
            color="#5fa0b8" //button color
             title="Send"
             onPress={ GenerateRandomNumber }
             
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
        marginLeft:55,
        marginTop:20,
        marginRight:55,
        borderLeftColor:'transparent',
        borderRightColor:'transparent',
        borderTopColor:'transparent',
       borderRadius:3,
       borderWidth:2,
        padding:4,  
      }
})