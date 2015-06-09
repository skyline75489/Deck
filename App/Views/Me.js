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

var UserProfile = require('../Components/UserProfile');

module.exports = React.createClass({
  firstRoute: {
    name: 'Me',
    component: UserProfile,
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
  },
  header: {
    backgroundColor: Color.github_link,
  },
});
