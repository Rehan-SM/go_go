import React from 'react';
import {ImageBackground, View, Text, Button, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView} from 'react-native';

import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import { Formik } from 'formik';
import * as Yup from 'yup';

import colors from '../config/colors';
import address from '../config/setup';

// object schema

const validationSchema = Yup.object().shape({
    userName: Yup.string().required().label('Username'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
    confirmPassword: Yup.string().required().oneOf([Yup.ref('password'),null], 'Password must match')
})


function RegisterScreen({navigation}) {

    const signupPOST = async (values) => {
        await fetch(`${address}:5000/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: values.userName, email: values.email, password: values.password, confirmPassword: values.confirmPassword
            })
        })
        .then(resp => {console.log(JSON.stringify(resp)); return resp.json()})
        .then(data => {
            console.log(data)
            navigation.navigate('ProfileSetup')
        })
        .catch(fail => {
            console.log(fail)
            throw fail
        })
    }

    return (
        <Screen>
        <KeyboardAvoidingView
        style={{flex: 1}}
        behavior='height'
        enabled>
            
            <ImageBackground
            source={require('../assets/RegisterScreen.png')}
            resizeMode='cover'
            style={styles.background}>


<ScrollView style={{flex: 1, width: '100%'}}>
            <View style={styles.titleContainer}>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.title}>SIGN UP</Text>
                </View>
            <Text style={styles.subtitle}>A WORLD OF COMPETITION AWAITS YOU</Text>                 
            </View>


            
            <Formik
                initialValues={{userName: '', email:'', password:'', confirmPassword: '' }}
                onSubmit={values => signupPOST(values)}
                // validationSchema={validationSchema}

            >
            {({ handleChange,  handleSubmit, errors, setFieldTouched, touched, values}) => (
            <>
            
            <View 
                style={{width: '90%', justifyContent:'center', alignSelf:'center', padding:15, marginBottom:20,backgroundColor:'white', borderRadius:12}}>
                    <AppTextInput 
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon='account' 
                        placeholder='Username'
                        onChangeText={handleChange('userName')}
                        onBlur={() => setFieldTouched('userName')}
                        />
                    {touched.userName && <Text style={{color: 'red'}}>{errors.userName }</Text>}
                    <AppTextInput 
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"                        
                        icon='email' 
                        placeholder='Email'
                        onChangeText={handleChange('email')}
                        onBlur={() => setFieldTouched('email')}
                        />
                    {touched.email && <Text style={{color: 'red'}}>{errors.email }</Text>}
                    <AppTextInput 
                        autoCapitalize="none"
                        autoCorrect={false}                      
                        icon='lock' 
                        placeholder='Password'
                        secureTextEntry
                        onChangeText={handleChange('password')}
                        onBlur={() => setFieldTouched('password')}
                        />
                    {touched.password && <Text style={{color: 'red'}}>{errors.password }</Text>}
                    <AppTextInput 
                        autoCapitalize="none"
                        autoCorrect={false}                       
                        icon='lock-check' 
                        placeholder='Confirm Password'
                        secureTextEntry
                        onChangeText={handleChange('confirmPassword')}
                        onBlur={() => setFieldTouched('confirmPassword')}
                        />
                    {touched.confirmPassword && <Text style={{color: 'red'}}>{errors.confirmPassword }</Text>}
                </View>
                <AppButton title="REGISTER" onPress={() => handleSubmit()} color={colors.green} style={{width: '100%'}} />
            
            </>
            )}
   </Formik>
            </ScrollView>
            </ImageBackground>
            
            </KeyboardAvoidingView>
            </Screen>
            
    )}

export default RegisterScreen;

const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
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
        justifyContent: 'center',
        top: 100,
        marginBottom: 130
    },

    subtitle:{
        fontFamily: 'RoboTech',
        color: 'white',
        fontSize: 32,
        textAlign: 'center',
    }
        

})