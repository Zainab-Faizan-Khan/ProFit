import React from 'react';
import {StyleSheet, Button, Text, View,TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function KG({navigation}){
    return(
        <View style={{backgroundColor:'#d7edf0', height:800}}>
        <Text style={{marginTop:130,marginLeft:60, fontSize:25,fontWeight:'bold',marginBottom:70}}>How much do you weigh?</Text>
        <View style={styles.KG}>
            <Button title='KGs' color='#63d4dd'></Button>
        </View>
        <View style={styles.LB}>
            <Button title='LBs' color='#63d4dd'  onPress={()=>navigation.navigate('LB')}></Button>
        </View>
        <View >
        
            <Text style={{position:"absolute", fontSize:20, marginLeft:130, marginTop:90, fontStyle:"italic"}}>Current Weight:</Text>
            <FontAwesome5 name="weight" size={24} color="grey" style={styles.fontkg}/>
            <TextInput style={{ fontSize: 20 , marginTop:130,marginLeft:110,borderBottomColor: '#b7b6c1',  
                borderBottomWidth: 1,marginRight:110  }}      />
                <Text style={{position:"absolute", fontSize:15, marginLeft:300, marginTop:130}}>KG</Text>
        </View>
        <View >
        
        <Text style={{position:"absolute", fontSize:20, marginLeft:130, marginTop:110, fontStyle:"italic"}}>Target Weight:</Text>
        <Feather name="target" size={24} color="red" style={styles.fonttarget}/>
        <TextInput style={{ fontSize: 20 , marginTop:160,marginLeft:110,borderBottomColor: '#b7b6c1',  
            borderBottomWidth: 1,marginRight:110  }}      />
            <Text style={{position:"absolute", fontSize:15, marginLeft:300, marginTop:160}}>KG</Text>
    </View>
    <View style={styles.styleBtn1}>
          <Button
            color="#85bec5" //button color
             title="Next"
             onPress={()=>navigation.navigate('FT')}
             
          />
        </View>
            
       </View>
        
    );
}


const styles = StyleSheet.create({
    styleBtn1: {
      marginTop: 50,
      marginLeft: 30,
      marginRight: 30,
     
      borderRadius: 10,
      borderColor: "#86bac1", //button background/border color
      overflow: "hidden",
      marginBottom: 10,
    },
    KG:{
      width: 100,
      height:50,
      marginLeft:70,
      borderRadius:10,
      borderWidth: 2,
      borderColor: "#86bac1"
    },
    LB:{
        position:'absolute',
        width: 100,
        height:50,
        marginTop:234,
        marginLeft:226,
        borderRadius:10,
        borderWidth: 2,
        borderColor: "#86bac1"
      },
      fontkg:{
          position:'absolute',
          marginTop:130,
          marginLeft:70
      },
      fonttarget:{
        position:'absolute',
        marginTop:160,
        marginLeft:70
      }
})