import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Components/SplashScreen';
import Home from './Components/Home';
import Start from './Components/Start';
import SignUp from './Components/SignUp';

import Main from './Components/main1';
import Login from './Components/login';
import FP1 from './Components/FP1';
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

      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />

      <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
      <Stack.Screen name="FP1" component={FP1} options={{ headerShown: false }} />
     
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

