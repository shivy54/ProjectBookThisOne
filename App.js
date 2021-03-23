import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'


import WriteStoryScreen from './Screens/WriteStoryScreen'
import ReadStoryScreen from './Screens/ReadStoryScreen'

export default class App extends React.Component {
  render(){
    return(
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Read: {screen: ReadStoryScreen},
  Write: {screen: WriteStoryScreen}
});

const AppContainer = createAppContainer(TabNavigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
