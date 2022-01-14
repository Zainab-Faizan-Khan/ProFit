import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Button, Image, Text, View ,TouchableOpacity} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Start({navigation}) {

    const edges = useSafeAreaInsets();

    return (
      
        <View style={{backgroundColor:'white',height:1000}}>
        <Image source={require("../assets/headerlogo.png")}  style={{ height:100, width: 150, marginTop:hp('1%')}}/>
        <Image source={require('../assets/guy.jpg')} 
             style={{marginTop:hp('2'), height:hp('60'), width:wp('100%')
        }}/>
        <Text style={{fontSize:wp('5%'),fontWeight:'bold'}}>The Ultimate Diet Plan</Text>
        <Text style={{fontSize:15,paddingTop:24,paddingLeft:15, color:'#929798'}}>ProFit serves as a resuorse and highlight the nutrient rich food that one should incorporate in their daily gym diet plan</Text>
        <View style={styles.styleBtn1}>
          <Button
            color="#85bec5" //button color
             title="Get Started"
             onPress={()=>navigation.navigate('SignUp')}
          />
        </View>
        <View  style={styles.styleBtn2}>
        <Button title='I already have an account!'
         onPress={()=>navigation.navigate('Login')}
         color='#85bec5'
      />
        
      </View>
        </View>
    );
}
const styles = StyleSheet.create({
    styleBtn1: {
      marginTop: hp('1'),
      marginLeft: 30,
      marginRight: 30,
      borderWidth: 2,
      borderRadius: 10,
      borderColor: "#86bac1", //button background/border color
      overflow: "hidden",
      marginBottom: 10,
    },
    styleBtn2: {
        
      marginTop: 12,
      marginLeft: 30,
      marginRight: 30,
      borderWidth: 2,
      borderRadius: 10,
      borderColor: "#86bac1", //button background/border color
      overflow: "hidden",
      marginBottom: 10,
      },
      styleBtn2TEXT:{
             textAlign:'center',
             alignItems:'center'
      }
  });
