import React, { Component } from 'react';
import { View, ListView, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

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
      <View style={{ paddingTop: 30, marginRight: 5, marginLeft: 5}}>
      <View style={{height: 50, flexDirection: 'row'}}>
        <View style={{  flex: 1,
                        borderTopWidth: 1,
                        borderBottomWidth: 1,
                        backgroundColor: '#222222',
                        borderTopLeftRadius: 5,
                        paddingTop: 15,
                        borderColor: 'lightgrey',
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
          borderColor: 'lightgrey',
          alignItems: 'center'
        }}>
          <Text style={{color: 'white'}} >Name</Text>
        </View>
        <View style={{
                        flex: 1,
                        borderTopWidth: 1,
                        borderBottomWidth: 1,
                        borderRightWidth: 1,
                        backgroundColor: '#222222',
                        paddingTop: 15,
                        alignItems: 'center',
                        borderColor: 'lightgrey',
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
             borderColor: 'lightgrey',
             alignItems: 'center'
           }}>
             <Text>{rowData.date}</Text>
           </View>
           <View style={{
             flex: 2,
             borderBottomWidth: 1,
             paddingTop: 10,
             borderColor: 'lightgrey',
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
             borderColor: 'lightgrey',
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
       borderBottomRightRadius: 5,
       alignItems: 'flex-end'
     }}>
     <Button title=' View More'
             textStyle={{ color: 'white', fontWeight: 'bold'}}
             buttonStyle={{
                           marginTop: 10,
                           height: 10,
                           borderRadius: 5,
                           backgroundColor: '#222222',
                           borderWidth: 0,
                           borderColor: 'lightgrey'
                         }}/>
     </View>
   </View>
    );
  }
}

export default Ledger;
