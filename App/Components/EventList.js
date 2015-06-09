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
  StatusBarIOS,
  ActivityIndicatorIOS,
} = React;

var Base = require('../Common/Base');
var Api = require('../Network/Api');

var UserProfile = require('./UserProfile');
var RepoDetail = require('./RepoDetail');
var EventRow = require('./EventRow');

var RefreshableListView = require('react-native-refreshable-listview');

module.exports = React.createClass({
  goToUser: function(username) {
    this.props.toRoute({
      name: username,
      component: UserProfile,
      data: {username: username},
    });
  },
  goToRepo: function(repoName) {
    // repoName is actully 'owner/repo'
    this.props.toRoute({
      name: repoName,
      component: RepoDetail,
      data: {repoName: repoName, goBack: this.props.toBack},
    });
  },
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds,
      dateReady: false,
    };
  },

  componentDidMount: function() { 
    var me = this;
    Api.getUserReceivedEvents(this.props.data.username, function(data){
      me.setState({
        dataSource: me.state.dataSource.cloneWithRows(data),
        dataReady: true,
      });
    });
  },

  _renderRow: function(data) {
    return (
      <View style={styles.row}>
         <EventRow data={data} goToUser={this.goToUser} goToRepo={this.goToRepo}/>
      </View>
    );
  },
  fetchNewData: function() {
    return Api.getUserReceivedEventsPromise(this.props.data.username);
  },
  render: function() {
    if (!this.state.dataReady) {
      return this.renderLoadingView();
    }
    return (
      <RefreshableListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        loadData={this.fetchNewData}
        refreshDescription="Refreshing"
        refreshingIndictatorComponent={this.renderLoadingView()}
      />
    );
  },
  renderLoadingView: function() { 
    return ( 
      <View style={styles.loadingView}>
        <View>
          <ActivityIndicatorIOS
            animating={true}
            style={{height: 30}}
            size="small"
          />
        </View>
      </View>
    ); 
  }
});

var styles = StyleSheet.create({
  wrap: {
    top: -10,
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 10,
    overflow: 'hidden',
    borderBottomWidth: 0.5,
    borderColor: '#F1F1F1',
  },
  loadingView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

