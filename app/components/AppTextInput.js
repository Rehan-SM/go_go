import React from 'react';
import { TextInput, StyleSheet, View, Pressable } from 'react-native';
import Screen from './Screen';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../config/colors';

export default function AppTextInput({icon, ...otherProps}) {
    const textInput = React.useRef(null);

    function handleClick() {
        textInput.current.focus();
    };
    
    return (
        <Pressable style={styles.container} onPress={handleClick}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.pink} style={styles.icon}/>}
            <TextInput ref={textInput} style={styles.textInputStyle} {...otherProps}>
            </TextInput>
        </Pressable>
    );
}

 const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff0',
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        marginVertical: 10,
        borderColor: colors.pink,
        borderBottomWidth: 1,
        alignSelf: 'center'
    },
    textInputStyle:{
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
        color: 'grey',
        alignSelf: 'stretch'
    },
    icon:{
        paddingRight: 5,
        marginTop: 3
    }
})