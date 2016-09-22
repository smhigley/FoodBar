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
import ResultsScene from './components/ResultsScene';
import SearchScene from './components/SearchScene';
import { API } from './config';

class FoodBar extends Component {
  renderScene(route, navigator) {
    if (route.name == 'Search') {
      return <SearchScene navigator={navigator} {...route.passProps} />
    }
    if (route.name == 'Results') {
      return <ResultsScene navigator={navigator} {...route.passProps} />
    }
  }
  render() {
    return (
      <Image style={styles.container} source={require('./assets/app-bg.jpg')}>
        <Navigator style={{ flex:1 }} initialRoute={{ name: 'Search' }} renderScene={ this.renderScene } />
      </Image>
    );
  }
}

AppRegistry.registerComponent('FoodBar', () => FoodBar);
