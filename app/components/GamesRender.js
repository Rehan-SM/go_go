import React from 'react';
import { StyleSheet, View, FlatList, Text} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, TouchableRipple } from 'react-native-paper';
import Screen from './Screen';
import colors from '../config/colors';


export default function GamesRender({xy}) {

    return (
        <TouchableRipple
        onPress={() => console.log("Presed")}
        
        >
        <Card 
        mode='elevated'
        elevation={3} 
        style={styles.cardStyle}>

            <Card.Content 
            style={{paddingTop:0}}>

            <Card.Cover 
            source={xy.link}
            style={{width: 350, height:250 ,alignSelf: 'center',}} />
            </Card.Content>
            
            <Card.Title 
            title={xy.gameName} 
            titleStyle={{fontFamily:'RussoOne', fontSize:30, marginTop: 10}}
            subtitle={xy.subtitle} 
            subtitleStyle={{marginBottom:8}}
            subtitleNumberOfLines={2} />
        
        </Card>
        </TouchableRipple>
        )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        width: '100%',
    },
    cardStyle: {
        alignSelf:'center',
        width: 350,
        marginTop: 13,
        marginBottom:13
    }
})