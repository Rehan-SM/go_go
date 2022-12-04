import React, {useState} from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {View, Image, Text, StyleSheet } from 'react-native';

import colors from '../config/colors';

// const cardData = {
//     date: '01/01',
//     game: 'FIFA 22',
//     player1: 'Ahmad',
//     player1Picture: require('../assets/gamers/ahmad.jpg'),
//     player2: 'Khalid',
//     player2Picture: require('../assets/gamers/khalid.jpg'),
//     player1Score: '1',
//     player2Score: '2',

// }


function HomeCard({cardData}) {
    
    
    const [like, setLike] = useState(false);
    const [thumbs, setThumbs] = useState(false);
    const [challenge, setChallenge] = useState(false);

    const LeftContent = props => <Text>{cardData.date}</Text>
    return (
    <Card style={{marginBottom: 10}}>
        <Card.Title title="Victory!" titleStyle={{fontFamily: 'RussoOne'}} subtitle={`${cardData.player1} defeats ${cardData.player2} in ${cardData.game}`} subtitleStyle={{fontSize: 14}} right={LeftContent} rightStyle={{marginRight: 30}}/>
        <Card.Content>
        
            <View style={styles.view2}>
                <View style={styles.view3}>
                    <Image
                    source={cardData.player1Picture}
                    style={{borderRadius: 40, width: 70, height: 70}}
                    resizeMode='contain'
                    />
                    <Text style={{fontFamily: 'RoboTech', fontSize: 20}}> {cardData.player1} </Text>
                </View>
            
                <View style={styles.view4}>
                <Text style={styles.scoreText}> {cardData.player1Score} </Text>
                <Text style={styles.scoreText}> - </Text>
                <Text style={styles.scoreText}> {cardData.player2Score} </Text> 
                </View>
                
                <View style={styles.view3}>
                <Image
                    source={cardData.player2Picture}
                    style={{borderRadius: 40, width: 70, height: 70}}
                    resizeMode='contain'
                    />
                    <Text style={{fontFamily: 'RoboTech', fontSize: 20}}> {cardData.player2} </Text>
                </View>
                
            </View>
            
        </Card.Content>
        <Card.Actions>
            <View style={{width: '100%', alignItems: 'stretch', justifyContent: 'space-between', flexDirection: 'row'}}>
        <Button onPress={() => setLike(like? false: true)}>
            {!like && <MaterialCommunityIcons name='thumb-up-outline' size={20} color={colors.pink} style={styles.icon} />}
            {like && <MaterialCommunityIcons name='thumb-up' size={30} color={colors.pink} style={styles.icon} />}
        </Button>        
        <Button onPress={() => setThumbs(thumbs? false: true)}>
            {!thumbs && <MaterialCommunityIcons name='thumb-down-outline' size={20} color={colors.pink} style={styles.icon} />}
            {thumbs && <MaterialCommunityIcons name='thumb-down' size={30} color={colors.pink} style={styles.icon} />}
        </Button>        
        <Button onPress={() => setChallenge(challenge? false: true)}>
            {!challenge && <MaterialCommunityIcons name='gamepad-outline' size={20} color={colors.pink} style={styles.icon} />}
            {challenge && <MaterialCommunityIcons name='gamepad' size={30} color={colors.pink} style={styles.icon} />}
        </Button> 
        </View>       
        </Card.Actions>
        </Card>
    );
}

export default HomeCard;

const styles = StyleSheet.create({
    view2: {
        flex: 9,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    view3: {
        alignItems: 'center'
    },
    view4: {
        flexDirection: 'row'
    },
    view5: {

    },

    scoreText: {
        fontFamily: 'RussoOne',
        fontSize: 32
    },
})