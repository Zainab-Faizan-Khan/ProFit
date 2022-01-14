import * as React from 'react';
import {Text, View,StyleSheet,Button ,TextInput,Image, Alert,useState,Checkbox} from 'react-native';
import Carousel from 'pinar';
import * as Yup from 'yup'
import { Formik } from 'formik';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import firebase from '../firebase';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import Slider from '@react-native-community/slider';



export default function SignUp ({navigation}) {
    const [email,setemail]=React.useState(null)
const [pw,setpw]=React.useState(null)
const [uname,setuname]=React.useState(null)
const [checked, setChecked] = React.useState('female')
const [cweight,setcweight]=React.useState(null)
const [gweight,setgweight]=React.useState(null)
const [cheight,setheight]=React.useState(null)
const [goal,setgoal]=React.useState('strong')
const [diet,setdiet]=React.useState('nonveg')
const [invalid,setinvalid]=React.useState(false)
const [inevalid,seteinvalid]=React.useState(false)
  const onsignup = async ()=>{
if(email!==null|pw!==null|uname|null){
      try{
        setinvalid(false)
        seteinvalid(false)
         const authUser= await firebase.auth.createUserWithEmailAndPassword(email,pw)
          console.log('user created')
          firebase.db.collection('users').add({
              owner_uid:authUser.user.uid,
              username: uname,
              email:authUser.user.email,
              gender:checked,
              currentweight:cweight,
              goalweight:gweight,
              height:cheight,
              goal:goal,
              diet:diet,
              
})
console.log(uname,email,pw,cweight,gweight,goal,diet,cheight,checked)
        navigation.navigate('Main')
}
      catch(e){Alert.alert(e.message)}

}
else{
if(email==null){seteinvalid(true)}
if(uname==null){setinvalid(true)}
}

}

    return(
< >
<View style={
{ flex: 1, flexDirection:'column', justifyContent: 'center',height:1000,position:'absolute' }}>
<>
    <Image source={require("../assets/headerlogo.png")}  style={{ marginTop:-750,marginLeft:110,height:190,width:180}}/>
    {invalid&& <View><Text style={{color:"red", marginTop:-75,marginLeft:110,fontSize:15}}>* Required fields are invalid.</Text></View>}</>
</View>
    <Carousel showsControls={false}>

    
      <>
<View style={styles.slide}>
            <Text style={{marginTop:70,marginLeft:86, fontSize:24,fontWeight:'bold',marginBottom:44}}>Account Details</Text>
            <Text style={{marginTop:40,marginLeft:27, fontSize:20,fontWeight:'bold'}}>Email:</Text>
            <TextInput 
                style={{ fontSize: 20 , marginTop:-32,marginLeft:150,borderBottomColor: 'grey',  
                borderBottomWidth:2, marginRight:28 }} 
                onChangeText={setemail}
                value={email}
                placeholder='Enter Email'
                placeholderTextColor="white"
                keyboardType='email-address'     
                    />
                {inevalid && <View><Text style={{fontSize:10,marginLeft:190,color:"blue",marginTop:10}}>This field is required</Text></View>}
            <Text style={{marginTop:40,marginLeft:27, fontSize:20,fontWeight:'bold'}}>UserName:</Text>
            <TextInput style={{ fontSize: 20 , marginTop:-32,marginLeft:150,borderBottomColor: 'grey',  
                borderBottomWidth:2, marginRight:28 }}
                onChangeText={setuname}
                value={uname}
                placeholder='Enter Your Name'
                placeholderTextColor="white"
                    />
             {invalid && <View><Text style={{fontSize:10,marginLeft:190,color:"blue",marginTop:10}}>This field is required</Text></View>}
            <Text style={{marginTop:40,marginLeft:27, fontSize:20,fontWeight:'bold'}}>Password:</Text>
            <TextInput style={{ fontSize: 20 , marginTop:-32,marginLeft:150,borderBottomColor: 'grey',  
                borderBottomWidth:2, marginRight:28}}  
                onChangeText={setpw}
                value={pw}
                placeholder='Enter Password'
                placeholderTextColor="white"
                secureTextEntry={true}
                    />
            <Text style={{fontSize:10,marginLeft:140,color:"blue",marginTop:10}}>Password should be min 8 characters long</Text>

</View>

      </>
<>
<View style={styles.slide}>

            <Text style={{marginTop:70,marginLeft:126, fontSize:24,fontWeight:'bold',marginBottom:34}}>Gender</Text>
            <View style={{paddingLeft:22, position:'relative' ,borderColor:"black",borderRadius:10,borderWidth:2,width:140,marginLeft:25}}>
                <Text style={{paddingTop:20, paddingLeft:15, fontSize:20}}>Female</Text>
                <MaterialCommunityIcons name="gender-female" size={100} color="black" style={styles.female} />
                <RadioButton
                    value="first"
                    status={ checked === 'female' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('female')}
                    style={styles.r1}
                />
            </View>

            <View style={{ position:'relative',paddingTop:0, paddingLeft:22,borderRadius:10,borderWidth:2,width:140,marginTop:-190,marginLeft:190}}>
                <Text  style={{ fontSize:20,paddingLeft:15,paddingTop:20}}>Male</Text>
                <MaterialCommunityIcons name="gender-male" size={100} color="black" style={styles.male} />
                <RadioButton
                    value="second"
                    status={ checked === 'male' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('male')}
                />
            </View>

            <View style={{paddingLeft:20, paddingTop:50,borderRadius:10,borderWidth:2,width:150,marginTop:20,marginLeft:90,height:170}}>
                <Text style={{fontSize:20}}>Other</Text>
                <RadioButton
                    value="third"
                    status={ checked === 'other' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('other')}
                />
            </View>

        


</View>
</>

<>
<View style={styles.slide}>
            <Text style={{marginTop:70,marginLeft:35, fontSize:24,fontWeight:'bold',marginBottom:15}}>How much do you weigh?</Text>           
            <View >
        
                <Text style={{position:"absolute", fontSize:20, marginLeft:50, fontStyle:"italic", marginTop:70}}>Current Weight:</Text>
                <FontAwesome5 name="weight" size={24} color="blue" style={styles.fontkg}/>
                <TextInput style={{ fontSize: 20 , marginTop:130,marginLeft:110,borderBottomColor: '#b7b6c1',  
                    borderBottomWidth: 1,marginRight:110  }}  keyboardType='numeric'  
                onChangeText={setcweight}
                value={cweight}

                  />
                    <Text style={{position:"absolute", fontSize:15, marginLeft:250, marginTop:130}}>KG</Text>
            </View>

            <View >
            
                <Text style={{position:"absolute", fontSize:20, marginLeft:50, marginTop:70, fontStyle:"italic"}}>Target Weight:</Text>
                <Feather name="target" size={24} color="red" style={styles.fonttarget}/>
                <TextInput style={{ fontSize: 20 , marginTop:140,marginLeft:110,borderBottomColor: '#b7b6c1',  
                    borderBottomWidth: 1,marginRight:110  }}  keyboardType='numeric'   
                onChangeText={setgweight}
                value={gweight}

                 />
                    <Text style={{position:"absolute", fontSize:15, marginLeft:250, marginTop:140}}>KG</Text>
            </View>

</View>
</> 

<>
<View style={styles.slide}>
            <Text style={{marginTop:70,marginLeft:35, fontSize:24,fontWeight:'bold',marginBottom:15}}>What is your Fitness level?</Text>  
            <Text style={{marginTop:20,marginLeft:35,color:"white", fontSize:15,marginBottom:70}}>Select an option that closely matches you</Text>
            
            <View style={{paddingLeft:18}}>
                <Text style={{position:'absolute',marginLeft:30}}>Poor</Text>
                <Text style={{position:'absolute',marginLeft:120}}>Fair</Text>
                <Text style={{position:'absolute',marginLeft:200}}>Good</Text>
                <Text style={{position:'absolute',marginLeft:280}}>Excellent</Text>
                <Slider
                    style={{width: 330, height: 40, marginTop:10}}
                    minimumValue={0}
                    maximumValue={10}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                    />
            </View>

            <Text style={{marginTop:40,marginLeft:65, fontSize:24,fontWeight:'bold'}}>What is your Height?</Text>           
            <View >
        
                <Text style={{position:"absolute", fontSize:20, marginLeft:50, fontStyle:"italic", marginTop:50}}>Current Height:</Text>
                <FontAwesome5 name="weight" size={24} color="blue" style={styles.fontkg}/>
                <TextInput style={{ fontSize: 20 , marginTop:130,marginLeft:110,borderBottomColor: '#b7b6c1',  
                    borderBottomWidth: 1,marginRight:110  }}  keyboardType='numeric'  
                onChangeText={setheight}
                value={cheight}

                  />
                    <Text style={{position:"absolute", fontSize:15, marginLeft:250, marginTop:130}}>Ft</Text>
            </View>

</View>
</>  
<>
<View style={styles.slide}>
           <Text style={{marginTop:70,marginLeft:75, fontSize:24,fontWeight:'bold',marginBottom:15}}>What is your Goal?</Text>      
            <View style={{paddingLeft:60, backgroundColor:'#f6b1f0', height:100, paddingRight:20, borderRadius:10,marginTop:20,marginLeft:10,width:330}}>
                <Image source={require("./register/assetsregister/strong.jpg")} style={{width:100, height:100, marginLeft:150}}/>
                <Text style={{position:'absolute',marginLeft:60, marginTop:28, fontSize:20, fontStyle:'italic',fontWeight:'bold'}}>Get Stronger</Text>
                <Text style={{position:'absolute',marginLeft:60, marginTop:58, fontSize:10, fontStyle:'italic'}}>Touch up and get in better shape</Text>
                <View style={{ position:'absolute',marginTop:30, marginLeft:20}}>
                    <RadioButton
                    value="strong"
                    status={ goal === 'strong' ? 'checked' : 'unchecked' }
                    onPress={() => setgoal('strong')}
                />
                </View>
            </View>

            <View style={{paddingLeft:60, backgroundColor:'#e0eca1', height:100, paddingRight:20, borderRadius:10,marginTop:20,marginLeft:10,width:330,overflow:'hidden'}}>
                <Image source={require("./register/assetsregister/weight.jpg")} style={{width:190, height:100, marginLeft:80}}/>
                <Text style={{position:'absolute',marginLeft:60, marginTop:28, fontSize:20, fontStyle:'italic',fontWeight:'bold'}}>Loose Weight</Text>
                <Text style={{position:'absolute',marginLeft:60, marginTop:58, fontSize:10, fontStyle:'italic'}}>Get lean fast& healthy </Text>
                <View style={{ position:'absolute',marginTop:30, marginLeft:20}}>
                    <RadioButton
                    value="loose"
                    status={ goal === 'loose' ? 'checked' : 'unchecked' }
                    onPress={() => setgoal('loose')}
                />
                </View>
            </View>

            <View style={{paddingLeft:60, backgroundColor:'#d1cbe1', height:100, paddingRight:20, borderRadius:10,marginTop:20,marginLeft:10,width:330,overflow:'hidden'}}>
                <Image source={require("./register/assetsregister/fitt.jpg")} style={{width:140, height:80, marginLeft:140, marginTop:15}}/>
                <Text style={{position:'absolute',marginLeft:60, marginTop:28, fontSize:20, fontStyle:'italic',fontWeight:'bold'}}>Keep Fit</Text>
                <Text style={{position:'absolute',marginLeft:60, marginTop:58, fontSize:10, fontStyle:'italic'}}>Stay fit and healthy</Text>
                <View style={{ position:'absolute',marginTop:30, marginLeft:20}}>
                <RadioButton
                    value="fit"
                    status={ goal === 'fit' ? 'checked' : 'unchecked' }
                    onPress={() => setgoal('fit')}
                />
                </View>
            </View>

</View>
</>  
<>
<View style={styles.slide}>
            <Text style={{marginTop:70,marginLeft:75, fontSize:24,fontWeight:'bold',marginBottom:55}}>Select Your Diet Type?</Text>
             <View style={{paddingLeft:40, backgroundColor:'#b9e36e', height:130, paddingRight:20, borderRadius:10,marginLeft:20,width:320}}>
            <Image source={require("./register/assetsregister/nonveg.jpg")} style={{width:180, height:100, marginTop:18, marginLeft:95}}/>
            <Text style={{position:'absolute',marginLeft:40, marginTop:28, fontSize:20, fontStyle:'italic',fontWeight:'bold'}}>STANDARD</Text>
            <Text style={{position:'absolute',marginLeft:70, marginTop:58, fontSize:10, fontStyle:'italic'}}>All kind of food</Text>
            <View style={{marginTop:-70,marginLeft:-10}}>
                <RadioButton
                    value="nonveg"
                    status={ diet === 'nonveg' ? 'checked' : 'unchecked' }
                    onPress={() => setdiet('nonveg')}
                    
                />
            </View>
        </View>
        <View style={{paddingLeft:40, backgroundColor:'#b2ebf0', height:130, paddingRight:20, borderRadius:10,marginLeft:20,width:320,marginTop:50,overflow:'hidden'}}>
            <Image source={require("./register/assetsregister/veg.jpg")} style={{width:180, height:100, marginTop:10, marginLeft:110}}/>
            <Text style={{position:'absolute',marginLeft:30, marginTop:30, fontSize:20, fontStyle:'italic',fontWeight:'bold'}}>VEGETARIAN</Text>
            <Text style={{position:'absolute',marginLeft:270, marginTop:60, fontSize:10, fontStyle:'italic'}}>Meat-free or Fish-free food</Text>
            <View style={{marginTop:-50,marginLeft:-10}}> 
                <RadioButton
                    value="veg"
                    status={ diet === 'veg' ? 'checked' : 'unchecked' }
                    onPress={() => setdiet('veg')}
                    
                />
            </View>
     
        </View>

            <View style={styles.styleBtn1}>
            <Button
            color="#85bec5" //button color
            title="Next"
            onPress={onsignup}
             />
            </View>      


</View>
</>  
</Carousel>
</>
    )

}
const styles=StyleSheet.create({

slide:{
      flex:0,
      height:570,
      width:355,
      backgroundColor:"red",
      marginLeft:20,
      marginTop:170,
      marginRight:10,
      borderRadius:15

},

styleBtn1: {
      position:'absolute',
      marginTop: 500,
      marginLeft: 204,
      borderWidth: 2,
      borderRadius: 10,
      borderColor: "#86bac1", //button background/border color
      overflow: "hidden",
      marginBottom: 10,
      width:130,
      height:40
},
styleBtn2: {
      position:'absolute',
      marginTop: 500,
      marginLeft: 20,
      borderWidth: 2,
      borderRadius: 10,
      borderColor: "#86bac1", //button background/border color
      overflow: "hidden",
      marginBottom: 10,
      width:130,
      height:40
},
    
    
fontkg:{
    position:'absolute',
    marginTop:130,
    marginLeft:70
},

fonttarget:{
    position:'absolute',
    marginTop:140,
    marginLeft:70
}

})