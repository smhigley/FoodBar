'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView
} from 'react-native';

export default class RecipeList extends Component {
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
    );
  }
}
