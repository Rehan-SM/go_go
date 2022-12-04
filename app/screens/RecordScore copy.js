import React, {useEffect, useState} from 'react';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import { StyleSheet, View, Text, KeyboardAvoidingView, ScrollView, Button } from 'react-native';
import AppMDateInput from '../components/AppMDateInput';
import { Portal, Provider, RadioButton } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import colors from '../config/colors';
import address from '../config/setup';
import { Picker } from '@react-native-picker/picker';


export default RecordScore = () => {

    const {control, handleSubmit, errors} = useForm();

    const [visible, setVisible] = useState(false);

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
    
    <View style={{marginTop: 60}}>
        <Controller
            control = {control}
            render = {( {onChange, onBlur, value}) => (
                <AppTextInput
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    placeholder="Insert ID here"
                    />
            )}
            name="PlayerID"
            rules={{required: true}}
            defaultValue=""
            />
            {errors.PlayerID && <Text>Player ID is required</Text>}
        <Controller
            control = {control}
            render = {( {onChange, onBlur, value}) => (
                <Portal>
                <AppMDateInput 
                date={value}
                setDate={(value) => onChange(value)}
                visible={visible}
                setVisible={(visible) => setVisible(visible)}
                placeholder="Date"
                />
                </Portal>
            )}
            name="Date"
            rules={{required: true}}
            defaultValue=""
            />
            {errors.Date && <Text>Date is Required</Text>}
        <Controller
            control = {control}
            render = {( {onChange, onBlur, value}) => (
                <Picker
                selectedValue={value}
                onValueChange={(itemValue, itemIndex) =>
                    onChange(itemValue)
                }
                >
                    <Picker.Item label='FIFA 23' value='fifa23' />
                    <Picker.Item label='Squash' value='squash' />
                    <Picker.Item label='Billiards' value='billiards' />
                </Picker>
            )}
            name="Game"
            rules={{required: true}}
            defaultValue=""
            />
            {errors.Game && <Text>Game is required</Text>}

    </View>
    <AppButton 
    title="Record Game" 
    onPress={handleSubmit(data => console.log(data))}
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
