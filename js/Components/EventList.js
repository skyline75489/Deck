'use strict';

var React = require('React');
var ListView = require('ListView');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Image = require('Image');
var Text = require('Text');
var TouchableHighlight = require('TouchableHighlight');
var TouchableOpacity = require('TouchableOpacity');
var ActivityIndicatorIOS = require('ActivityIndicatorIOS');
var RefreshControl = require('RefreshControl');
var Base = require('../Common/Base');
var Api = require('../Network/Api');
var EventRow = require('./EventRow');

module.exports = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds,
      dateReady: false,
      refreshing: false
    };
  },

  componentDidMount: function() {
    this._onRefresh();
  },

  _onRefresh() {
    this.setState({refreshing: true});
    var self = this;
    Api.getUserReceivedEvents("skyline75489", function(data){
      self.setState({
        dataSource: self.state.dataSource.cloneWithRows(data),
        dataReady: true,
        refreshing: false
      });
    });
  },
  _renderRow: function(data) {
    return (
      <View style={styles.row}>
         <EventRow data={data} />
      </View>
    );
  },
  render: function() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        />
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 64,
  },
  row: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 10,
    overflow: 'hidden',
    borderBottomWidth: 0.5,
    borderColor: '#F1F1F1',
  }
});
