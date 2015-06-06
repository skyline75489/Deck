'use strict';

var React = require('react-native');

var Color = require("../Common/Color");

var {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} = React;

module.exports = React.createClass({
  goToNextRoute: function() {
    this.props.routeFunction(this.props.routeParameter);
  },
  render: function() {
    return (<TouchableOpacity 
            onPress={this.goToNextRoute} 
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
