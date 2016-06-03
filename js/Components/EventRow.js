'use strict';

var React = require('React');
var ListView = require('ListView');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Image = require('Image');
var Text = require('Text');
var TouchableHighlight = require('TouchableHighlight');
var TouchableOpacity = require('TouchableOpacity');
var Base = require('../Common/Base');
var Color = require('../Common/Color');
var TouchableLink = require('./TouchableLink');
import Icon from 'react-native-vector-icons/Octicons';
import { Actions } from 'react-native-router-flux';

module.exports = React.createClass({
  goToUser: function(username) {
    Actions.userProfile({'username':username, 'title': username})
  },

  goToRepo: function(repoName) {
    Actions.repoDetail({'repoName':repoName, 'title': repoName})
  },

  goBack: function() {
    Actions.pop()
  },

  render: function() {
    var data = this.props.data;
    switch (data.type) {
      case 'CreateEvent':
        var actionDescription = ' created repository ';
        var action = <Text style={styles.action}>{actionDescription}</Text>;
        var icon = <Icon name="repo" size={16} color="#666666" style={styles.icon}/>;
        break;
      case 'WatchEvent':
        var actionDescription = ' starred ';
        var action = <Text style={styles.action}>{actionDescription}</Text>;
        var icon = <Icon name="star" size={16} color="#666666" style={styles.icon}/>;
        break;
      case 'ForkEvent':
        var actionDescription = ' forked ';
        var action = <Text style={styles.action}>{actionDescription}</Text>;
        var icon = <Icon name="repo-forked" size={16} color="#666666" style={styles.icon}/>;
        break;
      case 'MemberEvent':
        var actionDescription = ' added ';
        var action = (
          <View style={styles.action}>
            <Text>{actionDescription}</Text>
            <TouchableLink
              displayText={data.payload.member.login}
              onPress={()=>{
                this.goToUser(data.payload.member.login);
              }}
            />
            <Text> to </Text>
          </View>
        );
        break;
    }

    var actor = (
      <TouchableLink
        style={styles.actor}
        displayText={data.actor.login}
        onPress={()=>{
          this.goToUser(data.actor.login);
        }}
      />
    );

    var payload = (
      <TouchableLink
        style={styles.payload}
        displayText={data.repo.name}
        onPress={()=>{
          this.goToRepo(data.repo.name);
        }}
        goBack={this.goBack}
      />
    );

    return (
      <View style={styles.containter}>
        <View style={styles.iconWrapper}>
        {icon}
        </View>
        <View style={styles.textWrapper}>
          <View style={styles.topPart}>
          {actor}
          {action}
          </View>
          <View style={styles.bottomPart}>
          {payload}
          </View>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  containter: {
    flex: 1,
    flexDirection: 'row',
  },
  iconWrapper: {
    marginTop: 7,
    flex: 0.1,
  },
  textWrapper: {
    flex: 0.9,
  },
  icon: {
    width: 15,
    height: 15,
  },
  topPart: {
    flex: 1,
    flexDirection: 'row',
  },
  actor: {
    flex: 0.5,
  },
  action: {
    flex: 0.5,
    flexDirection: 'row',
  },
  bottomPart: {
    flex: 1,
  },
  highlightText: {
    color: Color.github_link,
  },
  link: {
    width: 29,
  },
});
