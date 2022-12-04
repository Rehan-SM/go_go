import React, {useEffect, useState} from 'react';
import AppDataTable from '../components/AppDataTable';
import Screen from '../components/Screen';
import AppRecordModal from '../components/AppRecordModal';
import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList, ImageBackground  } from 'react-native';


import colors from '../config/colors';
import { ScrollView } from 'react-native';
import HomeCard from '../components/HomeCard';



const homeContent = [
    {
    date: '01/01',
    game: 'FIFA 22',
    player1: 'Ahmad',
    player1Picture: require('../assets/gamers/ahmad.jpg'),
    player2: 'Khalid',
    player2Picture: require('../assets/gamers/khalid.jpg'),
    player1Score: '4',
    player2Score: '4',
},
    {
    date: '02/01',
    game: 'FIFA 22',
    player1: 'Danish',
    player1Picture: require('../assets/gamers/danish.jpg'),
    player2: 'Yusuf',
    player2Picture: require('../assets/gamers/yusuf.jpg'),
    player1Score: '0',
    player2Score: '5',
},
    {
    date: '03/01',
    game: 'FIFA 22',
    player1: 'Yusuf',
    player1Picture: require('../assets/gamers/yusuf.jpg'),
    player2: 'Ahmad',
    player2Picture: require('../assets/gamers/ahmad.jpg'),
    player1Score: '4',
    player2Score: '4',
},
    {
    date: '04/01',
    game: 'FIFA 22',
    player1: 'Rehan',
    player1Picture: require('../assets/gamers/rehan.jpg'),
    player2: 'Yusuf',
    player2Picture: require('../assets/gamers/yusuf.jpg'),
    player1Score: '3',
    player2Score: '2',
},
    {
    date: '05/01',
    game: 'FIFA 22',
    player1: 'Danish',
    player1Picture: require('../assets/gamers/danish.jpg'),
    player2: 'Rehan',
    player2Picture: require('../assets/gamers/rehan.jpg'),
    player1Score: '4',
    player2Score: '1',
},

]





function HomeScreen(props) {

    
    if (homeContent) {
        return (
            <View
            style={styles.imageContainer}>
            
                <FlatList
                data={homeContent}
                renderItem={({item}) => <HomeCard cardData={item} />} 
                keyExtractor={item => item.date}/>
                        
            </View>
        )
        }
    else {
        return (
        <ScrollView
        style={styles.imageContainer}>
        
       <View style={styles.emptyHomeScreenTextContainer}>
            <FlatList
            data={homeContent}
            renderItem={({item}) => <HomeCard cardData={item} />} 
            keyExtractor={item => item.date}/>
        
        </View>
        
        </ScrollView>
        
        )
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        paddingRight: 10,
        paddingLeft: 10,
    },

    

    emptyHomeScreenSubtitle:{
        fontFamily: 'RussoOne',
        color: 'white',
        fontSize: 20,
        width: '95%',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    emptyHomeScreenTitle:{
        fontFamily: 'RussoOne',
        color: 'white',
        fontSize: 30,
        width: '95%',

    },
    emptyHomeScreenTextContainer: {
        marginTop: 100,
        backgroundColor: '#e5e5e5',
        padding: 5,
        borderRadius: 10,
        width: '95%',
        shadowcolor: 'grey', 
        shadowOffset: {
            width: 10,
            height: 10
        },
        elevation: 100,
        shadowOpacity: 10,
        shadowRadius: 10,
        alignSelf:'center'
    },

    container:{
        flex:1,
        borderColor: colors.darkPurple,
        borderWidth: 10,
        backgroundColor: colors.darkPurple
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