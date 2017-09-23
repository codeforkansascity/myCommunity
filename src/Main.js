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
      <View style={{ flex: 6 }}>
      <Tabs>
        <Tab
          titleStyle={{ fontWeight: 'bold', fontSize: 10, color: '#A93226'}}
          selectedTitleStyle={{ marginTop: -1, marginBottom: 6, color: '#A93226'}}
          selected={selectedTab === 'home'}
          title={selectedTab === 'home' ? 'HOME' : null}
          renderIcon={
            () =>
            <Icon
              containerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 12
              }}
              name='home'
              size={33}
            />
          }
          renderSelectedIcon={() => <Icon name='home' size={30} />}
          onPress={() => this.changeTab('home')}>
          <CommunityPage/>
        </Tab>
        <Tab
          titleStyle={{ fontWeight: 'bold', fontSize: 10, color: '#A93226'}}
          selectedTitleStyle={{ marginTop: -1, marginBottom: 6, color: '#A93226'}}
          selected={selectedTab === 'board'}
          title={selectedTab === 'board' ? 'BOARD' : null}
          renderIcon={
            () =>
            <Icon
              containerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 12
              }}
              name='star'
              size={33}
            />
          }
          renderSelectedIcon={() => <Icon name='star' size={30} />}
          onPress={() => this.changeTab('board')}>
          <CommunityBoard />
        </Tab>
        <Tab
          titleStyle={{ fontWeight: 'bold', fontSize: 10, color: '#A93226'}}
          selectedTitleStyle={{ marginTop: -1, marginBottom: 6 }}
          selected={selectedTab === 'ledger'}
          title={selectedTab === 'ledger' ? 'LEDGER' : null}
          renderIcon={
            () =>
            <Icon
              containerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 12
              }}
              color={'#5e6977'}
              name='archive'
              size={33}
            />
          }
          renderSelectedIcon={() => <Icon name='archive' size={30} />}
          onPress={() => this.changeTab('ledger')}>
          <Ledger />
        </Tab>
      </Tabs>
    </View>
    </View>
    );
  }
} const mapStateToProps = (state) => {
  return state;
};


//export default connect(mapStateToProps, {})(Main);

export default Main;
