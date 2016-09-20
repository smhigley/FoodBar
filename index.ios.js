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
  ListView
} from 'react-native';

import styles from './constants/styles.js';
import ResultsScene from './components/ResultsScene';
import SearchScene from './components/HomeScene';
import { API } from './config';

class FoodBar extends Component {
  render() {
    return (
      <Image style={styles.container} source={require('./assets/app-bg.jpg')}>
        <SearchScene />
      </Image>
    );
  }
}

AppRegistry.registerComponent('FoodBar', () => FoodBar);
