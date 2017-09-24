import React, { Component } from 'react';
import { View, ListView, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import Ledger from './CommunityLedger';
import Board from './CommunityBoard';
import StoryItem from './StoryItem';

class Page extends Component {
  onButtonPress(){
    Actions.board()
  }
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
        <View style={{ flex: 1, marginRight: 15, marginLeft: 15, marginTop: 20 }}>
          <View style={{ alignItems: 'center', marginLeft: 15}}>
            <View style={{
                          width: 200,
                          alignItems: 'center',
                          marginTop: 20,
                          borderBottomWidth: 4,
                          paddingBottom: 10,
                          marginBottom: 20
                        }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Community Balance</Text>
            </View>
          </View>
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
                    onPress={this.onButtonPress}
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
          <View style={{ alignItems: 'center', marginLeft: 15}}>
            <View style={{
                          width: 200,
                          alignItems: 'center',
                          marginTop: 20,
                          borderBottomWidth: 4,
                          paddingBottom: 10
                        }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Community Board</Text>
            </View>
          </View>
          <Board />
        </View>
        <View style={{
                      borderTopWidth: 1,
                      borderColor: 'lightgrey',
                      marginTop: 30,
                      paddingBottom: 50,
                    }}>
          <View style={{ alignItems: 'center', marginLeft: 15}}>
            <View style={{
                          width: 200,
                          alignItems: 'center',
                          marginTop: 20,
                          borderBottomWidth: 4,
                          paddingBottom: 10,
                        }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Community Ledger</Text>
            </View>
          </View>
          <Ledger />
        </View>
      </ScrollView>
      </View>
    )
  }
}

export default Page;
