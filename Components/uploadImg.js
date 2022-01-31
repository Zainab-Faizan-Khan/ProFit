import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'
import firebase from '../firebase';
import User from './User';
export default function UploadImage() {
  const [image, setImage] = useState(null);
  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });

if(_image.uri){
    
   firebase.db.collection('users').doc(User.getid()).update({


img:_image.uri,




})
User.setimg(_image.uri)
    if (!_image.cancelled) {
      setImage(_image.uri);
    }
  }
 else{} 
  }

  return (
            <View style={imageUploaderStyles.container}>
                
                   <Image source={{ uri: User.getimg() }} style={{ width: 100, height: 100 }} />
                
                    
                    <View style={imageUploaderStyles.uploadBtnContainer}>
                        <TouchableOpacity onPress={addImage} style={imageUploaderStyles.uploadBtn} >
                           
                            <AntDesign name="camera" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
              

            </View>
   
  );
}

const imageUploaderStyles=StyleSheet.create({
    container:{
        elevation:2,
        height:100,
        width:100, 
        backgroundColor:'#efefef',
        position:'relative',
        borderRadius:999,
        overflow:'hidden',
    },
    uploadBtnContainer:{
        opacity:0.8,
        position:'absolute',
        alignItems:'center',
        marginTop:80,
        backgroundColor:'lightgrey',
        width:'100%',
        height:'50%',
    },
    uploadBtn:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center'
    }
})