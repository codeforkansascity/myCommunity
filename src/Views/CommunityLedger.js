import React, { Component } from 'react';
import { View, ListView, Text, ScrollView } from 'react-native';

const data = require('./ledger.json');

class Ledger extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }
  render() {
    return(
      <View style={{ flex: 1, marginTop: 20}}>
      <View style={{
                    borderBottomWidth: 1,
                    alignItems: 'center',
                    backgroundColor: '#222222',
                    paddingTop: 10
      }}>
        <Text style={{ fontSize: 30, marginBottom: 10, color: 'white'}}> Community Ledger </Text>
      </View>
      <ScrollView style={{ paddingTop: 30, marginRight: 5, marginLeft: 5}}>

      <View style={{height: 50, flexDirection: 'row'}}>
        <View style={{  flex: 1,
                        borderTopWidth: 1,
                        borderBottomWidth: 1,
                        borderRightWidth: 1,
                        backgroundColor: '#222222',
                        borderLeftWidth: 1,
                        borderTopLeftRadius: 5,
                        paddingTop: 15,
                        alignItems: 'center'
        }}>
          <Text style={{color: 'white'}}>Date</Text>
        </View>
        <View style={{
          flex: 2,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          backgroundColor: '#222222',
          paddingTop: 15,
          alignItems: 'center'
        }}>
          <Text style={{color: 'white'}} >Name</Text>
        </View>
        <View style={{
                        flex: 1,
                        borderTopWidth: 1,
                        borderBottomWidth: 1,
                        borderRightWidth: 1,
                        borderLeftWidth: 1,
                        backgroundColor: '#222222',
                        paddingTop: 15,
                        alignItems: 'center',
                        borderTopRightRadius: 5
                    }}>
          <Text style={{color: 'white'}}>Amount</Text>
        </View>
      </View>
      <ListView
       dataSource={this.state.dataSource}
       renderRow={(rowData) =>
         <View style={{height: 50, flexDirection: 'row'}}>
           <View style={{
             flex: 1,
             borderBottomWidth: 1,
             borderRightWidth: 1,
             borderLeftWidth: 1,
             paddingTop: 10,
             alignItems: 'center'
           }}>
             <Text>{rowData.date}</Text>
           </View>
           <View style={{
             flex: 2,
             borderBottomWidth: 1,
             paddingTop: 10,
             alignItems: 'center'
           }}>
             <Text>{rowData.name}</Text>
           </View>
           <View style={{
             flex: 1,
             borderBottomWidth: 1,
             borderRightWidth: 1,
             borderLeftWidth: 1,
             paddingTop: 10,
             alignItems: 'center'
           }}>
             <Text>{rowData.amount}</Text>
           </View>
         </View>}
     />
     <View style={{
       flex: 1,
       backgroundColor: '#222222',
       height: 50,
       borderBottomLeftRadius: 5,
       borderBottomRightRadius: 5
     }}/>
   </ScrollView>
   </View>
    );
  }
}

export default Ledger;
