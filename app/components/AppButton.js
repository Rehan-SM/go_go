import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native'
import colors from '../config/colors';

export default function AppButton({title, onPress, color=colors.pink}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor:color}]} onPress={onPress}>
            <Text
            style={styles.buttonText}>{title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        borderColor: colors.pink,
        borderRadius:16,
        justifyContent:'center',
        alignSelf:'center',
        padding: 15,
        width: '90%',
        marginBottom: 15
    },
    buttonText:{
        color: 'white',
        fontSize: 22,
        fontFamily: 'RussoOne',
        alignSelf: 'center'
    }


});
