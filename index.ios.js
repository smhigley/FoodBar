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
  View,
  ListView
} from 'react-native';
import { API } from './config';

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

class RecipeList extends Component {

  renderRow(recipe) {
    return (
      <View>
        <Text>{recipe.title}</Text>
      </View>
    )
  }

  render() {
    return(
      <ListView
        dataSource={this.props.recipes}
        renderRow={this.renderRow.bind(this)}
      />
    )
  }
}

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id}),
      recipes: {}
    };
    this.state.recipes = this.state.dataSource.cloneWithRows([]);
  }

  getApiResults(query) {
    let url = API.uri + '/recipes/search?cuisine=Asian&intolerances=corn&limitLicense=false&number=10&offset=0&query=' + query,
        request = new Request(url, {
          headers: new Headers({
            'X-Mashape-Key': API.key,
            //'Accept': 'application/json'
          })
        });
    console.log("searching url: " + url);
    fetch(request)
      .then((res) => res.json())
      .then((data) => {
        let recipeList = this.state.dataSource.cloneWithRows(data.results);
        this.setState({recipes: recipeList});
        console.log(recipeList);
      })
      .catch((error) => console.log("Oops, there was a problem:", error));
  }

  searchRecipes = (searchString) => {
    console.log("searched: " + searchString);
    this.getApiResults(searchString);
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            value={this.state.search}
            placeholder="Search recipes"
            onSubmitEditing={(event) => this.searchRecipes(event.nativeEvent.text)}
            onChangeText={(search) => this.setState({search})}
          />
        </View>
        <View>
          <RecipeList recipes={this.state.recipes} />
        </View>
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
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchInput: {
    flex: 1,
    height: 40,
    padding: 5,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
    marginRight: 5
  },
});

AppRegistry.registerComponent('FoodBar', () => FoodBar);
