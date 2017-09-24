import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-elements';

class StoryItem extends Component {
  render() {
    const percent = (this.props.number)/(this.props.communityCount) * 100
    return(
      <View style={styles.StoryStyle}>
        <View style={styles.Header}>
          <View style={{  backgroundColor: '#222222',borderRightWidth: 1, borderColor: 'lightgrey', paddingTop: 10, paddingRight: 15}}>
            <Text style={{ color: 'white' }}>Title:</Text>
          </View>
          <View style={{ paddingLeft: 20, paddingTop: 10}}>
            <Text>{this.props.title}</Text>
          </View>
        </View>
        <View style={styles.Desc}>
          <View style={{ backgroundColor: '#222222', borderRightWidth: 1, borderColor: 'lightgrey', paddingTop: 10, paddingRight: 10}}>
            <Text style={{ color: 'white' }}>Desc:</Text>
          </View>
          <View style={{ paddingLeft: 20, paddingTop: 10}}>
            <Text>{this.props.Desc}</Text>
          </View>
        </View>
        <View style={styles.Footer}>
          <View style={{ flex: 1}}>
            <Text>{percent.toFixed(2)}% voted yes</Text>
          </View>
          <View style={{ flex: 1,  borderColor: 'lightgrey', flexDirection: 'row', alignItems: 'flex-end'}}>
            <TouchableHighlight style={{
                                        flex: 1,
                                        borderWidth: 1,
                                        alignItems: 'center',
                                        borderTopLeftRadius: 5,
                                        borderBottomLeftRadius: 5,
                                        backgroundColor: '#99ff99',
                                        paddingLeft: 0,
                                        width: 50
                                      }}>
              <Text>Yes</Text>
            </TouchableHighlight>
            <TouchableHighlight style={{
                                        flex: 1,
                                        borderWidth: 1,
                                        alignItems: 'center',
                                        borderLeftWidth: 0,
                                        borderTopRightRadius: 5,
                                        borderBottomRightRadius: 5,
                                        backgroundColor: '#FF3333'
                                      }}>
              <Text>No</Text>
            </TouchableHighlight>
          </View>
        </View>

      </View>
    );
  }
}

const styles = {
  Header : {
    height: 40,
    paddingRight: 20,
    borderBottomWidth: 1,
    flexDirection: 'row',
    borderColor: 'lightgrey'
  },
  Desc : {
    paddingRight: 20,
    borderBottomWidth: 1,
    flexDirection: 'row',
    borderColor: 'lightgrey'
  },
  Footer : {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    flexDirection: 'row',
    borderColor: 'lightgrey'
  },
  StoryStyle : {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
    marginTop: 15
  }
}

export default StoryItem;
