import React from 'react';
import {StyleSheet, Button, Text, View ,Image} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';




export default function Gender({navigation}){
    const [checked, setChecked] = React.useState('first');
    return(
        <View style={{backgroundColor:'white', height:2000}}>
          <Image source={require("../register/assetsregister/header.png")}  style={{ height:100, width: 150, marginTop:40,marginLeft:120}}/>
             <Text style={{marginTop:100,marginLeft:70, fontSize:24,fontWeight:'bold'}}>Please Select Your Gender</Text>
             <View style={{paddingLeft:70, position:'relative'}}>
             <Text style={{paddingTop:50, paddingLeft:-60, fontSize:20}}>Female</Text>
             <MaterialCommunityIcons name="gender-female" size={140} color="black" style={styles.female} />
             <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
        style={styles.r1}
      />
      </View>
      <View style={{ position:'absolute',paddingTop:325, paddingLeft:270}}>
      <Text  style={{ fontSize:20,paddingLeft:-20}}>Male</Text>
      <MaterialCommunityIcons name="gender-male" size={140} color="black" style={styles.male} />
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
      </View>
      <View style={{paddingLeft:180, paddingTop:50}}>
       <Text style={{fontSize:20}}>Other</Text>
      <RadioButton
        value="third"
        status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('third')}
        
      />
      </View>
      <View style={styles.styleBtn1}>
          <Button
            color="#85bec5" //button color
             title="Next"
             onPress={()=>navigation.navigate('Dob')}
             
          />
        </View>
            
        </View>
    );
}
const styles = StyleSheet.create({
    styleBtn1: {
      marginTop: 140,
      marginLeft: 30,
      marginRight: 30,
      borderWidth: 2,
      borderRadius: 10,
      borderColor: "#86bac1", //button background/border color
      overflow: "hidden",
      marginBottom: 10,
    },
    male:{
        
        marginLeft:-36
        
    },
    female:{
        marginLeft:-46  
    },
    
})