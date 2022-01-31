import React , {useState} from "react";
import firebase from "../firebase";
import { LogBox } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,TouchableOpacity ,
  Image,
  FlatList,
} from "react-native";
import ExcersiseStore from "./ExcersiseStore";
import User from "./User";



export default function Detail({navigation}){
LogBox.ignoreLogs(['Setting a timer']);
const [no,setno]=React.useState()
const [ok,setok]=React.useState(false)
const [done,setdone]=React.useState(false)
const [a,seta]=React.useState(false)
function generateNumber(){

var RandomNumber = Math.floor(Math.random() * 100) + 1 ;
setno(RandomNumber)
setok(true)



}

function start(){


async()=>{
await firebase.db.collection('Logs').add({
code:no,
email:ExcersiseStore.getemail(),
date:ExcersiseStore.getdate(),
img:ExcersiseStore.getimg(),
reps:ExcersiseStore.getreps(),
title:ExcersiseStore.gettitle()



})}










setdone(true)
}

return(
<>

<View style={{backgroundColor:"#d7edf0", height: hp("110%"),
          width: wp("100%"),textAlign:'center',justifyContent:'center'}}>
<Image source={require("../assets/headerlogo.png")}  style={{ height:100, width: 200, marginTop:-120,marginLeft:90,marginBottom:90}}/>
<View style={{borderRadius:25,marginLeft:15,marginRight:15,alignItems:'center',backgroundColor:"#25a0af"}}>
<View style={{display:'flex',flexDirection:'row',marginBottom:20,marginTop:20}}>
<Text style={{fontSize:17}}>Email:</Text><Text style={{fontSize:17,marginLeft:5}}>{ExcersiseStore.getemail()}</Text>
</View>

<View style={{display:'flex',flexDirection:'row',marginBottom:20}}>
<Text style={{fontSize:17}}>Excersise:</Text><Text style={{fontSize:17,marginLeft:5}}>{ExcersiseStore.gettitle()}</Text>
</View>
{!ok &&
<>

<Text style={{fontSize:15,marginBottom:2}}>What are you waiting for ? </Text>
<Text style={{fontSize:15,marginBottom:20}}> Click below to generate Code </Text>
<View style={{width:120,height:80}}>
<Button title="Get Code" onPress={()=>{generateNumber()}}></Button></View>
</>
}
{ok &&
<>
<View style={{display:'flex',flexDirection:'row',marginBottom:20}}>
<Text style={{fontSize:17}}>Code:</Text><Text style={{fontSize:17,marginLeft:5}}>{no}</Text>
</View>
{!done &&
<View style={{width:120,height:80}}>
<Button title="Lets Start!"  onPress={()=>{start()}} ></Button></View>}

</>
}
{done &&
<>

<Text style={{fontSize:15,marginBottom:2}}>Visit the below site and enter your code for Virtual Trainer </Text>

<TouchableOpacity onPress={() => {
              Linking.openURL(
                "https://www.linkedin.com/in/alishba-arshad-211148179/"
              );
            }}>
<Text style={{fontSize:15,marginBottom:20}}> https://finalpf.herokuapp.com/ </Text>
</TouchableOpacity>


</>
}
</View>
<View style={{width:180,height:80,marginLeft:110,marginTop:40}}>
<Button title="Return to Home"  onPress={()=>{navigation.navigate('Main')}} ></Button></View>

</View>

</>

)


}