import React, { Component } from 'react';
import { View, ListView, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import Ledger from './CommunityLedger';
import Board from './CommunityBoard';

class Page extends Component {
  render() {
    return(
      <View style={{ flex: 1, backgroundColor: 'white'}}>
      <View style={{
                    borderBottomWidth: 1,
                    alignItems: 'center',
                    backgroundColor: '#222222',
                    paddingTop: 10,
      }}>
        <Text style={{ fontSize: 30, marginBottom: 10, color: 'white'}}> Community Page </Text>
      </View>
      <ScrollView style={{ flex: 1, paddingTop: 20, paddingBottom: 40}}>
        <View style={{ flex: 1, marginRight: 5, marginLeft: 5, marginTop: 20 }}>
          <View style={{ height: 200, borderWidth: 1, borderRadius: 5, borderColor: 'lightgrey' }}>
          <View style={{
                        height: 50,
                        borderColor: 'lightgrey',
                        marginLeft: 5, marginRight: 5,
                        alignItems: 'flex-start',
                        paddingBottom: 10,
                        paddingTop: 10
                      }}>
            <Text style={{ fontSize: 25}}> Community Box </Text>
          </View>
          <View style={{
                        alignItems: 'center',
                        marginLeft: 5, marginRight: 5,
                        marginBottom: 15,
                        paddingBottom: 5,
                        borderColor: 'lightgrey'
                      }}>
            <Text style={{ fontSize: 50}}>$1600</Text>
          </View>
          <View style={{ alignItems: 'flex-end'}}>
            <Button title=' View More'
                    textStyle={{ color: 'black', fontWeight: 'bold'}}
                    buttonStyle={{
                                  borderRadius: 5,
                                  backgroundColor: 'white',
                                  borderWidth: 0,
                                  borderColor: 'lightgrey'
                                }}/>
          </View>
          </View>
        </View>
        <View style={{ borderTopWidth: 1, borderColor: 'lightgrey', marginTop: 30}}>
          <Board />
        </View>
        <View style={{ borderTopWidth: 1, borderColor: 'lightgrey', marginTop: 30, paddingBottom: 50}}>
          <Ledger />
        </View>
      </ScrollView>
      </View>
    )
  }
}

export default Page;
