import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, TouchableOpacity ,Image ,ScrollView} from 'react-native';
import React , {useState , useEffect} from 'react';
import firebase from '../firebase';
import { LogBox } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';

export default function EA({navigation}){
LogBox.ignoreLogs(['Setting a timer']);

const [hi,sethj]=React.useState([])
const [cexcer,setcexer]=React.useState(null)
const [ctype,setctype]=React.useState(null)
const [ccat,setccat]=React.useState(null)
const [cimg,setcimg]=React.useState(null)

const [ccode,setccode]=React.useState()


useEffect (async ()=>{getCollectionarm()},[])

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
 
console.log(hi)

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
 
console.log(hi)

 }catch(err){
  res.status(500).send(err);
 }

}

function starte(){


console.log(cexcer)}
//
return(
<View style={styles.container}>
      <Text style={{fontSize:30}}>Excersises</Text>
      <View style={{flexDirection:"row",marginTop:50,justifyContent:"center" ,marginLeft:-10}}>
        <View style={{justifyContent:'center',alignItems:'center'}}><TouchableOpacity style={styles.op} onPress={()=>{getCollectionarm()}}><Image style={{height:70,width:70}} source={{uri:"https://tse2.mm.bing.net/th?id=OIP.AKljJEmMUJOgX5hlUU8OKAHaEG&pid=Api&P=0&w=321&h=177"} } resizeMode='stretch'></Image></TouchableOpacity><Text >Arms</Text></View>

        <View style={{justifyContent:'center',alignItems:'center'}}><TouchableOpacity style={styles.op} onPress={()=>getCollectionleg()}><Image style={{height:70,width:70}} source={{uri:"https://tse3.mm.bing.net/th?id=OIP.avNDsChtXFxlwuAd3HoBDQHaFj&pid=Api&P=0&w=223&h=167"} } resizeMode='stretch'></Image></TouchableOpacity><Text >Legs</Text></View>
        <View style={{justifyContent:'center',alignItems:'center'}}><TouchableOpacity style={styles.op}><Image style={{height:70,width:70}} source={{uri:"https://tse3.mm.bing.net/th?id=OIP.SXnJ5uZ20hhbOfpogg_ADgHaE8&pid=Api&P=0&w=231&h=154"} } resizeMode='stretch'></Image></TouchableOpacity>< Text >Full Body</Text></View>
        <View style={{justifyContent:'center',alignItems:'center'}}><TouchableOpacity style={styles.op}><Image style={{height:70,width:70}} source={{uri:"https://tse3.mm.bing.net/th?id=OIP.0gUwMZ8dPpJ_j0_LF5ygDwHaE8&pid=Api&P=0&w=282&h=188"} } resizeMode='stretch'></Image></TouchableOpacity><Text >Yoga</Text></View>
        
      </View>
      <View style={{backgroundColor:"red" ,width:384,height:300,marginTop:40,marginLeft:-35 ,flexDirection:"row"}}>
      <View style={{backgroundColor:"yellow", width:384/2,height:300}}>
<Image style={{ width:384/2,height:300}} source={{uri:cimg} } resizeMode='stretch'></Image>
</View>
      < View style={{backgroundColor:"blue", width:384/2,height:300,flexDirection:"column",justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:20}}>Name:</Text>
        <Text style={{fontSize:20}}>{cexcer}</Text>
        <Text style={{fontSize:20,marginTop:10}}>Excersise Type:</Text>
        <Text style={{fontSize:20}}>{ctype}</Text>
        <Text style={{fontSize:20,marginTop:10}}>Category:</Text>
        <Text style={{fontSize:20,marginBottom:20}}>{ccat}</Text>
        <Button title='Lets Start' onPress={()=>{starte()}} ></Button>
</View>
</View>


<View style={{flexDirection:'row',marginLeft:-25, alignItems:"flex-start"}}>
<ScrollView horizontal={true}>

{

hi.map(item=>( 
<View style={{backgroundColor:"red" ,height:80,marginTop:40,width:80,flexDirection:'row',marginRight:10,borderRadius:20,overflow:'hidden' }}>
    <TouchableOpacity onPress={()=>{let exer=item[0];setcexer(exer); let ty=item[3];setctype(ty);let cat=item[1];setccat(cat);let i=item[2];setcimg(i)}}>
      <Image source={{uri:item[2]} } style={{width:80,height:80}}></Image>
      <Text style={{paddingLeft:10,marginTop:20,position:'absolute',fontWeight:"300",color:'blue'}}>{item[0]}</Text>
    </TouchableOpacity>
</View>))

}
</ScrollView>
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
