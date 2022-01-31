import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Components/SplashScreen';
import Start from './Components/Start';
import SignUp from './Components/SignUp';
import Diet from './Components/diet';
import Main from './Components/main1';
import Login from './Components/login';
import FP1 from './Components/FP1';

import Exercise1 from './Components/Exercise1';
import Exercise2 from './Components/Exercise2';
import Exercise3 from './Components/Exercise3';
import Feedback from './Components/feedback';
import EA from './Components/exerciseAll';
import Sidenav from './Components/sideNav';
import Detail from './Components/detail';

import { NavigationContainer,DarkTheme } from '@react-navigation/native';
const Stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <SplashScreen />
      <NavigationContainer initialRouteName="Home" theme={DarkTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Start"
            component={Start}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FP1"
            component={FP1}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Pro"
            component={Pro}
            options={{ headerShown: false }}
          />

      <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
      <Stack.Screen name="FP1" component={FP1} options={{ headerShown: false }} />
     
      
    
      <Stack.Screen name="Exercise1" component={Exercise1} options={{ headerShown: false }} />
      <Stack.Screen name="Exercise2" component={Exercise2} options={{ headerShown: false }} />
      <Stack.Screen name="Exercise3" component={Exercise3} options={{ headerShown: false }} />
      <Stack.Screen name="Feedback" component={Feedback} options={{ headerShown: false }} />
      <Stack.Screen name="EA" component={EA} options={{ headerShown: false }} />
      <Stack.Screen name="Sidenav" component={Sidenav} options={{ headerShown: false }} />
  
           <Stack.Screen name="Diet" component={Diet} options={{ headerShown: false }} />

          <Stack.Screen
            name="Diet"
            component={Diet}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
