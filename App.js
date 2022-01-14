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
import FP1 from './Components/FP1';
import FP2 from './Components/FP2.js';
import FP3 from './Components/FP3';
import pro from './Components/profile';
import Exercise1 from './Components/Exercise1';
import Exercise2 from './Components/Exercise2';
import Exercise3 from './Components/Exercise3';
import Feedback from './Components/feedback';
import EA from './Components/exerciseAll';


const Stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <SplashScreen/> 
    <NavigationContainer initialRouteName='Home'>
    <Stack.Navigator

  >
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Start" component={Start} options={{ headerShown: false }}  />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Name" component={Name}  options={{ headerShown: false }} />
      <Stack.Screen name="Gender" component={Gender} options={{ headerShown: false }}  />
     
      <Stack.Screen name="KG" component={KG} options={{ headerShown: false }} />
      <Stack.Screen name="FT" component={FT} options={{ headerShown: false }} />
      <Stack.Screen name="LB" component={LB} options={{ headerShown: false }} />
      <Stack.Screen name="CM" component={CM} options={{ headerShown: false }} />
      <Stack.Screen name="Fitness" component={Fitness} options={{ headerShown: false }} />
      <Stack.Screen name="daytype" component={daytype} options={{ headerShown: false }} />
      <Stack.Screen name="Diet" component={Diet} options={{ headerShown: false }} />
      <Stack.Screen name="Goal" component={Goal} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
      <Stack.Screen name="FP1" component={FP1} options={{ headerShown: false }} />
      <Stack.Screen name="FP2" component={FP2} options={{ headerShown: false }} />
      <Stack.Screen name="FP3" component={FP3} options={{ headerShown: false }} />
      <Stack.Screen name="pro" component={pro} options={{ headerShown: false }} />
    
      <Stack.Screen name="Exercise1" component={Exercise1} options={{ headerShown: false }} />
      <Stack.Screen name="Exercise2" component={Exercise2} options={{ headerShown: false }} />
      <Stack.Screen name="Exercise3" component={Exercise3} options={{ headerShown: false }} />
      <Stack.Screen name="Feedback" component={Feedback} options={{ headerShown: false }} />
      <Stack.Screen name="EA" component={EA} options={{ headerShown: false }} />
     

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

