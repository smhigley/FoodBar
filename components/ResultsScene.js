'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ListView,
  TouchableHighlight
} from 'react-native';

import { getRecipe } from '../utils/ApiHelper';
import styles from '../constants/styles.js';

export default class ResultsScene extends Component {
  goToRecipe(id) {
    console.log('going to recipe', id);
    getRecipe.call(this, id);
  }
  renderRow(recipe) {
    return (
      <TouchableHighlight style={styles.resultBox} onPress={this.goToRecipe.bind(this, recipe.id)}>
        <View>
          <Image style={styles.resultThumb} source={{uri: this.props.baseUri + recipe.image}} />
          <View style={styles.resultText}>
            <Text style={styles.resultTitle}>{recipe.title}</Text>
            <Text style={styles.resultMeta}>Read in {recipe.readyInMinutes} minutes</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    console.log('rendering results scene');
    return(
      <View>
        <Text style={styles.title}>Results for Chicken</Text>
        <ListView
          dataSource={this.props.data}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}
