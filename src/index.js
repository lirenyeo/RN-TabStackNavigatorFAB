// @flow

import React, { Component } from "react";
import { View } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import ActionButton from "react-native-action-button";

import Profile from "./Profile";
import Tab1View from "./Tab1";
import Tab2View from "./Tab2";
import Tab3View from "./Tab3";

const TabView = TabNavigator({
  tab1: { screen: Tab1View },
  tab2: { screen: Tab2View },
  tab3: { screen: Tab3View },
})

const Home = (props) => {
  return (
    <View style={{flex: 1}}>
      <TabView navigation={props.navigation} />
      <ActionButton offsetY={100} />
    </View>
  );
}

Home.router = TabView.router;

const StackView = StackNavigator({
  home: { screen: Home },
  profile: { screen: Profile },
});

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StackView />
      </View>
    );
  }
}