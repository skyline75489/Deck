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

var Color = require('../Common/Color');

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
