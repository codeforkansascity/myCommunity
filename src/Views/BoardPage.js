import React, { Component } from 'react';
import { View, ListView, Text, ScrollView } from 'react-native';
import StoryItem from './StoryItem';

var BoardData = require('./BoardData.json');

class BoardPage extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(BoardData),
    };
  }
  render(){
    return (
      <ScrollView style={{ backgroundColor: 'white', paddingRight: 15,paddingLeft: 15}}>
      <ListView
       dataSource={this.state.dataSource}
       renderRow={(rowData) =>
         <View>
             <StoryItem
              title={rowData.title}
              Desc={rowData.desc}
              number={rowData.votercount}
              cost={rowData.cost}
              communityCount={83}
              />
          </View>}/>
      </ScrollView>
    );
  }
}

export default BoardPage;
