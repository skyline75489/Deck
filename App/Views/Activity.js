'use strict';

var React = require('react-native');
var {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView
} = React;

var Base = require("../Common/Base");

var Icon = require("react-native-icons");
var Router = require('react-native-router');

module.exports = React.createClass({
  render: function() {
    return (
      <View>
        <Text>Activity</Text>
      </View>
    );
  }
});
