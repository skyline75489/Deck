'use strict';

var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Text = require('Text');
var Color = require('../Common/Color');
var EventList = require('../Components/EventList');
var UserProfile = require('../Components/UserProfile');
var RepoDetail = require('../Components/RepoDetail');

import { Actions, Router, Scene } from 'react-native-router-flux';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key='eventList' component={EventList} initial={true} title="Dashboard" tabs={true}/>
    <Scene key='userProfile' component={UserProfile} />
    <Scene key='repoDetail' component={RepoDetail} />
  </Scene>
);

module.exports = React.createClass({
  render: function() {
    return (
      <Router scenes={scenes}>
      </Router>
    );
  }
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
