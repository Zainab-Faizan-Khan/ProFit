import React, { useState ,useEffect} from "react";
import User from "./User";
import ExcersiseStore from "./ExcersiseStore";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,BackHandler
} from "react-native";
import firebase from '../firebase';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from '@expo/vector-icons';
import { LogBox } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { MaterialIcons } from '@expo/vector-icons';
import morn from "../assets/morn.png";
import after from "../assets/after.png";
import even from "../assets/even.png"
import night from "../assets/night.png"



export default function Main({ navigation }) {
LogBox.ignoreLogs(['Setting a timer']);
    LogBox.ignoreLogs(['Each child in a list']);

const [msg,setmsg]=React.useState()
const [erx,seterx]=React.useState([])

function getrand(min,max){
return Math.floor(Math.random()*(max-min+1))+min
}

function dateset(){
var d=new Date()
var da=`${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`
if(User.getdat()==da){



}
else{

r=getrand(0,6)
User.setfno(r)


firebase.db.collection('users').doc(User.getid()).update({
water:0,
fno:r,
cdate:da,
one:0,
two:User.getdates(0),
three:User.getdates(1),
four:User.getdates(2),
five:User.getdates(3),
six:User.getdates(4),
seven:User.getdates(5),
})
User.setdat(da)
User.setdates(0,0)
User.setfno(r)
User.setwater(0)
User.setdates(1,User.getdates(0))
User.setdates(2,User.getdates(1))
User.setdates(3,User.getdates(2))
User.setdates(4,User.getdates(3))
User.setdates(5,User.getdates(4))
User.setdates(6,User.getdates(5))
}
}

 function getexcersises (){ 
var er=[]

var e=[]
try{


    firebase.db.collectionGroup('Logs').onSnapshot((snapshot)=>{snapshot.forEach(doc=>{
if(doc.data().email==User.getemail()){
const title=doc.data().title
const img=doc.data().img
if(e.includes(doc.data().title)){}
else{
er.push([title,img])
e.push(title)
}
}

else{}
})

seterx(er);
if(!er.length){setmsg("You have no excersise at the moment")}

}); //TODO: add query if needed
 


 }catch(err){
  
 }

}

 
function begin(){
const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
ExcersiseStore.setemail(User.getemail())

ExcersiseStore.setdate(date)




navigation.navigate('Detail')

}










const [greetings,setgreetings]=React.useState()
const [i,seti]=React.useState()
useEffect(() => {


var hours = new Date().getHours();

if(hours<12 & hours>5 ){setgreetings("GOOD MORNING!");seti(morn)}
else if(hours<17 & hours>11 ){setgreetings("GOOD AFTERNOON!");seti(after)}
else if(hours<20 & hours>16 ){setgreetings("GOOD EVENING!");seti(even)}
else{setgreetings("GOOD NIGHT!");seti(night)}
dateset()
const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
      return () => backHandler.remove()

},[])
getexcersises()
  return (
   
    <View style={{ backgroundColor: "#d7edf0", height: 2000 }}>
 


      <MaterialCommunityIcons
        name="face-profile"
        size={34}
        color="black"
        style={{ marginTop: 100, marginLeft: 350 }}
        onPress={() => navigation.navigate("Sidenav")}
      />
<View style={{display:'flex',flexDirection:'row',marginTop: 80,
          marginLeft: 33,
          position: "absolute",}}>
<Text
        style={{
          marginRight:10,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {greetings}
      </Text>
 <Image source={i} style={{
            marginTop:-1,
            width:35,height:35
          }}></Image>


</View>
      <Text
        style={{
          marginTop: 102,
          marginLeft: 33,
          position: "absolute",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {User.getname()}
      </Text>
<ScrollView showsVerticalScrollIndicator={true} >
<View style={{height:2250}}>
<Text style={{fontSize:20,width: wp("100%"),textAlign:'center',marginTop:6,paddingTop:6,borderTopColor:'black',borderTopWidth:1}}>Your Exercises</Text>
<Text style={{fontSize:15,width: wp("100%"),textAlign:'center',marginTop:6,paddingTop:6}}>{msg}</Text>

<View style={{flexDirection:'row',marginLeft:5, alignItems:"flex-start"}}>
<ScrollView horizontal={true}>

{

erx.map(item=>( 
<View style={{backgroundColor:"red" ,height:180,width:180,flexDirection:'row',marginRight:10,borderRadius:20,overflow:'hidden' }}>
    <TouchableOpacity onPress={()=>{ExcersiseStore.setimg(item[1]);ExcersiseStore.settitle(item[0]);begin()}}>
      <Image source={{uri:item[1]} } style={{width:180,height:180}}></Image>
      <Text style={{paddingLeft:10,marginTop:140,position:'absolute',fontWeight:"300",color:'black',backgroundColor:'white',fontSize:18,width:180,paddingBottom:9,paddingTop:7}}>{item[0]}</Text>
    </TouchableOpacity>
</View>))

}
</ScrollView>
</View>


      <Text style={{fontSize:20,width: wp("100%"),textAlign:'center',marginTop:6,paddingTop:6,borderTopColor:'black',borderTopWidth:1,marginTop:9}}>Select by Category</Text>
      <View style={{flexDirection:"row",marginTop:5,justifyContent:"center" ,marginLeft:-10}}>
        <View style={{justifyContent:'center',alignItems:'center'}}><TouchableOpacity style={styles.op} onPress={()=>{User.setchoice("Arms");navigation.navigate('EA')}}><Image style={{height:70,width:70}} source={{uri:"https://tse2.mm.bing.net/th?id=OIP.AKljJEmMUJOgX5hlUU8OKAHaEG&pid=Api&P=0&w=321&h=177"} } resizeMode='stretch'></Image></TouchableOpacity><Text >Arms</Text></View>

        <View style={{justifyContent:'center',alignItems:'center'}}><TouchableOpacity style={styles.op} onPress={()=>{User.setchoice("Legs");navigation.navigate('EA')}}><Image style={{height:70,width:70}} source={{uri:"https://tse3.mm.bing.net/th?id=OIP.avNDsChtXFxlwuAd3HoBDQHaFj&pid=Api&P=0&w=223&h=167"} } resizeMode='stretch'></Image></TouchableOpacity><Text >Legs</Text></View>
        <View style={{justifyContent:'center',alignItems:'center'}}><TouchableOpacity style={styles.op} onPress={()=>{User.setchoice("Body");navigation.navigate('EA')}}><Image style={{height:70,width:70}} source={{uri:"https://tse3.mm.bing.net/th?id=OIP.SXnJ5uZ20hhbOfpogg_ADgHaE8&pid=Api&P=0&w=231&h=154"} } resizeMode='stretch'></Image></TouchableOpacity>< Text >Full Body</Text></View>
        <View style={{justifyContent:'center',alignItems:'center'}}><TouchableOpacity style={styles.op} onPress={()=>{User.setchoice("Yoga");navigation.navigate('EA')}}><Image style={{height:70,width:70}} source={{uri:"https://tse3.mm.bing.net/th?id=OIP.0gUwMZ8dPpJ_j0_LF5ygDwHaE8&pid=Api&P=0&w=282&h=188"} } resizeMode='stretch'></Image></TouchableOpacity><Text >Yoga</Text></View>
        
      </View>

      <View
        style={{
          height: 100,
          width: 340,
          backgroundColor: "#ea9296",
          marginLeft: 25,
          borderRadius: 25,
          marginRight: 20,
          marginTop:30
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
          height: 100,
          width: 340,
          backgroundColor: "#ea9296",
          marginLeft: 25,
          borderRadius: 25,
          marginRight: 20,
          marginTop:20
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
          height: 100,
          width: 340,
          backgroundColor: "#ea9296",
          marginLeft: 25,
          borderRadius: 25,
          marginRight: 20,
          marginTop:24
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

<Text style={{fontSize:20,width: wp("100%"),textAlign:'center',marginTop:6,paddingTop:6,borderTopColor:'black',borderTopWidth:1,marginTop:9}}>Recommended For You</Text>



<View style={{flexDirection:'row',marginLeft:5, alignItems:"flex-start"}}>
<ScrollView horizontal={true}>

{

User.getrecommend().map(item=>( 
<View style={{backgroundColor:"red" ,height:180,marginTop:15,width:180,flexDirection:'row',marginRight:10,borderRadius:20,overflow:'hidden' }}>
    <TouchableOpacity onPress={()=>{ExcersiseStore.setimg(item[1]);ExcersiseStore.settitle(item[0]);begin()}}>
      <Image source={{uri:item[1]} } style={{width:180,height:180}}></Image>
      <Text style={{paddingLeft:10,marginTop:140,position:'absolute',fontWeight:"300",color:'black',backgroundColor:'white',fontSize:18,width:180,paddingBottom:9,paddingTop:7}}>{item[0]}</Text>
    </TouchableOpacity>
</View>))

}
</ScrollView>
</View>


</View>
</ScrollView>


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
  i1: {
    height: 100,
    width: 340,
    borderRadius: 25,
    marginBottom: 50,
  },
op:{backgroundColor:"black",height:30,width:30,borderRadius:75,width:70,height:70,justifyContent:'center',alignItems:'center',marginLeft:10,overflow:'hidden'}
});