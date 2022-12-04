import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Button } from 'react-native';
import {DataTable} from 'react-native-paper';

// const pool_data = [
//   {
//     id: 1,
//     name: 'Rehan Shaik',
//     score: 100
//   },
//   {
//     id: 2,
//     name: 'Danish Sange',
//     score: 90
//   },
//   {
//     id: 3,
//     name: 'Yusuf Atheeq',
//     score: 80
//   }
// ];

// const fifa_data = [
//   {
//     id: 2,
//     name: 'Danish Sange',
//     score: 99
//   },
//   {
//     id: 3,
//     name: 'Yusuf Atheeq',
//     score: 67
//   },
//   {
//     id: 1,
//     name: 'Rehan Shaik',
//     score: 12
//   }
// ];


// const tables = [pool_data, fifa_data]


function AppDataTable({tableHeaders, tableContent}) {

    return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>{
            tableHeaders.map((header,i) => {
                return (
                    <DataTable.Title key={i}> {header} </DataTable.Title>
                )
            })
            }           
         </DataTable.Header>
        {
          tableContent.map(account => {
            return (
              <DataTable.Row
                key={account.id}
              >
              
              <DataTable.Cell> {Object.values(account)[0]} </DataTable.Cell>
              <DataTable.Cell> {Object.values(account)[1]} </DataTable.Cell>
              <DataTable.Cell> {Object.values(account)[2]} </DataTable.Cell>

              </DataTable.Row>
            )
          })
        }
        {tableContent.map(account => console.log(account))}

      </DataTable>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default AppDataTable;

