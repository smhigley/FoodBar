/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Image,
  ListView,
  Navigator
} from 'react-native';

import styles from './constants/styles.js';
import SearchScene from './components/SearchScene';
import ResultsScene from './components/ResultsScene';
import RecipeScene from './components/RecipeScene';

class FoodBar extends Component {
  renderScene(route, navigator) {
    if (route.title == 'Search') {
      return <SearchScene navigator={navigator} {...route.passProps} />
    }
    if (route.title == 'Results') {
      return <ResultsScene navigator={navigator} {...route.passProps} />
    }
    if (route.title == 'Recipe Card') {
      return <RecipeScene navigator={navigator} {...route.passProps} />
    }
  }
  render() {
    return (
      <Image style={styles.container} source={require('./assets/app-bg.jpg')}>
        <Navigator style={{ flex:1 }} initialRoute={{ title: 'Search', index: 0 }} renderScene={ this.renderScene } />
      </Image>
    );
  }
}

AppRegistry.registerComponent('FoodBar', () => FoodBar);
