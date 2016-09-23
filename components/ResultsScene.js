'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ListView
} from 'react-native';
import styles from '../constants/styles.js';

export default class ResultsScene extends Component {
  renderRow(recipe) {
    return (
      <View style={styles.resultBox}>
        <Image style={styles.resultThumb} source={{uri: this.props.baseUri + recipe.image}} />
        <View style={styles.resultText}>
          <Text style={styles.resultTitle}>{recipe.title}</Text>
          <Text style={styles.resultMeta}>Read in {recipe.readyInMinutes} minutes</Text>
        </View>
      </View>
    )
  }

  render() {
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
