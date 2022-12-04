import React, { useState } from 'react';
import { StyleSheet, View, Platform, Button, Text, Pressable } from 'react-native';
import { DateTimePickerAndroid, DateTimePicker } from '@react-native-community/datetimepicker'
import AppTextInput from './AppTextInput';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';


export default function AppDateInput({dateValue, handleDate, ...otherProps}) {
    
    if (Platform.OS === 'android') {

        const showMode = (currentMode) => {
          DateTimePickerAndroid.open({
            value: dateValue,
            onChange: handleDate,
            mode: currentMode,
            is24Hour: true,
            ...otherProps
          });
        };
      
        const showDatepicker = () => {
          showMode('date');
        };

        return (
            <Pressable style={styles.container} onPress={showDatepicker}>
            <MaterialCommunityIcons name='calendar' size={20} color={colors.pink} style={styles.icon} />
            <View style={styles.textInputStyle}>
            <Text>{`${dateValue.getDate()}-${dateValue.getMonth()}-${dateValue.getFullYear()}`}</Text>
            </View>
            </Pressable>
        );
    }   
    else {
        const [date, setDate] = useState(new Date());
        const [mode, setMode] = useState('date');
        const [show, setShow] = useState(false);
    
        const onChange = (event, selectedDate) => {
            const currentDate = selectedDate;
            setShow(false);
            setDate(currentDate);
          };
        
          const showMode = (currentMode) => {
            setMode(currentMode);
          };
        
          const showDatepicker = () => {
            showMode('date');
          };
        
          const showTimepicker = () => {
            showMode('time');
          };
    
          return (
            <View>
              <Button onPress={showDatepicker} title="Show date picker!" />
              <Button onPress={showTimepicker} title="Show time picker!" />
              <Text>selected: {date.toLocaleString()}</Text>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  onChange={onChange}
                />
              )}
            </View>
          );
    }
};

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