// @flow

import React, { Component } from "react";
import {
  View,
  Text,
} from "react-native";

export default class Profile extends Component {
  static navigationOptions = {
    titleText: "Profile"
  };

  render() {
    return (
      <View>
        <Text>Profile</Text>
      </View>
    )
  }
}