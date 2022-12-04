import React, { useState } from 'react';
import {ImageBackground, View, Text, Button, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView} from 'react-native';

import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import colors from '../config/colors'
import address from '../config/setup'

function LoginScreen({navigation}) {

    const loginPOST = async (values) => {
        await fetch(`${address}:5000/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username, password: password
            })
        })
        .then(resp => {console.log(JSON.stringify(resp)); return resp.json()})
        .then(data => {
            if (data['Validation'] === "True") {
                navigation.navigate('Inside', {user: data['User']})
            }
            else {
                navigation.navigate('Login')
                console.log(data)
            }
            
        })
        .catch(fail => {
            console.log(fail)
            throw fail
        })
    }

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <KeyboardAvoidingView
        style={{flex: 1}}
        behavior=''
        enabled>
            
            <ImageBackground
            source={require('../assets/RegisterScreen.png')}
            resizeMode='cover'
            style={styles.background}>

            <View style={styles.titleContainer}>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.title}>LOG IN</Text>
                </View>
            <Text style={styles.subtitle}>WELCOME BACK</Text>                 
            </View>


            <View style={{width: '90%', justifyContent:'center', alignItems:'center', marginTop: 150, padding:20, marginBottom:20,backgroundColor:'white', borderRadius:12}}>
            
                <AppTextInput icon='email' placeholder='Email' onChangeText={newText => setUserName(newText)}/>
                <AppTextInput icon='lock' placeholder='Password' onChangeText={newText => setPassword(newText)} secureTextEntry />
            
            </View>
            <AppButton title="LOGIN" onPress={() => loginPOST() } color={colors.pink} />
            
            </ImageBackground>
            
            </KeyboardAvoidingView>
    )}

export default LoginScreen;

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
        justifyContent: 'flex-start',
        position: 'absolute',
        top: 85
    },

    subtitle:{
        fontFamily: 'RoboTech',
        color: 'white',
        fontSize: 32,
        textAlign: 'center'
    }
        

})