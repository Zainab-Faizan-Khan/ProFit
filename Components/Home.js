import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, View,StyleSheet, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Home({navigation}) {
    const edges = useSafeAreaInsets();
    const {widthPercentageToDP, heightPercentageToDP} = Dimensions.get('screen');
    return (
        
        <View style={{backgroundColor:'white', flex:1}} >
        <Image source={require("../assets/headerlogo.png")}  style={{width: wp(25),
        height: hp(15),marginLeft:10}}/>
        <Image source={require('../assets/girl.jpg')} 
             style={{ width: wp(100),
        height: hp(40), marginTop:hp('5%')
        }}/>
        <Text style={{fontSize:wp('7%'),fontWeight:'bold'}}>Fitness AI</Text>
        <Text style={{fontSize:wp('4%') ,color:'#929798'}}>A personalized training plan,built by your AI Coach. The AI optimizes set,reps and weight for each exercise every time you workout!</Text>
        <View>
        <AntDesign style={{ marginLeft:wp('90%'),paddingTop:89}}name="right" size={24} color="grey" onPress={()=>navigation.navigate('Start')}/></View>
        </View>
    );
}
const styles = StyleSheet.create({
    buttonStyle: {
        color: 'red',
        marginTop: 20,
        padding: 20,
    }
});