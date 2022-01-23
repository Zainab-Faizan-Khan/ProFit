import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import User from "./User";
import { LogBox } from 'react-native';
import {
  Animated,
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Circle from "./circle";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Pro({ navigation }) {


LogBox.ignoreLogs(['Setting a timer']);
  return (
    <View style={{ backgroundColor: "#d7edf0", height: 1000 }}>
     
  
      <View
        style={{
          backgroundColor: "#598094",
          height: hp("38%"),
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 100,
          borderWidth: 13,
          borderColor: "#7aa0b4",
        }}
      >
        <Circle />
        <View
          style={{
            backgroundColor: "#7aa0b4",
            height: hp("38%"),
            width: wp("53%"),
            marginLeft: wp("38%"),
            marginTop: 30,
            alignItems: "center",
            position: "absolute",
          }}
        >
          <Text
            style={{
              marginTop: hp("8%"),
              fontSize: 20,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {User.getname()}
          </Text>
          <Text
            style={{
              marginTop: hp("2%"),
              fontSize: 18,
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            Get Fit
          </Text>
          <Text
            style={{
              marginTop: hp("2%"),
              fontSize: 18,
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            {User.getemail()}
          </Text>
        </View>

        <Ionicons
          name="ios-bookmark"
          size={30}
          color="black"
          style={{ marginLeft: 258, marginTop: 327, position: "absolute" }}
        />
      </View>
      <View
        style={{
          backgroundColor: "transparent",
          height: hp("8%"),
          width: wp("27%"),
          marginTop: hp("10%"),
          marginLeft: wp("6%"),
          borderWidth: 12,
          borderTopColor: "transparent",
          borderLeftColor: "transparent",
          borderBottomColor: "transparent",
          borderRightColor: "#7aa0b4",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
            color: "#25a0a3",
          }}
        >
          Height
        </Text>
        <Text
          style={{ textAlign: "center", fontSize: 13, fontStyle: "italic" }}
        >
          {User.getheight()}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "transparent",
          height: hp("8%"),
          width: wp("27%"),
          marginTop: hp("48%"),
          marginLeft: wp("37%"),
          position: "absolute",
          borderWidth: 12,
          borderTopColor: "transparent",
          borderLeftColor: "transparent",
          borderBottomColor: "transparent",
          borderRightColor: "#7aa0b4",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
            color: "#25a0a3",
          }}
        >
          Gender
        </Text>
        <Text
          style={{ textAlign: "center", fontSize: 13, fontStyle: "italic" }}
        >
          {User.getgender()}
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "transparent",
          height: hp("8%"),
          width: wp("27%"),
          marginTop: hp("-8%"),
          marginLeft: wp("68%"),
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
            color: "#25a0a3",
            marginTop: 10,
          }}
        >
          Weight
        </Text>
        <Text
          style={{ textAlign: "center", fontSize: 13, fontStyle: "italic" }}
        >
          {User.getcweight} KG
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#7aa0b4",
          height: hp("20%"),
          width: wp("100%"),
          borderRadius: 20,
          marginTop: 500,
          alignItems: "center",
          position: "absolute",
        }}
      ></View>
    </View>
  );
}
const styles = StyleSheet.create({});
