'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  ListView
} from 'react-native';

export default class ResultsScene extends Component {
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
        dataSource={this.props.data}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }
}
