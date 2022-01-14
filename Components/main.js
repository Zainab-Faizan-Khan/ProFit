import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from '@expo/vector-icons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { MaterialIcons } from '@expo/vector-icons';

export default function Main({ navigation }) {
    
  return (
   
    <View style={{ backgroundColor: "#d7edf0", height: 2000 }}>
 

      <MaterialCommunityIcons
        name="face-profile"
        size={34}
        color="black"
        style={{ marginTop: 100, marginLeft: 350 }}
        onPress={() => navigation.navigate("pro")}
      />
      <Text
        style={{
          marginTop: 100,
          marginLeft: 33,
          position: "absolute",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        CHALLENGES
      </Text>
      <ScrollView horizontal={true} style={{ marginTop: -15 }}>
        <View
          style={{
            height: 180,
            width: 200,
            backgroundColor: "#d3a6d6",
            marginLeft: 20,
            borderRadius: 25,
            marginTop: 33,
          }}
        ></View>
        <View
          style={{
            height: 180,
            width: 200,
            backgroundColor: "#bed481",
            marginLeft: 20,
            borderRadius: 25,
            marginTop: 33,
          }}
        ></View>
        <View
          style={{
            height: 180,
            width: 200,
            backgroundColor: "#ea9296",
            marginLeft: 20,
            borderRadius: 25,
            marginRight: 20,
            marginTop: 33,
          }}
        ></View>
      </ScrollView>
      <View
        style={{
          height: 130,
          width: 370,
          backgroundColor: "#ea9296",
          marginLeft: 20,
          borderRadius: 25,
          marginRight: 20,
          marginTop: 355,
          position: "absolute",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Exercise1")}>
          <Image source={require("../assets/e1.jpg")} style={styles.i1} />
        </TouchableOpacity>
        <Text
          style={{
            position: "absolute",
            marginLeft: 30,
            color: "white",
            fontWeight: "bold",
            fontSize: 40,
          }}
        >
          BASIC
        </Text>
      </View>
      <View
        style={{
          height: 120,
          width: 370,
          backgroundColor: "#ea9296",
          marginLeft: 20,
          borderRadius: 25,
          marginRight: 20,
          marginTop: 508,
          position: "absolute",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Exercise2")}>
          <Image source={require("../assets/e2.jpg")} style={styles.i1} />
        </TouchableOpacity>
        <Text
          style={{
            position: "absolute",
            marginLeft: 30,
            color: "white",
            fontWeight: "bold",
            fontSize: 40,
          }}
        >
          INTERMEDIATE
        </Text>
      </View>

      <View
        style={{
          height: 120,
          width: 370,
          backgroundColor: "#ea9296",
          marginLeft: 20,
          borderRadius: 25,
          marginRight: 20,
          marginTop: 660,
          position: "absolute",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Exercise3")}>
          <Image source={require("../assets/e3.jpg")} style={styles.i1} />
        </TouchableOpacity>
        <Text
          style={{
            position: "absolute",
            marginLeft: 30,
            color: "white",
            fontWeight: "bold",
            fontSize: 36,
          }}
        >
          ADVANCE
        </Text>
      </View>
      <View
        style={{
          height: 200,
          width: wp('100%'),
          backgroundColor: "#ea9296",
          borderRadius: 25,
          borderTopRightRadius:120,
          borderTopLeftRadius:120,
          borderLeftWidth:10,
          borderRightWidth:10,
          marginBottom:0,
          marginTop: hp('99%'),
          position: "absolute",
        }}
      >
      <Entypo name="new-message" size={30} color="black"  style={{ alignItems:"center", marginLeft:105,marginTop:hp('2%')}}  onPress={()=>navigation.navigate('Feedback')} />
      <AntDesign name="home" size={30} color="black" style={{ alignItems:"center", marginLeft:175,marginTop:hp('-3.7%')}}  onPress={()=>navigation.navigate('Main')}/>
      <AntDesign name="book" size={30} color="black" style={{ alignItems:"center", marginLeft:245,marginTop:hp('-3.7%')}} onPress={()=>navigation.navigate('EA')}/>  
      </View> 
    
     
    </View>
  );
}

const styles = StyleSheet.create({
  i1: {
    height: 130,
    width: 370,
    borderRadius: 25,
    marginBottom: 50,
  },
});
