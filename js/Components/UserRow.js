'use strict';

var React = require('React');
var ListView = require('ListView');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Image = require('Image');
var Text = require('Text');
var TouchableHighlight = require('TouchableHighlight');
var TouchableOpacity = require('TouchableOpacity');

var Color = require('../Common/Color');


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
