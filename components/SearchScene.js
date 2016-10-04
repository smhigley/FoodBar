'use strict';

import React, { Component } from 'react';
import {
  View,
  Image,
  ListView,
  Text,
  TextInput,
  TouchableHighlight
} from 'react-native';

import { getSearchResults } from '../utils/ApiHelper';
import styles from '../constants/styles.js';

class Logo extends Component {
  render() {
    return(
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.logotype}>FoodBar</Text>
      </View>
    )
  }
}

export default class SearchScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})
    };
  }

  searchRecipes = (searchString) => {
    getSearchResults.call(this, searchString);
  }

  render() {
    return(
      <View>
        <Logo />
        <View style={styles.main}>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              value={this.state.search}
              placeholder='Search recipes'
              placeholderTextColor='#5E9ECA'
              onSubmitEditing={(event) => this.searchRecipes(event.nativeEvent.text)}
              onChangeText={(search) => this.setState({search})}
            />
          </View>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>Advanced Search</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
