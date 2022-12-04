import React, { useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet, FlatList, View, Text, Image} from 'react-native';
import AppTextInput from '../components/AppTextInput';




function SearchScreen(props) {

    const Data = [
        {
            name: 'Rehan',
            imageURL: require('../assets/gamers/rehan.jpg'),
        },
        {
            name: 'Danish',
            imageURL: require('../assets/gamers/danish.jpg'),
        },
        {
            name: 'Yusuf',
            imageURL: require('../assets/gamers/yusuf.jpg'),
        },
    ]
    const [search, setSearch] = useState('');
    const [masterData, setMasterData] = useState(Object.values(Data).map(i => i['name']));
    const [filteredData, setFilteredData] = useState([]);


    
    const searchResults = (data) => {
        if (data) {
            const newData = masterData.filter(item => item.includes(data));
            setFilteredData(newData);
            setSearch(data);

        }
        else {
                setFilteredData([]);
                setSearch(data);
        }

    }

    

    return (
        <View>
        
        <Searchbar
        style={{marginTop: 100}}
        placeholder='Search'
        onChangeText={(query) => searchResults(query)}
        value={search} />
        
        <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
            return (
                <View>

       
                </View>
            )
        }}  
        />
        </View>
    );
}

export default SearchScreen;

const styles = StyleSheet.create({
    
})