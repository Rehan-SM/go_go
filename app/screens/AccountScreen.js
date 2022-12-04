import React, {useContext, useEffect} from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import {AppContext}  from '../config/AppContext';
import Constants from 'expo-constants';
import { Button, List, Menu, Provider, ActivityIndicator } from 'react-native-paper';
import colors from '../config/colors';
import address from '../config/setup';

function AccountScreen({navigation}) {

    const {user} = useContext(AppContext)

    const [userSe, setUser] = React.useState("");
    const [tagline, setTagline] = React.useState("");
    const [age, setAge] = React.useState("");
    const [score, setScore] = React.useState("");
    const [wins, setWins] = React.useState("");
    const [losses, setLosses] = React.useState("");
    const [gamingbase, setGamingBase] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);
  
    const closeMenu = () => setVisible(false);

    const viewProfile = async (values) => {
        setLoading(true);
        await 
        fetch(`${address}:5000/api/profile/${user}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(resp => {return resp.json()})
        .then(data => {
            setUser(data.user)
            setTagline(data.tagline)
            setAge(data.age)
            setScore(data.score)
            setWins(data.wins)
            setLosses(data.losses)
            setGamingBase(data.gamingbase)
            setLoading(false)
        })
        .catch(fail => {
            console.log(fail)
            throw fail
        })
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            viewProfile()
        });
        return unsubscribe;
      }, [navigation]);


    if (loading) {
        return (
            <Provider>
                <ScrollView>
                    <View style={styles.container}>
                    <ActivityIndicator animating={true} />
                    </View>
                </ScrollView>
            </Provider>
        )
    }
    else {
        return (
            <Provider>
            <ScrollView>
                
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <Image 
                        source={require('../assets/icon.png')}
                        style={styles.imageStyle}/>
                        <View style={styles.profileContainer}
                        >
                            <Text style={styles.textStyle}>
                                {userSe}
                            </Text>
                            <View style={styles.profile}>
                            <View style={[styles.profileStatsContainer, {marginLeft: 0}]}>
                                <Text style={styles.textLabel}>
                                    {score}
                                </Text>
                                <Text  style={styles.textKey}>
                                    Score
                                </Text>
                            </View>
                            <View style={styles.profileStatsContainer}>
                                <Text style={styles.textLabel}>
                                    {wins}
                                </Text>
                                <Text style={styles.textKey}>
                                    Wins
                                </Text>
                            </View>
                            <View style={styles.profileStatsContainer}>
                                <Text style={styles.textLabel}>
                                    {losses}
                                </Text>
                                <Text style={styles.textKey}>
                                    Losses
                                </Text>
                            </View>
                            </View>
                        </View>
                    </View>
                    
                    <View style={styles.container2}>
                    <Button
                    mode='outlined'
                    onPress={() => console.log('Pressed')}
                    style={styles.profileButton}
                    color={colors.pink}
                    >
                        Challenge
                    </Button>
                    <Button
                    mode='outlined'
                    onPress={() => console.log('Pressed')}
                    style={styles.profileButton}
                    color={colors.pink}
                    >
                        Message
                    </Button>
                    
                        <Menu
                        style={{margin: 0}}
                        visible={visible}
                        onDismiss={closeMenu}
                        anchor={
                        <Button onPress={openMenu} icon='dots-vertical' color={colors.pink}></Button>
                        }>
                        <Menu.Item onPress={() => {console.log('Pressed')}} title="Edit Profile" />
                        <Menu.Item onPress={() => {console.log('Pressed')}} title="Add Profile to Favorites" />
                        </Menu>
                    
                    </View>
                    
                    <View style={styles.container3}>
        
                        <List.Section>
                        
                        <List.Subheader> 
                            About Me
                        </List.Subheader>
        
                        <List.Item
                        title={'Tagline'}
                        description={tagline}
                        titleStyle={{
                            fontSize: 12,
                            fontWeight: 'bold'
                        }} />
        
                        <List.Item
                        title={'Age'}
                        description={age}
                        titleStyle={{
                            fontSize: 12,
                            fontWeight: 'bold'
                        }} />
        
                        <List.Item
                        title={'Gender'}
                        description={'Male'}
                        titleStyle={{
                            fontSize: 12,
                            fontWeight: 'bold'
                        }} />
        
                        
                        <List.Item
                        title={'Gaming Base'}
                        description={gamingbase}
                        titleStyle={{
                            fontSize: 12,
                            fontWeight: 'bold'
                        }} />
        
                        <List.Subheader> 
                            Games Played
                        </List.Subheader>
        
                        <List.Item
                        title="Monopoly"
                        left={() => <List.Icon icon='trophy' /> }
                        />
                        <List.Item
                        title="Billiards"
                        left={() => <List.Icon icon='trophy' /> }
                        />
                        </List.Section>
                    </View> 
                </View>
                    
                    </ScrollView>
                    </Provider>
            );
    }


}

export default AccountScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyItems: 'center',
        alignItems: 'flex-start',
        paddingTop: Constants.statusBarHeight,
    },
    headerContainer: {
        flex: 2,
        flexDirection: 'row',
        width: '100%',
    },
    container2: {
        flex: .45,
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 10
    },
    container3: {
        flex: 7.55,
        width: '100%',
    },
    imageStyle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        marginLeft: 20,
    },
    profileContainer:{
        justifyContent: 'center',
        marginLeft: 30,
    },
    profile: {
        flexDirection: 'row'
    },
    profileStatsContainer : {
        justifyItems: 'center',
        alignSelf: 'center',
        marginLeft: 25

    },
    textStyle: {
        fontFamily: 'RussoOne',
        fontSize: 32
    },
    textKey: {
        fontSize: 16,
    },
    textLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    profileButton: {
        alignSelf: 'center',
        width: 150,
        marginLeft: 10,
        marginRight: 10,
    },
})