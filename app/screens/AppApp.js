import React, { createContext }from 'react';
import { StyleSheet, StatusBar } from 'react-native'
import {AppContext}  from '../config/AppContext';
import GamesList from './GamesList';
import Scoreboard from './Scoreboard';
import AccountScreen from './AccountScreen';
import colors from '../config/colors';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableRipple } from 'react-native-paper';
import Constants from 'expo-constants';
import RecordScore from './RecordScore copy';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator(); 

function AppApp({route, navigation}) {

  

  
        
    return (
      <AppContext.Provider value={route.params}>
        {console.log(route.params)}
        <Tab.Navigator 

        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
    
            if (route.name === 'Games') {
              iconName = focused
                ? 'controller-classic'
                : 'controller-classic-outline';
            } else if (route.name === 'Scoreboard') {
              iconName = focused ? 'clipboard-edit' : 'clipboard-edit-outline';
            } else if (route.name === 'Record') {
              iconName = focused ? 'plus-circle' : 'plus-circle-outline';
            } else if (route.name === 'Account') {
              iconName = focused ? 'account-circle' : 'account-circle-outline';
            } else if (route.name === 'Home') {
              iconName = focused ? 'home-circle' : 'home-circle-outline';
            }
    
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'grey',
          tabBarButton: (props) => <TouchableRipple {...props} rippleColor={colors.pink}/>,
          headerStyle : {
            backgroundColor: colors.pink,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontFamily: 'RussoOne',
        },
          tabBarStyle: {
            backgroundColor: colors.darkPurple
          },
        })}>
          <Tab.Screen name='Home' component={HomeScreen} />
          <Tab.Screen name='Games' component={GamesList} />
          <Tab.Screen name='Record' component={RecordScore} />
          <Tab.Screen name='Scoreboard' component={Scoreboard} />
          <Tab.Screen name='Account' component={AccountScreen} />
        </Tab.Navigator>
        </AppContext.Provider>
      )
}

export default AppApp;