import React, {useEffect, useState} from 'react';
import AppDataTable from '../components/AppDataTable';
import Screen from '../components/Screen';
import AppRecordModal from '../components/AppRecordModal';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import { StyleSheet, View, Text, KeyboardAvoidingView, ScrollView, Button } from 'react-native';
import AppMDateInput from '../components/AppMDateInput';
import { Portal, Provider, RadioButton } from 'react-native-paper';

import { Formik } from 'formik';

import * as Yup from 'yup';

import colors from '../config/colors';
import address from '../config/setup';


export default RecordScore = () => {
    
const [date, setDate] = useState('Date');
const [playerID, setPlayerID] = useState('');
const [game, setGame] = useState('');
const [platform, setPlatform] = useState('');
const [score, setScore] = useState('');
const [visible, setVisible] = useState(false);
let dataSet = {date, playerID, game, platform, score}

    const recordPost = async (values) => {
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
        .then(data => {})
        .catch(fail => {
            console.log(fail)
            throw fail
        })

    }


    return (
    <Provider>
    
    <KeyboardAvoidingView
        style={{flex: 1}}
        behavior='height'
        enabled>
            
    <ScrollView style={styles.container}>
    
    <View 
    style={{
        width: '90%', 
        justifyContent:'center', 
        alignSelf:'center', 
        padding:15, 
        marginTop: 50,
        marginBottom:20,
        backgroundColor:'white', 
        borderRadius:12}}>
    

    <Portal>
        
    <AppMDateInput date={date} setDate={(date) => setDate(date)} visible={visible} setVisible={(visible) => setVisible(visible)} />
    </Portal>
    
    <View style={{marginTop: 60}}>
    <AppTextInput 
        autoCapitalize="none"
        autoCorrect={false}
        icon='account' 
        placeholder='Player ID'
        onChangeText={(playerID) => setPlayerID(playerID)}/>
    <AppTextInput 
        autoCapitalize="none"
        autoCorrect={false}
        icon='microsoft-xbox-controller' 
        placeholder='Game'
        onChangeText={(game) => setGame(game)}/>
    <AppTextInput 
        autoCapitalize="none"
        autoCorrect={false}
        icon='cube' 
        placeholder='Platform'
        onChangeText={(platform) => setPlatform(platform)}/>
    <AppTextInput 
        autoCapitalize="none"
        autoCorrect={false}
        icon='scoreboard' 
        placeholder='Score'
        onChangeText={(score) => setScore(score)}/>

    </View>
    <AppButton 
    title="Record Game" 
    onPress={() => console.log(dataSet)} 
    color={colors.pink} 
    style={{width: '100%'}} />
    
    </View>

    </ScrollView>
    </KeyboardAvoidingView>
    </Provider>
        )
    }   



const styles = StyleSheet.create({
    gameContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyScoreBoardSubtitle:{
        fontFamily: 'RussoOne',
        color: 'white',
        fontSize: 20,
        width: '95%',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    emptyScoreBoardTitle:{
        fontFamily: 'RussoOne',
        color: 'white',
        fontSize: 30,
        width: '95%',

    },
    emptyScoreBoardTextContainer: {
        marginTop: 100,
        backgroundColor: colors.pink,
        padding: 5,
        borderRadius: 15
    },

    container:{
        flex:1,
        borderColor: colors.darkPurple,
        borderWidth: 10,
        backgroundColor: colors.darkPurple,
    },
    containerStyles:{
        opacity:0.4,
        backgroundColor: 'white', 

    },
    topBar:{
        width:'100%',
        height: '8%',
        backgroundColor: colors.darkPurple,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderColor: colors.darkPurple
    },
    topBarFont: {
        fontFamily: 'RussoOne', 
        color:'white',
        fontSize: 40,
        alignSelf: 'center'
    },
    iconButton:{
        alignSelf: 'center',
        position: 'absolute',
        bottom: 80,
        right: 10,
        flexDirection: 'row',
        width: 100,
        height: 100
    }
})
