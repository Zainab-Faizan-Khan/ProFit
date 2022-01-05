import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, View,StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';


export default function Home({navigation}) {
    const edges = useSafeAreaInsets();

    return (
        
        <View style={{backgroundColor:'#d7edf0'}} >
       
        <Image source={require('../assets/girl.jpg')} 
             style={{marginTop:100, height:300, width: 500
        }}/>
        <Text style={{fontSize:25, paddingTop:75,paddingLeft:15,fontWeight:'bold'}}>Fitness AI</Text>
        <Text style={{fontSize:15, paddingTop:20,paddingLeft:15, color:'#929798'}}>A personalized training plan,built by your AI Coach. The AI optimizes set,reps and weight for each exercise every time you workout!</Text>
        <AntDesign style={{marginLeft:365, paddingTop:139, paddingBottom:19}}name="right" size={24} color="grey" onPress={()=>navigation.navigate('Start')}/>
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