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
  View
} from 'react-native';

class FoodBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Content />
        <Footer />
      </View>
    );
  }
}

class Header extends Component {
  render() {
    return(
      <View style={styles.header}>
        <Text>FoodBar</Text>
      </View>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <Text>Next</Text>
        <Text>Previous</Text>
      </View>
    )
  }
}

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View style={styles.main}>
        <TextInput
          style={styles.searchbar}
          placeholder="Search recipes"
          //onChangeText={(text) => this.setState({text})}
        />
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  searchbar: {
    height: 40,
    borderWidth: 1,
    borderColor: '#666666',
    borderStyle: 'solid'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  header: {
    height: 40,
    backgroundColor: 'skyblue'
  },
  footer: {
    height: 30,
    backgroundColor: 'steelblue'
  },
  main: {
    flex: 1,
    padding: 20,
  }
});

AppRegistry.registerComponent('FoodBar', () => FoodBar);
