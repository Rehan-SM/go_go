import {React, useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import AppApp from './app/screens/AppApp';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import AccountScreen from './app/screens/AccountScreen';
import ProfileSetUpScreen from './app/screens/ProfileSetupScreen';
import RecordScore from './app/screens/RecordScore copy';
import AppMDateInput from './app/components/AppMDateInput';
import HomeScreen from './app/screens/HomeScreen';
import SearchScreen from './app/screens/SearchScreen';


const Stack = createNativeStackNavigator();

export default function App() {

const [IsReady, setIsReady] = useState(false);

  useFonts = async () => {
  await Font.loadAsync({
    "RussoOne": require("./app/assets/fonts/Russo_One.ttf"),
    "RoboTech": require("./app/assets/fonts/robot.ttf"),
  });
};
  
  const LoadFonts = async () => {
      await useFonts();

  }

  if (!IsReady) {
      return (
          <AppLoading
          startAsync={LoadFonts}
          onFinish={() => setIsReady(true)}
          onError={() => console.log('Error')} />
      )
  }

  return (
    <RecordScore />
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
    //     <Stack.Screen name='Welcome' component={WelcomeScreen} />
    //     <Stack.Screen name='Login' component={LoginScreen} />
    //     <Stack.Screen name='Signup' component={RegisterScreen} />
    //     <Stack.Screen name='ProfileSetup' component={ProfileSetUpScreen} />
    //     <Stack.Screen name='Inside' component={AppApp} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

