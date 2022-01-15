import React, {Component,describe} from 'react';
import {View, Text, Animated, StyleSheet, Easing,Image} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import UploadImage from './uploadImg';


export default class Circle extends Component {
    
    constructor() {
        super();
        this.animated = new Animated.Value(0);
        var inputRange = [0, 1];
        var outputRange = ['0deg', '360deg'];
        this.rotate = this.animated.interpolate({inputRange, outputRange});
        outputRange = ['0deg', '-360deg'];
        this.rotateOpposit = this.animated.interpolate({inputRange, outputRange});
    }

    componentDidMount() {
        this.animate();
    }

    animate() {
      Animated.loop(
        Animated.timing(this.animated, {
            toValue: 1,
            duration: 14000,
            useNativeDriver: true,
            easing: Easing.linear,
        }),
      ).start();
    }
    render() {
        const transform = [{rotate: this.rotate}];
        const transform1 = [{rotate: this.rotateOpposit}];
        return (
          <View style={styles.container}>
            <Animated.View style={[styles.item, {transform}]}>
              <Animated.View style={[styles.dot, {transform: transform1}]}>
              <UploadImage/>
              </Animated.View>
            </Animated.View>
          </View>
        );
    }
 }
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: wp("10%"),
        marginRight: wp("70%"),
        marginTop:hp('4%')
       
    },
    item: {
        
        width: 80,
        height: 140, // this is the diameter of circle
        
    },
    dot: {
        width: '100%',
        height: 100,
        backgroundColor: 'transparent',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:120,
        borderWidth:10,
        borderColor:'grey'
  
    },
    
 });