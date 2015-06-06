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

var TouchableLink = require("./TouchableLink");

var Icon = require("react-native-icons");

module.exports = React.createClass({
  goToUser: function(username) {
    this.props.goToUser(username);
  },

  goToRepo: function(repoName) {
    this.props.goToRepo(repoName);
  },
  render: function() {
    var data = this.props.data;
    switch(data.type) {
      case 'CreateEvent':
        var actionDescription = ' created repository ';
        var action = <Text style={styles.action}>{actionDescription}</Text>;
        var icon = <Icon name='octicons|repo' size={16} color='#666666' style={styles.icon}/>;
        break;
      case 'WatchEvent':
        var actionDescription = ' starred ';
        var action = <Text style={styles.action}>{actionDescription}</Text>;
        var icon = <Icon name='octicons|star' size={16} color='#666666' style={styles.icon}/>;
        break;
      case 'ForkEvent':
        var actionDescription = ' forked ';
        var action = <Text style={styles.action}>{actionDescription}</Text>;
        var icon = <Icon name='octicons|repoForked' size={16} color='#666666' style={styles.icon}/>;
        break;
      case 'MemberEvent':
        var actionDescription = ' added ';
        var action = <View style={styles.action}>
                      <Text>{actionDescription}</Text>
                      <TouchableLink 
                        displayText={data.payload.member.login} 
                        routeFunction={this.goToUser} 
                        routeParameter={data.payload.member.login}
                      />
                      <Text> to </Text>
                    </View>;
        break;
    }

    var actor = <TouchableLink 
                  style={styles.actor} 
                  displayText={data.actor.login} 
                  routeFunction={this.goToUser} 
                  routeParameter={data.actor.login}
                />;

    var payload = <TouchableLink 
                    style={styles.payload}
                    displayText={data.repo.name}
                    routeFunction={this.goToRepo}
                    routeParameter={data.repo.name}
                    goBack={this.goBack}
                  />;

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
    color: '#4183C4',
  },
  link: {
    width: 29,
  },
});
