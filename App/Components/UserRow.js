'use strict';

var React = require('react-native');

var {
  ListView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} = React;

var Base = require("../Common/Base");
var Color = require("../Common/Color");

var Icon = require("react-native-icons");

module.exports = React.createClass({
  goToUser: function() {
    this.props.goToUser(this.props.data.login);
  },
  render: function() {
    var data = this.props.data;
  	return (
      <TouchableOpacity onPress={this.goToUser}>
        <View style={styles.containter}>
          <View style={styles.avatarWrapper}>
            <Image
              style={styles.avatar}
              source={{uri: data.avatar_url}}
            /> 
          </View>
          <View style={styles.nameWrapper}>
            <Text style={styles.nameText}>{data.login}</Text>
          </View>
        </View>
      </TouchableOpacity>
  	);
  }
});

var styles = StyleSheet.create({
  containter: {
    flex: 1,
    flexDirection: 'row',
  },
  avatar: {
  	width: 20,
  	height: 20,
  },
  avatarWrapper: {
  	flex: 0.08, 
  },
  nameWrapper: {
  	flex: 0.68,
  },
  nameText: {
    color: Color.github_link,
    fontWeight: 'bold',
  }
});

