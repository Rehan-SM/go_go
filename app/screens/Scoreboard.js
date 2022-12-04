import React, {useEffect, useState} from 'react';
import AppDataTable from '../components/AppDataTable';
import Screen from '../components/Screen';
import AppRecordModal from '../components/AppRecordModal';
import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList, ImageBackground  } from 'react-native';
import colors from '../config/colors';

const fifaScore = [
    {
      id: 10,
      name: 'Rehan Shaik',
      wins:10,
      losses:2,
      score: 10
    },
    {
      id: 9,
      name: 'Ahmad Khashabi',
      wins:4,
      losses:2,
      score: 9
    },
    {
      id: 8,
      name: 'Danish Sange',
      wins:10,
      losses:2,
      score: 8
    },
    {
      id:2,
      name: 'Khalid Fakhroo',
      wins:8,
      losses:4,
      score: 6    
    },
    {
      id:12,
      name: 'Yusuf Atheeq',
      wins:2,
      losses:4,
      score: 1    
    }
  ];

// const fifaScore = null

function Scoreboard(props) {
    const [visible, setIsVisible] = useState(false);
    
    const hideModal = () => setIsVisible(false);
    const showModal = () => setIsVisible(true);

    
    if (fifaScore) {
        return (
    <View style={styles.container}>
    
    <View >
        <FlatList
        data={fifaScore}
        renderItem={({item}) => <AppDataTable data={item} />} 
        keyExtractor={item => item.id}/>
         
    </View>
    {/* <AppRecordModal visible={visible} onDismiss={hideModal} style={styles.containerStyles}/>
    
    <TouchableOpacity style={styles.iconButton} onPress={showModal}>
        <Image
        source={require('../assets/GoButton.png')}
        resizeMode='contain'
        style={{width: 100, height: 100}}/>
    </TouchableOpacity>    */}

    </View>
        )
        }
    else {
        return (
        <ImageBackground
        resizeMode='cover'
        source={require('../assets/scoreboardEmpty.jpg')}
        style={styles.imageContainer} 
        blurRadius={3}>
        
       <View style={styles.emptyScoreBoardTextContainer}>
       <Text 
       numberOfLines={1}
       style={styles.emptyScoreBoardTitle}>
                BATTLE YOUR FRIENDS!  
        </Text>
       <Text style={styles.emptyScoreBoardSubtitle}>
                to display the ScoreBoard  
        </Text>
        </View>
        <AppRecordModal visible={visible} onDismiss={hideModal} style={styles.containerStyles}/>
    
    <TouchableOpacity style={styles.iconButton} onPress={showModal}>
        <Image
        source={require('../assets/GoButton.png')}
        resizeMode='contain'
        style={{width: 100, height: 100}}/>
    </TouchableOpacity> 

        </ImageBackground>
        
        
        
        
        )
    }
}

export default Scoreboard;

const styles = StyleSheet.create({
    imageContainer: {
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