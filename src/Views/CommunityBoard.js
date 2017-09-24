import React, { Component } from 'react';
import { View, ListView, Text, ScrollView, TextInput } from 'react-native';
import { Button } from 'react-native-elements';


class Board extends Component {
  render() {
    return(
      <View style={{ flex: 1, marginTop: 20}}>
        <TextInput style={{
          backgroundColor: 'white',
          marginRight: 10,
          marginLeft: 10,
          paddingTop: 5,
          paddingBottom: 5
        }}/>
        <View style={{ alignItems: 'flex-end'}}>
          <Button title='submit' />
        </View>
      </View>
    )
  }
}

export default Board;
