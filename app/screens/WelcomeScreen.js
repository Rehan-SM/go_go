import React from 'react';
import {ImageBackground, View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Screen from '../components/Screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppButton from '../components/AppButton'

import colors from '../config/colors'


function WelcomeScreen({navigation}) {

    return (
            <Screen>
            <ImageBackground
            source={require('../assets/welcomeScreen.png')}
            resizeMode='cover'
            style={styles.background}>
            
            <Image
            source={require('../assets/welcomeScreenIcon.png')}
            style={styles.logo}
            resizeMode='contain' />

            <View style={styles.titleContainer}>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.title}>GAME</Text><Text style={styles.titletwo}>ON!</Text>
                </View>
                 
            </View>
            <Text style={styles.subtitle}>CHALLENGE YOUR FRIENDS</Text>

            <View style={{width: '80%', justifyContent:'center', alignItems:'center', marginTop: 300}}>
            <AppButton title='LOGIN' onPress={() => navigation.navigate('Login')} />
            <AppButton title='REGISTER' onPress={() => navigation.navigate('Signup')} color={colors.green}/>
            </View>
            </ImageBackground>
            </Screen>
    )}

export default WelcomeScreen;

const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        justifyContent: 'center',
        alignContent: 'center',
        width: 80,
        height: 80,
        position: 'absolute',
        top: 155,
        left: 30
    },

    title:{
        fontFamily: 'RussoOne',
        color: 'white',
        fontSize: 48
    },
    titletwo:{
        fontFamily: 'RussoOne',
        color: colors.pink,
        fontSize: 48        
    },
    titleContainer:{
        alignItems: 'center',
        position: 'absolute',
        top: 167,
        left: 120
    },

    subtitle:{
        fontFamily: 'RoboTech',
        color: 'white',
        fontSize: 32,
        position: 'absolute',
        top: 230
    }
        

})