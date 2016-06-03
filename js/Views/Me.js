'use strict';

var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Color = require('../Common/Color');
var EventList = require('../Components/EventList');
var UserProfile = require('../Components/UserProfile');
var RepoDetail = require('../Components/RepoDetail');

import { Actions, Router, Scene } from 'react-native-router-flux';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key='eventList' component={EventList} title="Dashboard"/>
    <Scene key='userProfile' component={UserProfile} initial={true} title="Me" username="skyline75489"/>
    <Scene key='repoDetail' component={RepoDetail} />
  </Scene>
);

module.exports = React.createClass({
  render: function() {
    return (
      <Router scenes={scenes}>
      </Router>
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
