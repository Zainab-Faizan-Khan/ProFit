import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Components/SplashScreen';
import Home from './Components/Home';
import Start from './Components/Start';
import Name from './Components/register/name';
import Gender from './Components/register/gender';
import Dob from './Components/register/dob';
import KG from './Components/register/weightKg';
import FT from './Components/register/heightft';
import LB from './Components/register/weightLb';
import CM from './Components/register/heightcm';
import Fitness from './Components/register/fitnesslevel';
import daytype from './Components/register/daytype';
import Diet from './Components/register/diet';
import Goal from './Components/register/goal';
import Main from './Components/main';
import Login from './Components/login';


const Stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <SplashScreen/> 
    <NavigationContainer initialRouteName='Home'>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Name" component={Name} />
      <Stack.Screen name="Gender" component={Gender} />
      <Stack.Screen name="Dob" component={Dob} />
      <Stack.Screen name="KG" component={KG} />
      <Stack.Screen name="FT" component={FT} />
      <Stack.Screen name="LB" component={LB} />
      <Stack.Screen name="CM" component={CM} />
      <Stack.Screen name="Fitness" component={Fitness} />
      <Stack.Screen name="daytype" component={daytype} />
      <Stack.Screen name="Diet" component={Diet} />
      <Stack.Screen name="Goal" component={Goal} />
      <Stack.Screen name="Main" component={Main} />
     

    </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

