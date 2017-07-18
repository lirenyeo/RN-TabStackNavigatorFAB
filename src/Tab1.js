// @flow

import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

export default class Tab1 extends Component {
  static navigationOptions = {
    title: "Tab1"
  };

  render() {
    return (
      <View>
        <Text>Tab1</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("profile")}>
          <View style={{ padding: 5, backgroundColor: "green" }}>
            <Text>Go to profile</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}