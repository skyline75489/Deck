'use strict';

var React = require('react-native');

var {
  ListView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} = React;

var Base = require("../Common/Base");
var Color = require("../Common/Color");

var Icon = require("react-native-icons");

var SearchBar = React.createClass({
  render: function() {
    return (
      <TextInput style={styles.input}  placeholder="Search Twitter" />
    );
  },
});

var SearchIcon = React.createClass({
  render: function() {
    return (<TouchableOpacity>
              <Icon name='octicons|search' size={16} color='white' style={styles.icon}/>
            </TouchableOpacity>);
  },
});

var SearchPage = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>Search page</Text>
      </View>
    );
  },
});


var Icon = require("react-native-icons");
var Router = require('react-native-router');

module.exports = React.createClass({
  firstRoute: {
    name: 'Search',
    component: SearchPage,
    titleComponent: SearchBar,
    rightCorner: SearchIcon,
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
  icon: {
    width: 32,
    height: 32,
    marginTop: 4,
    marginRight: 15,
  },
  input: {
    backgroundColor: '#f5f8fa',
    width: 220,
    height: 32,
    marginTop: 6,
    paddingLeft: 10,
    marginLeft: 10,
    marginRight: 10,
    color: 'white',
    borderRadius: 4
  }
});
