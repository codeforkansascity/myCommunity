import React, { Component } from 'react';
import { View, ListView, Text, ScrollView, TextInput } from 'react-native';
import { Button } from 'react-native-elements';


class Board extends Component {
  state = { desc : '', title: '' }
  onChangeText(value) {
    this.setState({ desc: value})
  }
  onChangeTitleText(value) {
      this.setState({ title: value})
  }
  render() {
    return(
      <View style={{ flex: 1, marginTop: 20}}>
          <View style={{ borderBottomWidth: 1, borderColor: 'lightgrey', marginRight: 10, marginLeft: 10}}>
            <Text> Story Title</Text>
          </View>
            <TextInput
              style={styles.titleStyle}
              value={this.state.input}
              onChange={this.onChangeTitleText.bind(this)}
            />
          <View style={{
                        borderBottomWidth: 1,
                        borderColor: 'lightgrey',
                        marginRight: 10,
                        marginLeft: 10,
                        marginTop: 10
                      }}>
            <Text> Description</Text>
          </View>
          <TextInput
            multiline={true}
            style={styles.inputStyle}
            value={this.state.input}
            onChange={this.onChangeText.bind(this)}
          />
          <Button title='submit' buttonStyle={{ backgroundColor: '#222222' }} />
      </View>
    )
  }
}
const styles = {
  pageStyle: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 20
  },
  imageContainer : {
     flex: 1,
     padding: 15
  },
  Container : {
     flex: 1,
     borderWidth: 0.5,
     paddingTop: 20,
     backgroundColor: '#DCDCDC',
     paddingBottom: 20,
     paddingLeft: 10,
     paddingRight: 10,
     borderRadius: 5,
     borderColor: 'lightgrey',
     marginBottom: 10
  },
  inputStyle: {
    marginRight: 15,
    marginLeft: 15,
    marginTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    height: 100,
    borderWidth: 1,
    backgroundColor: '#F5F5F5',
    borderColor: 'lightgrey',
    borderBottomWidth: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  titleStyle: {
    marginRight: 15,
    marginLeft: 15,
    marginTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    borderWidth: 1,
    height: 40,
    backgroundColor: '#F5F5F5',
    borderColor: 'lightgrey',
    borderRadius: 4
  }
};
export default Board;
