'use strict';

var React = require('React');
var Color = require('../Common/Color');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Image = require('Image');
var Text = require('Text');
var TouchableHighlight = require('TouchableHighlight');
var TouchableOpacity = require('TouchableOpacity');

module.exports = React.createClass({
  render: function() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        >
        <Text style={styles.highlightText}>
        {this.props.displayText}
        </Text>
      </TouchableOpacity>
    );
  },
});

var styles = StyleSheet.create({
  highlightText: {
    color: Color.github_link,
  },
});
