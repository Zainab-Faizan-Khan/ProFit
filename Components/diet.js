import React , {useState , useEffect} from 'react';
import { StyleSheet, Text, View , Button, TouchableOpacity ,Image ,ScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import firebase from '../firebase';
import { LogBox } from 'react-native';
import User from './User';


export default function Diet({navigation}) {

LogBox.ignoreLogs(['Setting a timer']);

const [food,setfood]=React.useState([])

const [diet,setdiet]=React.useState([])

const [s,sets]=React.useState(false)

async function getall(){



var f=[]

try{
var g;
if(User.getgoal()=="strong"){g="dietstrong"}
else if(User.getgoal()=="loose"){g="dietloose"}
else{g="dietfit"}
await firebase.db.collection(g).onSnapshot((snapshot)=>{snapshot.forEach(doc=>{
const Breakfast=doc.data().Breakfast
const Lunch=doc.data().Lunch
const Snack=doc.data().Snack
const Dinner=doc.data().Dinner

f.push([Breakfast,Lunch,Snack,Dinner])
})
setdiet(f)
setfood(f[User.getfno()])


sets(true)
}
)


}

catch(e){}

}






async function getnewdiet(){
var r= getrand(0,6)


User.setfno(r)

await firebase.db.collection('users').doc(User.getid()).update({

fno:r
})

setfood(diet[User.getfno()])

}




function getrand(min,max){
return Math.floor(Math.random()*(max-min+1))+min
}

useEffect(async () => {getall()},[])




    return(<View style={styles.container}>
<View 
      style={{backgroundColor:"#25a0af",
              position:'absolute',
              width:400,
              height:200,
              borderBottomRightRadius:50,
              borderBottomLeftRadius:50,
              borderBottomColor:'#25a0af',
              borderWidth:15,
              borderColor:'#25a0af'}}>

    <Text style={{fontSize:40,fontWeight:'bold', marginLeft:30,marginTop:60}}>DIET PLAN</Text>
    <View style={{width:40,height:40,borderRadius:50,position:'absolute',marginTop:70,marginLeft:310}}>
          <TouchableOpacity style={{width:40,height:40}} onPress={()=>{getnewdiet()}}>

<FontAwesome name="refresh" size={24} color="white" style={{marginTop:9,marginLeft:8}}></FontAwesome>

</TouchableOpacity>
    </View>

    <Text style={{marginLeft:30,}}>We got a special diet plan for you today !</Text>

</View>
 


{

s&&
<>
<View style={{backgroundColor:"transparent",marginTop:150,marginLeft:1,width:300,}}>
<ScrollView vertical={true} >
<Text style={styles.dieth}>Breakfast:</Text>
<Text style={styles.dietc}>{food[0]}</Text>

<Text style={styles.dieth}>Lunch:</Text>
<Text style={styles.dietc}>{food[1]}</Text>

<Text style={styles.dieth}>Snack:</Text>
<Text style={styles.dietc}>{food[2]}</Text>

<Text style={styles.dieth}>Dinner:</Text>
<Text style={{paddingBottom:50,marginTop:10,fontSize:17,marginLeft:5,color:"black"}}>{food[3]}</Text>
</ScrollView>
</View>
</>
}


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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'flex-start',
    paddingTop:60,
    marginTop:10,
  paddingLeft:40,
backgroundColor: "#d7edf0"
  },
dieth:{marginTop:20,marginLeft:3,fontSize:20,color:"#25a0af",fontStyle:'italic'},

dietc:{marginTop:10,fontSize:17,marginLeft:5,color:"black"}
});
