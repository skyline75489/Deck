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

var Base = require('../Common/Base');
var Color = require('../Common/Color');

var Icon = require('react-native-icons');

module.exports = React.createClass({
  goToRepo: function() {
    this.props.goToRepo(this.props.data.full_name);
  },
  render: function() {
    var data = this.props.data;
    var icon = <Icon name="octicons|repo" size={16} color="#666666" style={styles.icon}/>;
    if (data.fork) {
      icon = <Icon name="octicons|repoForked" size={16} color="#666666" style={styles.icon}/>;
    }
    return (
      <TouchableOpacity onPress={this.goToRepo}>
        <View style={styles.containter}>
          <View style={styles.repoIconWrapper}>
            {icon}
          </View>
          <View style={styles.repoNameWrapper}>
            <Text style={styles.repoNameText}>{data.name}</Text>
          </View>
          <View style={styles.starCountWrapper}>
            <Text style={styles.starCountText}>{data.stargazers_count}</Text>
          </View>
          <View style={styles.starIconWrapper}>
            <Icon name="octicons|star" size={16} color="#666666" style={styles.icon}/>
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
  icon: {
    width: 12,
    height: 15,
  },
  repoIconWrapper: {
    flex: 0.08,
  },
  repoNameWrapper: {
    flex: 0.68,
  },
  repoNameText: {
    color: Color.github_link,
    fontWeight: 'bold',
  },
  starCountWrapper: {
    flex: 0.10,
    alignItems: 'flex-end',
    marginRight: 2,
  },
  starCountText: {
    color: Color.github_font_gray,
    fontWeight: 'bold',
  },
  starIconWrapper: {
    flex: 0.14,
    marginLeft: 2,
  },
});

