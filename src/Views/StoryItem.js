import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-elements';

class StoryItem extends Component {
  render() {
    const percent = (this.props.number)/(this.props.communityCount) * 100

    return(
      <View style={styles.StoryContainer}>
        <View style={styles.VotingResult}>
          <Text style={styles.VotingResultText}>{percent.toFixed(2)}% voted yes</Text>
        </View>

        <View style={styles.StoryTextContainer}>
          <Text>
            <Text style={styles.StoryHeaderText}>Title: </Text>
            <Text style={styles.StoryDescriptionText}>{this.props.title}</Text>
          </Text>

          <Text>
            <Text style={styles.StoryHeaderText}>Reason: </Text>
            <Text style={styles.StoryDescriptionText}>{this.props.Desc}</Text>
          </Text>

          <Text>
            <Text style={styles.StoryHeaderText}>Cost: </Text>
            <Text style={styles.StoryDescriptionText}>{this.props.cost}</Text>
          </Text>
        </View>

        <View style={styles.FooterButtons}>
          <View>
            <TouchableHighlight>
              <View style={styles.YesButton}>
                <Text style={styles.ButtonText}>Yes</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight>
              <View style={styles.NoButton}>
                <Text style={styles.ButtonText}>No</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  StoryContainer: {
    backgroundColor: "lightgray",
    marginTop: 15,
    marginBottom: 15,
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20
  },
  VotingResult: {
    marginBottom: 15,
    flex: 1,
    alignItems: "center"
  },
  VotingResultText: {
    fontSize: 24
  },
  FooterButtons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20
  },
  YesButton: {
    backgroundColor: "green",
    width: 100,
    height: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  NoButton: {
    backgroundColor: "red",
    width: 100,
    height: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  ButtonText: {
    color: "white"
  },
  StoryTextContainer: {
    backgroundColor: "white",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10
  },
  StoryHeaderText: {
     fontSize: 16,
     fontWeight:"bold"
  },
  StoryDescriptionText: {
    fontSize: 14
  }
}

export default StoryItem;
