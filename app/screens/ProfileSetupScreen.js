import React from 'react';
import {ImageBackground, View, Text, Button, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView} from 'react-native';

import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

import colors from '../config/colors';
import address from '../config/setup';

import { RadioButton } from 'react-native-paper';

// object schema

const validationSchema = Yup.object().shape({
    tagline: Yup.string().required().label('Tagline'),
    age: Yup.number().max(99).required().positive().integer().label('Age'),
    gender: Yup.string().label('Gender'),
    gamingBase: Yup.string().required().label('Gaming Base')
})


function ProfileSetUpScreen({navigation}) {

    const profilePOST = async (values) => {
        await fetch(`${address}:5000/profile`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                catchPhrase: values.tagline, age: values.age, gamingBase: values.gamingBase})
        })
        .then(resp => {console.log(JSON.stringify(resp)); return resp.json()})
        .then(data => {
            console.log(data)
            navigation.navigate('Login')
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
                    <Text style={styles.title}>ALMOST THERE!</Text>
                </View>
            <Text style={styles.subtitle}>SETTING UP A GAMING PROFILE FOR YOU</Text>                 
            </View>
            
            <Formik
                initialValues={{tagline: '', age:'', gender: '', gamingBase: '' }}
                onSubmit={values => profilePOST(values)}
                validationSchema={validationSchema}

            >
            {({ handleChange,  handleSubmit, errors, setFieldTouched, touched, values}) => (
            <>
            
            <View 
                style={{width: '90%', justifyContent:'center', alignSelf:'center', padding:15, marginBottom:20,backgroundColor:'white', borderRadius:12}}>
                    <AppTextInput 
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon='bullhorn-variant' 
                        placeholder='Gaming Catchphrase'
                        onChangeText={handleChange('tagline')}
                        onBlur={() => setFieldTouched('tagline')}
                        />
                    {touched.tagline && <Text style={{color: 'red'}}>{errors.tagline }</Text>}
                    <AppTextInput 
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="numeric"                        
                        icon='calendar' 
                        placeholder='Age'
                        onChangeText={handleChange('age')}
                        onBlur={() => setFieldTouched('age')}
                        />
                    {touched.age && <Text style={{color: 'red'}}>{errors.age }</Text>}

                    
                    <AppTextInput 
                        autoCapitalize="none"
                        autoCorrect={false}                       
                        icon='map-marker' 
                        placeholder='Gaming Base'
                        onChangeText={handleChange('gamingBase')}
                        onBlur={() => setFieldTouched('gamingBase')}
                        />
                    {touched.gamingBase && <Text style={{color: 'red'}}>{errors.gamingBase }</Text>}

                    <RadioButton.Group
                    onValueChange={handleChange('gender')}
                    value={values.gender}>
                        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                        <View>
                                <Text style={{color: 'grey'}}> Male </Text>
                                <RadioButton color={colors.pink} value='male' />
                        </View>
                        <View>
                                <Text style={{color: 'grey'}}> Female </Text>
                                <RadioButton color={colors.pink} value='female' />
                        </View>
                        </View>

                    </RadioButton.Group>
                    
                    {touched.gender && <Text style={{color: 'red'}}>{errors.gender }</Text>}

                    <Text 
                    style={{
                        alignSelf: 'center', 
                        color: colors.pink, 
                        fontWeight: 'bold',
                        fontSize:16, 
                        marginTop: 25, 
                        marginBottom: 25
                    }}
                    > 
                    Skip this step! 
                    </Text>
                </View>
                <AppButton title="CREATE PROFILE" onPress={() => handleSubmit()} color={colors.green} style={{width: '100%'}} />
            </>
            )}
   </Formik>
            </ScrollView>
            </ImageBackground>
            
            </KeyboardAvoidingView>
            </Screen>
            
    )}

export default ProfileSetUpScreen;

const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontFamily: 'RussoOne',
        color: 'white',
        fontSize: 32
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
        fontSize: 22,
        textAlign: 'center',
    }
        

})