import React, { useState } from 'react';
import { StyleSheet, View, Platform, Text, Pressable, Button } from 'react-native';
import AppTextInput from './AppTextInput';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Modal, Portal, Provider} from 'react-native-paper'
import DatePicker from 'react-native-modern-datepicker';


export default function AppMDateInput({date, setDate, visible, setVisible}) {

  

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return(
    <>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle}>          
        <View>
        <DatePicker
          onSelectedChange={date => setDate(date)} />
        
        <Button title='Close' onPress={hideModal} />
        </View>
        </Modal>
      
    

      <Pressable style={styles.container} onPress={showModal}>
            <MaterialCommunityIcons name='calendar' size={20} color={colors.pink} style={styles.icon} />
            <View style={styles.textInputStyle}>
            <Text style={{fontSize:18, color: 'grey'}}>{date.substring(0,10)}</Text>
            </View>
      </Pressable>
      </>
    




  )


}
  // )  

const styles = StyleSheet.create({
  container:{
      backgroundColor: 'white',
      flexDirection: 'row',
      width: '78%',
      padding: 10,
      marginTop: 80,
      borderColor: colors.pink,
      borderBottomWidth: 1,
      alignSelf: 'center'
  },
  containerStyle: {
    padding: 10,
    borderRadius: 60,
    flex: 1

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
  },
  button: {
    width: 100
  }
})