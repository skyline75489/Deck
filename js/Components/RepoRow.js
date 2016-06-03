'use strict';

var React = require('React');
var ListView = require('ListView');
var ScrollView = require('ScrollView');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Image = require('Image');
var Text = require('Text');
var TouchableHighlight = require('TouchableHighlight');
var TouchableOpacity = require('TouchableOpacity');

var Base = require('../Common/Base');
var Color = require('../Common/Color');

import Icon from 'react-native-vector-icons/Octicons';

module.exports = React.createClass({
  goToRepo: function() {
    this.props.goToRepo(this.props.data.full_name);
  },
  render: function() {
    var data = this.props.data;
    var icon = <Icon name="repo" size={16} color="#666666" style={styles.icon}/>;
    if (data.fork) {
      icon = <Icon name="repo-forked" size={16} color="#666666" style={styles.icon}/>;
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
            <Icon name="star" size={16} color="#666666" style={styles.icon}/>
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
