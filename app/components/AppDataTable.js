import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
// or any pure javascript modules available in npm
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

// data from server

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
    name: 'Danish Sange',
    wins:10,
    losses:2,
    score: 8
  },
  {
    id:2,
    name: 'Yusuf Atheeq',
    wins:10,
    losses:2,
    score: 10    
  }
];






export default function AppDataTable({data}) {
  const LeftContent = props => <Avatar.Icon {...props} icon="trophy-variant" />
  const RightContent = props => <Avatar.Text {...props} size={24} label={data.score} style={{marginRight: 25}} />

  
  return (
  <View style={styles.container}>
  <Card mode='elevated' elevation={4}>
    <Card.Title 
    title={data.name} 
    subtitle={`${data.wins} wins and ${data.losses} losses`} 
    left={LeftContent}
    right={RightContent} />
  </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});


