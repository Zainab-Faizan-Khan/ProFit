import React, { useState } from "react";
import User from "./User";
import { LogBox } from "react-native";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import * as Google from "expo-google-app-auth";
import firebase from "../firebase";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Facebook from "expo-facebook";
import { Validator } from "email-validator";
import * as Yup from "yup";

export default function Login({ navigation }) {
LogBox.ignoreLogs(['Setting a timer']);
LogBox.ignoreLogs(['Each child in a list']);
  const [signinvalid, setsigninvalid] = React.useState(false);
  const [accessToken, setAccessToken] = React.useState();
  const [userInfo, setUserInfo] = React.useState();

  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().required("An email is required").email(),
    password: Yup.string()
      .required()
      .min(8, "Your password should have at least 8 characters"),
  });

  async function logInfb() {
    try {
      await Facebook.initializeAsync({
        appId: "678701643508758",
      });
      const { type, token, expirationDate, permissions, declinedPermissions } =
        await Facebook.logInWithReadPermissionsAsync({
          permissions: ["public_profile","email"],
        });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email`
        );
          firebase.db.collection('users').where("email",'==',(await response.json()).email).get().then(snapshot=>{snapshot.forEach(doc=>{

        if(doc){
        User.setname(doc.data().username)
                User.setemail(doc.data().email)
                User.setcweight(doc.data().currentweight)
                User.setgweight(doc.data.goalweight)
                User.setgoal(doc.data().goal)
                User.setdiet(doc.data().diet)
                User.setheight(doc.data().height)
                User.setgender(doc.data().gender)
                User.setimg(doc.data().img)
                User.setid(doc.id)
                
        var g=""
        var r=[]
        if(User.getgoal()=="strong"){g="strong"}
        else if(User.getgoal()=="loose"){g="loose"}
        else{g="maintain"}
        firebase.db.collection(g).onSnapshot((snapshot)=>{snapshot.forEach(doc=>{

const title=doc.data().title
const img=doc.data().img

r.push([title,img])
})})
User.setrecommend(r)
        navigation.navigate("Main");
        setsigninvalid(false);
        }
        else{setsigninvalid(true);}
        })})
        
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      setsigninvalid(true);
    }
  }

  const onlogin = async (email, password) => {
    try {
      await firebase.auth.signInWithEmailAndPassword(email, password);
      console.log("login successful");


          firebase.db.collection('users').where("email",'==',email).get().then(snapshot=>{snapshot.forEach(doc=>{


        User.setname(doc.data().username)
                User.setemail(doc.data().email)
                User.setcweight(doc.data().currentweight)
                User.setgweight(doc.data.goalweight)
                User.setgoal(doc.data().goal)
                User.setdiet(doc.data().diet)
                User.setheight(doc.data().height)
User.setimg(doc.data().img)
                User.setid(doc.id)
                User.setgender(doc.data().gender)
        var g=""
        var r=[]
        if(User.getgoal()=="strong"){g="strong"}
        else if(User.getgoal()=="loose"){g="loose"}
        else{g="maintain"}
        firebase.db.collection(g).onSnapshot((snapshot)=>{snapshot.forEach(doc=>{

const title=doc.data().title
const img=doc.data().img

r.push([title,img])
})})
User.setrecommend(r)
        navigation.navigate("Main");
})})

      
      setsigninvalid(false);
    } catch (error) {
      console.log(error.message);
      setsigninvalid(true);
      () => {
        values.email = "";
        values.password = "";
      };
    }
  };

  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "862506039811-3q77chkks5fo5mj4c1ab2c688uul09rg.apps.googleusercontent.com",
        iosClientId: "",
        scopes: ["profile", "email"],
      });
      if (result.type === "success") {

 firebase.db.collection('users').where("email",'==',result.user.email).get().then(snapshot=>{snapshot.forEach(doc=>{
if(doc){

        User.setname(doc.data().username)
                User.setemail(doc.data().email)
                User.setcweight(doc.data().currentweight)
                User.setgweight(doc.data.goalweight)
                User.setgoal(doc.data().goal)
User.setimg(doc.data().img)
                User.setid(doc.id)
                User.setdiet(doc.data().diet)
                User.setheight(doc.data().height)
                User.setgender(doc.data().gender)
        var g=""
        var r=[]
        if(User.getgoal()=="strong"){g="strong"}
        else if(User.getgoal()=="loose"){g="loose"}
        else{g="maintain"}
        firebase.db.collection(g).onSnapshot((snapshot)=>{snapshot.forEach(doc=>{

const title=doc.data().title
const img=doc.data().img

r.push([title,img])
})})
User.setrecommend(r)
        navigation.navigate("Main");}
else{ setsigninvalid(true)
}
})})

        
        setsigninvalid(false);
      } else {
        console.log("permission denied");
        setsigninvalid(true);
      }
    } catch (error) {
      console.log(error);
      navigation.navigate("Login");
      setsigninvalid(true);
    }
  }

  async function getUserData() {
    let userInfoResponse = await fetch(
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    console.log((await userInfoResponse.json()))
  }

  

  return (
    <View style={{ backgroundColor: "black", height: 1000 }}>
      <ImageBackground
        source={require("../assets/login.jpg")}
        style={styles.image}
      >
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values.email, values.password);
            onlogin(values.email, values.password);
          }}
          validationSchema={LoginFormSchema}
          validateOnMount={true}
        >
          {({ handleChange, handleSubmit, values, isValid }) => (
            <>
              <KeyboardAvoidingView behavior="position">
                {signinvalid && (
                  <Text
                    style={{
                      position: "absolute",
                      marginTop: 235,
                      marginLeft: 95,
                      color: "red",
                      fontSize: 15,
                    }}
                  >
                    Please provide valid credentials
                  </Text>
                )}
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("email")}
                  value={values.email}
                  placeholder="Enter Email"
                  placeholderTextColor="white"
                  keyboardType="email-address"
                />
                <MaterialIcons
                  name="email"
                  size={24}
                  color="white"
                  style={{ marginLeft: 44, marginTop: -29 }}
                />
                <TextInput
                  style={styles.input1}
                  onChangeText={handleChange("password")}
                  value={values.password}
                  placeholder="Enter Password"
                  secureTextEntry={true}
                  placeholderTextColor="white"
                />
                <AntDesign
                  name="lock1"
                  size={24}
                  color="white"
                  style={{ marginLeft: 44, marginTop: -29 }}
                />
                <Text
                  style={{
                    fontSize: 14,
                    color: "white",
                    marginLeft: 244,
                    marginTop: 10,
                  }}
                  onPress={() => navigation.navigate("FP1")}
                >
                  Forget Password?
                </Text>

                <View style={styles.su}>
                  <Button
                    title="LOGIN"
                    color="#5fa0b8"
                    onPress={handleSubmit}
                  />
                </View>

                <Text
                  style={{
                    color: "white",
                    marginTop: 20,
                    marginLeft: 106,
                    fontSize: 17,
                  }}
                >
                  Or Login With:
                </Text>

                <FontAwesome
                  name="google-plus-circle"
                  size={30}
                  color="#ce3c35"
                  style={{ marginLeft: 230, marginTop: -24 }}
                  onPress={signInWithGoogleAsync}
                />

                <Entypo
                  name="facebook-with-circle"
                  size={29}
                  color="#6fa4fd"
                  style={{ marginLeft: 270, marginTop: -31 }}
                  onPress={logInfb}
                />

                <Text
                  style={{
                    color: "white",
                    marginTop: 20,
                    marginLeft: 100,
                    fontSize: 15,
                  }}
                >
                  Not a Member?
                </Text>

                <Text
                  style={{
                    color: "white",
                    marginLeft: 210,
                    fontSize: 15,
                    marginTop: -21,
                    color: "#6fa4fd",
                  }}
                  onPress={() => navigation.navigate("SignUp")}
                >
                  Register Now!
                </Text>
              </KeyboardAvoidingView>
            </>
          )}
        </Formik>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  submitbtn: {
    marginTop: 20,
    marginLeft: 120,
    marginRight: 120,
    borderRadius: 10,
  },
  su: {
    marginTop: 25,
    marginLeft: 95,
    marginRight: 90,
    borderRadius: 50,
  },
  input: {
    height: 40,
    marginLeft: 70,
    marginTop: 270,
    marginRight: 40,
    borderWidth: 1,
    borderRightColor: "white",
    borderBottomColor: "white",
    borderTopColor: "white",
    borderLeftColor: "black",
    borderTopLeftRadius: 1,
    borderRadius: 19,
    borderWidth: 4,
    color: "white",
    padding: 4,
  },
  input1: {
    height: 40,
    marginLeft: 70,
    marginTop: 40,
    marginRight: 40,
    color: "white",
    borderWidth: 1,
    borderRightColor: "white",
    borderBottomColor: "white",
    borderTopColor: "white",
    borderLeftColor: "black",
    borderTopLeftRadius: 0.7,
    borderRadius: 19,
    borderWidth: 4,
    padding: 4,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    opacity: 500,
    width: 410,
    height: 780,
    opacity: 1.8,
    marginTop: 40,
  },
});
