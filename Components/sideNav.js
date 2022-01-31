import LineGraph from '@chartiful/react-native-line-graph'
import React, { useRef, useState ,useEffect} from "react";
import User from "./User";
import firebase from '../firebase';
import { LogBox } from 'react-native';
import { useFonts } from 'expo-font';
import water from '../assets/water.png'
import { Entypo } from "@expo/vector-icons";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,TextInput,
  View,ScrollView
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Circle from "./circle";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import home from "../assets/home.png";
import search from '../assets/search.png';

import logout from '../assets/logout.png';
import menu from '../assets/menu.png';
import close from '../assets/close.png';

export default function Sidenav({ navigation }) {
LogBox.ignoreLogs(['Setting a timer']);

function logout1(){
 User.setname('')
        User.setemail('')
        User.setcweight(null)
        User.setgweight(null)
        User.setgoal('')
        User.setdiet('')
        User.setheight(null)
        User.setgender('')
        User.setchoice('')
        User.setimg('')
        User.setid(null)
navigation.navigate('Start')

}

    const [showh, seth] = useState();
    const [showw, setw] = useState();
  const [ifh, setifh] = useState(false);
const [ifw, setifw] = useState(false);



function setheigh(){

   firebase.db.collection('users').doc(User.getid()).update({


height:showh,




})
User.setheight(showh)
setifh(false)
}

function setweigh(){



   firebase.db.collection('users').doc(User.getid()).update({


currentweight:showw

})
User.setcweight(showw)
setifw(false)
}







    const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
    const [currentTab, setCurrentTab] = useState("Main");





const [c,setc]=React.useState(User.getwater())

async function increasewater(){

User.setwater(User.getwater()+1)
setc(User.getwater())
await firebase.db.collection('users').doc(User.getid()).update({water:User.getwater()})
sewc()
}

const [wc,setwc]=React.useState([])

function sewc(){
var x=[]
for (let i=0;i < User.getwater();i++){

x.push("a")
}
setwc(x)

}
useEffect (()=>{sewc()},[])

if(User.getwater()==0){}
else{
if(wc.length==0){
sewc()
}
}
return (
    <SafeAreaView>
     
      
      <View
        style={{
          justifyContent: "flex-start",
          padding: 25,
          backgroundColor: "#d7edf0",
          height: 2000
        }}
      >
     
       
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#598094",
            marginTop: 100,
          }}
        >
          {User.getname()}
        </Text>

        <TouchableOpacity>
          <Text
            style={{
              marginTop: 6,
              color: "#598094",
            }}
          >
            View Profile
          </Text>
        </TouchableOpacity>
        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            // Tab Bar Buttons....
          }
          <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <View style={{
          flexDirection: "row",
          alignItems: 'center',
          paddingVertical: 8,
          backgroundColor: '#598094',
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15,
          marginRight:190
        }}>
  
          <Image source={home} style={{
            width: 25, height: 25,
            tintColor: "black"
          }}></Image>
  
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            paddingLeft: 15,
            color:  "black"
          }}>Home</Text>
  
        </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://profit-31897.web.app/home.html")
            }
          >
          <View style={{
          flexDirection: "row",
          alignItems: 'center',
          paddingVertical: 8,
          backgroundColor: '#598094',
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 20,
          marginRight:190
        }}>
  
          <Image source={search} style={{
            width: 25, height: 25,
            tintColor: "black"
          }}></Image>
  
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            paddingLeft: 15,
            color:  "black"
          }}>Help</Text>
  
        </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{logout1()}}>
          <View style={{
          flexDirection: "row",
          alignItems: 'center',
          paddingVertical: 8,
          backgroundColor: 'transparent',
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 362,
          marginRight:190
        }}>
  
          <Image source={logout} style={{
            width: 25, height: 25,
            tintColor: "black"
          }}></Image>
  
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            paddingLeft: 15,
            color:  "black"
          }}>Logout</Text>
  
        </View>
          </TouchableOpacity>
         
         
        </View>

      </View>
      <Animated.View style={{
        flexGrow: 1,
        backgroundColor: '#d7edf0',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 25,
        paddingVertical: 25,
        borderRadius: showMenu ? 15 : 0,
        // Transforming View...
        transform: [
          { scale: scaleValue },
          { translateX: offsetValue }
        ]
      }}>
       <View
        style={{
          backgroundColor: "#598094",
          height: hp("38%"),
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 100,
          borderWidth: 13,
          borderColor: "#7aa0b4",
          width:wp('99%'),
          marginLeft:-20,
          
        }}
      >
      {
          // Menu Button...
        }

        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }]
        }}>
           
         
          <TouchableOpacity onPress={() => {
            // Do Actions Here....
            // Scaling the view...
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 0.88,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(offsetValue, {
              // YOur Random Value...
              toValue: showMenu ? 0 : 230,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(closeButtonOffset, {
              // YOur Random Value...
              toValue: !showMenu ? -30 : 0,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            setShowMenu(!showMenu);
          }}>

            <Image source={showMenu ? close : menu} style={{
              width: 30,
              height: 30,
              tintColor: 'black',
              marginTop: 40,
              marginLeft:10

            }}></Image>

          </TouchableOpacity>

          
          

          
        </Animated.View>

        <Circle />
        <View
          style={{
            backgroundColor: "#7aa0b4",
            height: hp("36%"),
            width: wp("58%"),
            marginLeft: wp("38%"),
            marginTop: 1,
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
            Get {User.getgoal()}
          </Text>
          <Text
            style={{
              marginTop: hp("2%"),
              fontSize: 15,
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            {User.getemail()}
          </Text>
        </View>

        
      </View>
      
<View style={{width:360,height:100,position:'absolute',marginLeft:20,marginTop:330}}>
<Text style={{fontSize:20,marginTop:10,fontWeight: "bold"}}>Your Daily Water Tracker</Text>
<Text style={{fontSize:20,position:'absolute',marginLeft:285,fontWeight: "bold",marginTop:10}}>{c}</Text>
<TouchableOpacity style={{backgroundColor:"#7aa0b4",height:40,width:40 , position:'absolute',marginLeft:320,marginTop:6,borderRadius:50}} onPress={() => {
                increasewater()
              }}>
<AntDesign name="plus" size={24} color="white" style={{marginTop:9,marginLeft:8}}></AntDesign>

</TouchableOpacity>
<ScrollView horizontal={true} style={{borderBottomColor:'black',borderBottomWidth:3,marginBottom:8}}>

{wc.map(item=>

<View style={{width:55}}>       

          <Image source={water} style={{
            width: 60, height: 60,
         
          }}></Image>

</View>

)}





</ScrollView>
</View>










      <View
        style={{
          backgroundColor: "transparent",
          height: hp("8%"),
          width: wp("27%"),
          marginTop: hp("13%"),
          marginLeft: wp("6%"),
          borderWidth: 12,
          borderTopColor: "transparent",
          borderLeftColor: "transparent",
          borderBottomColor: "transparent",
          borderRightColor: "#7aa0b4",
        }}
      >
<View
            style={{
              backgroundColor: "transparent",
              width: 20,
              height: 20,
              borderRadius: 50,
              position: "absolute",
              marginLeft: -15,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "transparent",
                width: 25,
                height: 30,
                borderRadius: 5,
              }}
              onPress={() => {
                setifh(true);
              }}
            ><Entypo name="edit" size={24} color="black" /></TouchableOpacity>
          </View>
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
          marginTop: hp('54%'),
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
          marginLeft: wp("57%"),
        }}
      >
          <View
            style={{
              backgroundColor: "transparent",
              width: 20,
              height: 20,
              borderRadius: 50,
              position: "absolute",
              marginLeft: 5,
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "transparent",
                width: 25,
                height: 30,
                borderRadius: 5,
              }}
              onPress={() => {
                setifw(true);
              }}
            ><Entypo name="edit" size={24} color="black" /></TouchableOpacity>
          </View>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
            color: "#25a0a3",
            marginTop: 10,marginLeft:10
          }}
        >
          Weight
        </Text>
        <Text
          style={{ textAlign: "center", fontSize: 13, fontStyle: "italic" }}
        >
          {User.getcweight()}
        </Text>
      </View>
      <Text
          style={{  fontSize: 23, fontWeight:'bold' ,marginTop:29, marginLeft:20}}
        >
          Statistics
        </Text>
        <Text
          style={{ color:'grey', fontSize: 13, fontStyle: "italic",marginLeft:20 }}
        >
          Last Seven days progress
        </Text>
      <View
        style={{
          backgroundColor: "white",
          height: hp("20%"),
          width: wp("80%"),
          borderRadius: 20,
          marginTop: 580,
          alignItems: "center",
          position: "absolute",
          marginLeft:40
        }}
      ></View>
<Text
          style={{ color:'grey', fontSize: 13,marginLeft:32,position:'absolute',marginTop:580,zIndex:20 }}
        >
          Reps
        </Text>
<LineGraph
  data={User.getdatap()}
  width={300}
  height={200}
  lineColor='#Fdbfff'
  dotColor='red'
  lineWidth={2}
  isBezier
  hasDots={true}
  baseConfig={{
    startAtZero: false,
    hasXAxisBackgroundLines: false,
    xAxisLabelStyle: {
      
      offset: 0
    }
  }}
  style={{
    marginBottom: 30,
    padding: 10,
    paddingTop: 40,
    borderRadius: 20,
    width: 400,
    backgroundColor: `#dbf0ef`
  }}
/>
<Text
          style={{ color:'grey', fontSize: 13,marginLeft:192,position:'absolute',marginTop:790,zIndex:20 }}
        >
          Days
        </Text>
{ifh && <>
<View style={{backgroundColor:'#000', position:"absolute", height: hp("110%"),width: wp("100%"),opacity:0.4,justifyContent:'center'}}></View>
        <View style={{backgroundColor:'#fff', position:"absolute", height: hp("25%"),width: wp("65%"),marginTop:300,marginLeft:70,textAlign:'center'}}>

<Text style={{marginTop:40,marginLeft:45,fontSize:20}}>Enter New Height</Text>
<TextInput 
                style={{ fontSize: 15 ,borderBottomColor: 'grey',  
                borderBottomWidth:2, width: wp("40%"),marginLeft:45,marginTop:10}} 
                onChangeText={seth}
                value={showh}
                placeholder={User.getheight()}
                placeholderTextColor="grey"
                
                   
                    />


<View style={{display:'flex',flexDirection:'row'}}>
<View style={{ fontSize: 15 , backgroundColor:'#7aa0b4',marginLeft:30,marginTop:30,
                width:80,color:'white',height:40}} ><TouchableOpacity style={{width:40,height:40}}  onPress={()=>{setifh(false)}}><Text style={{color:'white',fontSize: 13,width:40,marginLeft:20,marginTop:10}}>Cancel</Text></TouchableOpacity></View>

<View style={{ fontSize: 15 , backgroundColor:'#7aa0b4',marginLeft:26,marginTop:30,
                width:80,height:40}} ><TouchableOpacity style={{width:40,height:40,textAlign:'center'}} onPress={()=>{setheigh()}}><Text style={{color:'white',fontSize: 13,width:40,marginLeft:25,marginTop:10}}>Save</Text ></TouchableOpacity></View>

</View>
</View>
<View>


</View></>}
{ifw && <>
<View style={{backgroundColor:'#000', position:"absolute", height: hp("110%"),width: wp("100%"),opacity:0.4,justifyContent:'center'}}></View>
        <View style={{backgroundColor:'#fff', position:"absolute", height: hp("25%"),width: wp("65%"),marginTop:300,marginLeft:70,textAlign:'center'}}>

<Text style={{marginTop:40,marginLeft:45,fontSize:20}}>Enter New Weight</Text>
<TextInput 
                style={{ fontSize: 15 ,borderBottomColor: 'grey',  
                borderBottomWidth:2, width: wp("40%"),marginLeft:45,marginTop:10}} 
                onChangeText={setw}
                value={showw}
                placeholder={User.getcweight()}
                placeholderTextColor="grey"
                
                   
                    />


<View style={{display:'flex',flexDirection:'row'}}>
<View style={{ fontSize: 15 , backgroundColor:'#7aa0b4',marginLeft:30,marginTop:30,
                width:80,color:'white',height:40}} ><TouchableOpacity style={{width:40,height:40}} onPress={()=>{setifw(false)}}><Text style={{color:'white',fontSize: 13,width:40,marginLeft:20,marginTop:10}}>Cancel</Text></TouchableOpacity></View>

<View style={{ fontSize: 15 , backgroundColor:'#7aa0b4',marginLeft:26,marginTop:30,
                width:80,height:40}} ><TouchableOpacity style={{width:40,height:40,textAlign:'center'}} onPress={()=>{setweigh()}}><Text style={{color:'white',fontSize: 13,width:40,marginLeft:25,marginTop:10}}>Save</Text ></TouchableOpacity></View>

</View>
</View>
<View>

</View>
</>
}

      </Animated.View>
    </SafeAreaView>
  );
}
const TabButton = (currentTab, setCurrentTab, title, image) => {
    return (
  
      <TouchableOpacity onPress={() => {
        if (title == "LogOut") {
          // Do your Stuff...
        } 
      }}>
        <View style={{
          flexDirection: "row",
          alignItems: 'center',
          paddingVertical: 8,
          backgroundColor: currentTab == title ? 'white' : 'transparent',
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15,
          marginRight:190
        }}>
  
          <Image source={image} style={{
            width: 25, height: 25,
            tintColor: currentTab == title ? "#5359D1" : "white"
          }}></Image>
  
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            paddingLeft: 15,
            color: currentTab == title ? "#5359D1" : "white"
          }}>{title}</Text>
  
        </View>
      </TouchableOpacity>
    );
  }
  