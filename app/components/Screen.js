import React from 'react';
import {SafeAreaView, Platform, StyleSheet, View} from 'react-native';
import Constants  from 'expo-constants';


function Screen({children, style}) {
    return (
        <SafeAreaView style={styles.screen}>
            <View style={[style, {flex: 1}]}>
            {children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight,
        flex: 1
    }
})

export default Screen;

