import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Touchable,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  ToastAndroid,
} from "react-native";

import db from '../config'
import firebase from 'firebase'

export default class WriteStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      Author: "",
      Title: "",
      Story: "",
    };
  }

  submitStory = (Author, Title, Story) => {
    var mess = "Story Submitted"
    db.collection("Story").add({
      Title: this.state.Title,
      Author: this.state.Author,
      Story: this.state.Story,
    });
    Alert.alert('Story submitted')
    ToastAndroid.show(mess, ToastAndroid.SHORT) 
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.keyBoardStyle}>
      <View>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          placeholder={"Title of story"}
          onChangeText={(text) => {
            this.setState({
              Title: text,
            });
          }}
          value={this.state.Title}
        />
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          placeholder={"Author Name"}
          onChangeText={(text) => {
            this.setState({
              Author: text,
            });
          }}
          value={this.state.Author}
        />
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          multiline={true}
          placeholder={"Write Story"}
          onChangeText={(text) => {
            this.setState({
              Story: text,
            });
          }}
          value={this.state.Story}
        />
        <TouchableOpacity style={styles.button}
        onPress={this.submitStory}>
          <Text>Request</Text>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  keyBoardStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  
  button: {
    width: "75%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#ff5722",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: 20,
  },
});