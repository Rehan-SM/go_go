import React from 'react';
import { StyleSheet, View, FlatList, Text} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Screen from '../components/Screen';
import GamesRender from '../components/GamesRender';

const xx = [
    {
        id: 1,
        link: require('../assets/fifa.jpg'),
        gameName: 'FIFA 22',
        subtitle: 'A game to show your dominance over your friends and put them in their places!'

    },
    {
        id: 2,
        link: require('../assets/billiards.jpg'),
        gameName: 'Billiards',
        subtitle: 'A fun game to play when you do not feel like moving much!'

    },
    {
        id: 3,
        link: require('../assets/monopoly.jpg'),
        gameName: 'Monopoly',
        subtitle: 'If you wish to turn your close friends into fiercest enemies, this is your game!'

    },
    {
        id: 4,
        link: require('../assets/squash.jpg'),
        gameName: 'Squash',
        subtitle: 'Best to play when you are high on 10 cups of coffee as this game requires you to keep running!'

    },


];


export default function GamesList() {

    return (
        <Screen>
        <View style={styles.container}>
        
        <FlatList
        data={xx}
        renderItem={({item}) => <GamesRender xy={item} />}
        keyExtractor={item => item.id}
         />

        </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        width: '100%',
    },
    cardStyle: {
        alignSelf:'center',
        width: 350
    }
})