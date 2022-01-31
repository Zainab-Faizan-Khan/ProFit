import React, { useState } from "react";
import { LogBox } from 'react-native';
import {
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  Image,
  Linking,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import firebase from '../firebase';
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function Feedback({ navigation }) {

LogBox.ignoreLogs(['Setting a timer']);

  const [fmail, setfmail] = useState("");
const [Feedback, setfeedback] = useState("");
function submitfeed(){
 firebase.db.collection('feedback').add({
              email:fmail,
              feedback: Feedback})
}

  return (
    <View style={{ backgroundColor: "#d7edf0", height: 2000 }}>
  <KeyboardAvoidingView behavior="position">
      <Image
        source={require("../assets/headerlogo.png")}
        style={{ height: 100, width: 150, marginTop: 40, marginLeft: 120 }}
      />
      <Text
        style={{
          
          marginLeft: 100,
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 44,
          color: "#598094",
        }}
      >
        CONNECT WITH US!
      </Text>
      <View>
        <View
          style={{
            height: 68,
            width: 70,
            marginLeft: wp("14%"),
            borderRadius: 140,
            backgroundColor: "grey",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://www.linkedin.com/in/alishba-arshad-211148179/"
              );
            }}
          >
            <Image
              source={require("../assets/alishba.jpg")}
              style={{
                height: 68,
                width: 70,

                borderRadius: 140,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 7,
              fontSize: 10,
              fontWeight: "bold",
              marginBottom: 44,
              fontStyle: "italic",
            }}
          >
            Alishba Arshad
          </Text>
        </View>
        <View
          style={{
            height: 68,
            width: 70,
            marginLeft: wp("42%"),
            marginTop: hp("-8.2%"),
            borderRadius: 140,
            backgroundColor: "grey",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://google.com");
            }}
          >
            <Image
              source={require("../assets/fizz.jpg")}
              style={{
                height: 68,
                width: 70,

                borderRadius: 140,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 7,
              fontSize: 10,
              fontWeight: "bold",
              marginBottom: 44,
              fontStyle: "italic",
            }}
          >
            Fizza Mariyam
          </Text>
        </View>
        <View
          style={{
            height: 68,
            width: 70,
            marginLeft: wp("70%"),
            marginTop: hp("-8.2%"),
            borderRadius: 140,
            backgroundColor: "grey",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://www.linkedin.com/in/zainab-faizan-khan-633679196/"
              );
            }}
          >
            <Image
              source={require("../assets/zainab.jpg")}
              style={{
                height: 68,
                width: 70,

                borderRadius: 140,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 7,
              fontSize: 10,
              fontWeight: "bold",
              marginBottom: 44,
              fontStyle: "italic",
            }}
          >
            Zainab Faizan
          </Text>
        </View>
        <View
          style={{
            height: 55,
            width: 230,
            marginLeft: wp("20%"),
            marginRight: wp("30%"),
            marginTop: hp("5%"),
            borderRadius: 30,
            backgroundColor: "#598094",
          }}
        >
<<<<<<< HEAD
          <TouchableOpacity  onPress={() =>
              Linking.openURL("https://profit-31897.web.app/home.html")
            }
=======
          <TouchableOpacity onPress={() => {
              Linking.openURL(
                "https://profit-31897.web.app/"
              );
            }}
>>>>>>> 9fc68388de480015e91a1c082f97b524e7e73464
          >
            <Text
            style={{
              marginTop:hp('2%'),
              fontSize: 20,
              
              fontStyle: "italic",
              color:"black",
              marginLeft:57
            }}
          >
            Need Help
          </Text>
          <Entypo name="help-with-circle" size={24} color="black" style={{
              marginTop:hp('-3%'),marginLeft:wp('43%')}}/>
          </TouchableOpacity>
          
        </View>
      </View>
   

      <View
        style={{
          height: hp("44%"),
          backgroundColor: "#adccdb",
          marginTop: hp("4%"),
          marginLeft: wp("14.5%"),
          marginRight: wp("14.5%"),
          borderRadius: 50,
          borderWidth: 6,
          borderColor: "#598094",
          borderTopLeftRadius: 3,
          borderTopWidth: 5,
          borderBottomWidth: 10,
          borderBottomEndRadius: 72,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            marginTop: 17,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Feedback
        </Text>
        <Text
          style={{
            fontSize: 14,
            marginTop: 12,
            textAlign: "center",
            fontStyle: "italic",
            color: "grey",
          }}
        >
          Leave a feedback and let us now your thoughts and queries about the
          app
        </Text>
      
          <View>
            <TextInput
              style={{
                marginTop: hp("3%"),
                marginLeft: wp("12%"),
                marginRight: wp("10%"),
                height: hp("4%"),
                borderColor: "#598094",
                
                borderTopRightRadius: 1,
                borderTopLeftRadius: 1,
                borderLeftColor: "transparent",
                borderBottomLeftRadius: 2,
                borderRadius: 19,
                borderWidth: 4,
              }}
              label="Email"
              value={fmail}
              onChangeText={(text) => setfmail(text)}
              mode="outlined"
              placeholder="  Enter Email"
            />
            <MaterialIcons
              name="email"
              size={28}
              color="#598094"
              style={{ marginTop: -29, marginLeft: 17 }}
            />
            <TextInput
              style={{
                marginTop: hp("3%"),
                marginLeft: wp("12%"),
                marginRight: wp("10%"),
                height: hp("10%"),
                borderColor: "#598094",

                borderTopRightRadius: 1,
                borderTopLeftRadius: 1,
                borderLeftColor: "transparent",
                borderBottomLeftRadius: 2,
                borderRadius: 19,
                borderWidth: 4,
              }}
              label="Email"
              multiline={true}
        numberOfLines={4} 
              value={Feedback}
              onChangeText={(text) => setfeedback(text)}
              mode="outlined"
              placeholder="  Enter Feedback"
            />
            <AntDesign name="message1"  size={28}
              color="#598094"
              style={{ marginTop: -49, marginLeft: 17 }} />
          </View>
           <View style={styles.styleBtn1}> 
            <TouchableOpacity onPress={()=>{submitfeed()}}><Text style={{fontSize:15,fontWeight:"bold"}}>Post!</Text></TouchableOpacity>
           </View>
          </View>
</KeyboardAvoidingView>
<View
        style={{
          height: 200,
          width: wp("100%"),
          backgroundColor: "#d7edf0",
          borderRadius: 80,

          borderLeftWidth: 20,
          borderRightWidth: 20,
          borderTopWidth: 5,
          marginBottom: 0,
          marginTop: hp("99%"),
          position: "absolute",
          borderColor: "#598094",
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
          size={30}
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
          size={30}
          color="black"
          style={{
            alignItems: "center",
            marginLeft: 273,
            marginTop: hp("-3.7%"),
          }}
          onPress={() => navigation.navigate("EA")}
        />
         
        
        
      </View>
     
    
    </View>
    
  );
}
const styles = StyleSheet.create({
  styleBtn1: {
    marginTop: 30,
    marginLeft: 150,
    width:80,
    alignItems:'center',
    height:40,
    borderWidth: 6,
    borderRadius: 10,
    borderColor: "#598094", //button background/border color
    overflow: "hidden",
    marginBottom: 20,
    color:"black",
    backgroundColor:'#d7edf0'
    
  }})