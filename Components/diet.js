import React from 'react';
import { View ,Text} from 'react-native-animatable';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
export default function Diet({navigation}) {

    return(<View style={{backgroundColor:'white',height:2000}}>
 <Text style={{fontSize:107,fontWeight:'bold', marginLeft:20,marginTop:90}}>DIET PLAN</Text>
 
 <View
        style={{
          height: 200,
          width: wp('100%'),
          backgroundColor: "#d7edf0",
          borderRadius: 80,
          
          borderLeftWidth:20,
          borderRightWidth:20,
          borderTopWidth:5,
          marginBottom:0,
          marginTop: hp('99%'),
          position: "absolute",
          borderColor:'#598094'
        }}
      >
       <MaterialIcons
          name="no-meals"
          size={30}
          color="black"
          style={{
            alignItems: "center",
            marginLeft: 73,
            marginTop: hp("0.7%"),
          }}
          onPress={() => navigation.navigate("Diet")}
        />
        <Entypo
          name="new-message"
          size={30}
          color="black"
          style={{ alignItems: "center", marginLeft: 140, marginTop: hp("-4%") }}
          onPress={() => navigation.navigate("Feedback")}
        />
        <AntDesign
          name="home"
          size={33}
          color="black"
          style={{
            alignItems: "center",
            marginLeft: 205,
            marginTop: hp("-4%"),
          }}
          onPress={() => navigation.navigate("Main")}
        />
        <AntDesign
          name="book"
          size={33}
          color="black"
          style={{
            alignItems: "center",
            marginLeft: 273,
            marginTop: hp("-4%"),
          }}
          onPress={() => navigation.navigate("EA")}
        />
      </View> 

    </View>
    );}