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
var Color = require("../Common/Color");

var Icon = require("react-native-icons");
var Router = require('react-native-router');

var EventListView = require('../Components/EventList');

module.exports = React.createClass({
  firstRoute: {
    name: 'Dashboard',
    component: EventListView,
    data: {username: 'skyline75489'},
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Router ref="router"
          firstRoute={this.firstRoute}
          headerStyle={styles.header}
          />
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: Color.github_link,
  },
});
