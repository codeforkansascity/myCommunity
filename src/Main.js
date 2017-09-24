import React, { Component } from 'react';
import { View } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Tabs, Tab, Icon, Text, Divider, SearchBar } from 'react-native-elements'

import CommunityBoard from './Views/CommunityBoard';
import Ledger from './Views/CommunityLedger';
import CommunityPage from './Views/CommunityPage';

class Main extends  Component  {
  constructor() {
      super()
      this.state = {
        selectedTab: 'home',
      }
    }

  changeTab(selectedTab) {
    this.setState({ selectedTab })
  }

  render() {
    const { selectedTab } = this.state;
    const { open } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
      <
    </View>
    );
  }
} const mapStateToProps = (state) => {
  return state;
};


//export default connect(mapStateToProps, {})(Main);

export default Main;
