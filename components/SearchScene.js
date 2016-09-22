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

import styles from '../constants/styles.js';
import ResultsScene from '../components/ResultsScene';

// temporary global data so we don't need to query the API while creating styles
const tempData = [ { id: 112305,
            title: 'Chicken Samlá (Cambodian Chicken Curry)',
            readyInMinutes: 45,
            image: 'chicken-saml-cambodian-chicken-curry-112305.jpg',
            imageUrls: [ 'chicken-saml-cambodian-chicken-curry-112305.jpg' ] },
          { id: 472214,
            title: 'Chicken Chicken Curry',
            readyInMinutes: 85,
            image: 'Chicken-Chicken-Curry-472214.jpg',
            imageUrls: [ 'Chicken-Chicken-Curry-472214.jpg' ] },
          { id: 17816,
            title: 'Chicken Potstickers',
            readyInMinutes: 19,
            image: 'chicken-potstickers-2-17816.jpg',
            imageUrls: [ 'chicken-potstickers-2-17816.jpg' ] },
          { id: 32068,
            title: 'Chicken Curry',
            readyInMinutes: 33,
            image: 'chicken-curry-2-32068.jpg',
            imageUrls: [ 'chicken-curry-2-32068.jpg' ] },
          { id: 39180,
            title: 'Chicken Ramen',
            readyInMinutes: 64,
            image: 'chicken_ramen-39180.jpg',
            imageUrls: [ 'chicken_ramen-39180.jpg', 'chicken-ramen-2-39180.jpg' ] },
          { id: 74396,
            title: 'Tandoori Chicken',
            readyInMinutes: 45,
            image: 'tandoori-chicken-74396.jpg',
            imageUrls: [ 'tandoori-chicken-74396.jpg' ] },
          { id: 83200,
            title: 'Chicken Curry',
            readyInMinutes: 100,
            image: 'chicken_curry-83200.jpg',
            imageUrls: [ 'chicken_curry-83200.jpg', 'chicken-curry-2-83200.jpg' ] },
          { id: 136526,
            title: 'Chicken Curry',
            readyInMinutes: 45,
            image: 'chicken-curry-2-136526.png',
            imageUrls: [ 'chicken-curry-2-136526.png', 'chicken_curry-136526.jpg' ] },
          { id: 137102,
            title: 'Butter Chicken',
            readyInMinutes: 70,
            image: 'butter-chicken-2-137102.jpg',
            imageUrls: [ 'butter-chicken-2-137102.jpg', 'butter_chicken-137102.jpg' ] },
          { id: 152697,
            title: 'Chicken Vindaloo',
            readyInMinutes: 45,
            image: 'chicken-vindaloo-152697.jpg',
            imageUrls: [ 'chicken-vindaloo-152697.jpg' ] } ];

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

export default class HomeScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})
    };
  }

  getApiResults(query) {
    // comment out real API call to use temp data for now
    /*let url = API.uri + '/recipes/search?cuisine=Asian&intolerances=corn&limitLicense=false&number=10&offset=0&query=' + query,
        request = new Request(url, {
          headers: new Headers({
            'X-Mashape-Key': API.key,
            //'Accept': 'application/json'
          })
        });
    fetch(request)
      .then((res) => res.json())
      .then((data) => {
        let recipeList = this.state.dataSource.cloneWithRows(data.results);
        console.log(recipeList);
      })
      .catch((error) => console.log("Oops, there was a problem:", error));*/

    // temp styling code
    setTimeout(() => {
      let recipeList = this.state.dataSource.cloneWithRows(tempData);
      this.props.navigator.push({
        name: 'Results',
        passProps: {
          data: recipeList
        }
      });
    }, 100);
  }

  searchRecipes = (searchString) => {
    this.getApiResults(searchString);
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
