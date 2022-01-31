import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import ExcersiseStore from './ExcersiseStore';
import User from './User';
import { StyleSheet, Text, View , Button, TouchableOpacity ,Image ,ScrollView} from 'react-native';
import React , {useState , useEffect} from 'react';
import firebase from '../firebase';
import { LogBox } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { MaterialIcons } from '@expo/vector-icons';
export default function EA({navigation}){
LogBox.ignoreLogs(['Setting a timer']);

const [hi,sethj]=React.useState([])
const [cexcer,setcexer]=React.useState(null)
const [ctype,setctype]=React.useState(null)
const [ccat,setccat]=React.useState(null)
const [cimg,setcimg]=React.useState(null)

function d(){
if(User.getchoice()=="Arms"){getCollectionarm()}
else if(User.getchoice()=="Legs"){getCollectionleg()}
else if(User.getchoice()=="Body"){getCollectionbody()}
else if(User.getchoice()=="Yoga"){getCollectionyoga()}
else{getCollectionarm ()}
}


useEffect (()=>{d()},[])

async function getCollectionarm (){ 
var h=[]
try{

   await firebase.db.collection('Arms').onSnapshot((snapshot)=>{snapshot.forEach(doc=>{

const title=doc.data().title
const category=doc.data().category
const img=doc.data().img

h.push([title,category,img,'Arms'])
if(title=="Overhead Extension"){setccat(category);setcexer(title);setcimg(img);setctype("Arms")}

})

sethj(h)


}); //TODO: add query if needed
 


 }catch(err){
  res.status(500).send(err);
 }

}

async function getCollectionbody (){ 
var h=[]
try{

   await firebase.db.collection('Body').onSnapshot((snapshot)=>{snapshot.forEach(doc=>{

const title=doc.data().title
const category=doc.data().category
const img=doc.data().img

h.push([title,category,img,'Full Body'])
if(title=="Shin Box"){setccat(category);setcexer(title);setcimg(img);setctype("Full Body")}

})

sethj(h)


}); //TODO: add query if needed
 


 }catch(err){
  res.status(500).send(err);
 }

}

async function getCollectionyoga (){ 
var h=[]
try{

   await firebase.db.collection('Yoga').onSnapshot((snapshot)=>{snapshot.forEach(doc=>{

const title=doc.data().title
const category=doc.data().category
const img=doc.data().img

h.push([title,category,img,'Yoga'])
if(title=="Lunge"){setccat(category);setcexer(title);setcimg(img);setctype("Yoga")}

})

sethj(h)


}); //TODO: add query if needed
 


 }catch(err){
  res.status(500).send(err);
 }

}

async function getCollectionleg (){ 
var h=[]
try{

   await firebase.db.collection('Legs').onSnapshot((snapshot)=>{snapshot.forEach(doc=>{

const title=doc.data().title
const category=doc.data().category
const img=doc.data().img

h.push([title,category,img,'Legs'])
if(title=="Romanian Deadlift"){setccat(category);setcexer(title);setcimg(img);setctype("Legs")}

})

sethj(h)


}); //TODO: add query if needed
 


 }catch(err){
  res.status(500).send(err);
 }

}
const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
function starte(){
ExcersiseStore.setemail(User.getemail())
ExcersiseStore.settitle(cexcer)
ExcersiseStore.setdate(date)
ExcersiseStore.setimg(cimg)



navigation.navigate('Detail')


}
//
return(
<View style={styles.container}>
      <Text style={{fontSize:30}}>Excersises</Text>
      <View style={{flexDirection:"row",marginTop:50,justifyContent:"center" ,marginLeft:-10}}>
        <View style={{justifyContent:'center',alignItems:'center'}}><TouchableOpacity style={styles.op} onPress={()=>{getCollectionarm()}}><Image style={{height:70,width:70}} source={{uri:"https://tse2.mm.bing.net/th?id=OIP.AKljJEmMUJOgX5hlUU8OKAHaEG&pid=Api&P=0&w=321&h=177"} } resizeMode='stretch'></Image></TouchableOpacity><Text >Arms</Text></View>

        <View style={{justifyContent:'center',alignItems:'center'}}><TouchableOpacity style={styles.op} onPress={()=>getCollectionleg()}><Image style={{height:70,width:70}} source={{uri:"https://tse3.mm.bing.net/th?id=OIP.avNDsChtXFxlwuAd3HoBDQHaFj&pid=Api&P=0&w=223&h=167"} } resizeMode='stretch'></Image></TouchableOpacity><Text >Legs</Text></View>
        <View style={{justifyContent:'center',alignItems:'center'}}><TouchableOpacity style={styles.op} onPress={()=>getCollectionbody()}><Image style={{height:70,width:70}} source={{uri:"https://tse3.mm.bing.net/th?id=OIP.SXnJ5uZ20hhbOfpogg_ADgHaE8&pid=Api&P=0&w=231&h=154"} } resizeMode='stretch'></Image></TouchableOpacity>< Text >Full Body</Text></View>
        <View style={{justifyContent:'center',alignItems:'center'}}><TouchableOpacity style={styles.op} onPress={()=>getCollectionyoga()}><Image style={{height:70,width:70}} source={{uri:"https://tse3.mm.bing.net/th?id=OIP.0gUwMZ8dPpJ_j0_LF5ygDwHaE8&pid=Api&P=0&w=282&h=188"} } resizeMode='stretch'></Image></TouchableOpacity><Text >Yoga</Text></View>
        
      </View>
      <View style={{backgroundColor:"#25a0af" ,width:384,height:300,marginTop:40,marginLeft:-35 ,flexDirection:"row"}}>
      <View style={{backgroundColor:"#25a0af", width:384/2,height:300}}>
<Image style={{ width:384/2,height:300}} source={{uri:cimg} } resizeMode='stretch'></Image>
</View>
      < View style={{backgroundColor:"#25a0af", width:384/2,height:300,flexDirection:"column",justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:20,color:"#Fdbfff"}}>Name:</Text>
        <Text style={{fontSize:20}}>{cexcer}</Text>
        <Text style={{fontSize:20,marginTop:10,color:"#Fdbfff"}}>Excersise Type:</Text>
        <Text style={{fontSize:20}}>{ctype}</Text>
        <Text style={{fontSize:20,marginTop:10,color:"#Fdbfff"}}>Category:</Text>
        <Text style={{fontSize:20,marginBottom:20}}>{ccat}</Text>
        <View >
        <Button title='Lets Start' onPress={()=>{starte()}}  ></Button></View>
</View>
</View>


<View style={{flexDirection:'row',marginLeft:-25, alignItems:"flex-start"}}>
<ScrollView horizontal={true}>

{

hi.map(item=>( 
<View style={{backgroundColor:"red" ,height:80,marginTop:40,width:80,flexDirection:'row',marginRight:10,borderRadius:20,overflow:'hidden' }}>
    <TouchableOpacity onPress={()=>{let exer=item[0];setcexer(exer); let ty=item[3];setctype(ty);let cat=item[1];setccat(cat);let i=item[2];setcimg(i)}}>
      <Image source={{uri:item[2]} } style={{width:80,height:80}}></Image>
      <View style={{position:'absolute', width:80 , height:80, backgroundColor:'black',opacity:0.3}}></View>
      <Text style={{paddingLeft:10,marginTop:20,position:'absolute',fontWeight:"300",color:'white'}}>{item[0]}</Text>
    </TouchableOpacity>
</View>))

}
</ScrollView>
</View>

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
  container: {
    flex: 1,
    
    alignItems: 'flex-start',
    paddingTop:60,
    marginTop:10,
  paddingLeft:40,
backgroundColor: "#d7edf0"
  },
op:{backgroundColor:"black",height:30,width:30,borderRadius:75,width:70,height:70,justifyContent:'center',alignItems:'center',marginLeft:10,overflow:'hidden'}
});
