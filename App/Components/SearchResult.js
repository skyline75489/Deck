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
  ActivityIndicatorIOS,
  StatusBarIOS
} = React;

var Base = require("../Common/Base");
var Api = require('../Network/Api');

var UserProfile = require('./UserProfile');
var RepoDetail = require('./RepoDetail');
var RepoRow = require('./RepoRow');
var UserRow = require('./UserRow');

module.exports = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      empty: true,
      option: '',
      rowData: null,
      rowDataReady: false,
      dataSource: ds
    };
  },
  doSearch: function(query, option) {
    var me = this;
    this.setState({
      empty: false,
      rowDataReady: false
    });

    if (option === 'Repo') {
      Api.getSearchRepo(query, function(data) {
        me.setState({
          empty: false,
          option: option,
          rowData: data.items,
          rowDataReady: true,
          dataSource: me.state.dataSource.cloneWithRows(data.items),
        });
      });
    } else if(option === 'User') {
      Api.getSearchUser(query, function(data) {
        me.setState({
          empty: false,
          option: option,
          rowData: data.items,
          rowDataReady: true,
          dataSource: me.state.dataSource.cloneWithRows(data.items),
        });
      });
    }
  },
  _renderRow: function(data) {
    if (this.state.option === 'Repo') {
      var Row = <RepoRow data={data} goToRepo={this.props.goToRepo}/>
    } else if (this.state.option === 'User') {
      var Row = <UserRow data={data} goToUser={this.props.goToUser}/>
    }
     return (
      <View style={styles.row}>
        {Row}
      </View>
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
  },

  render: function() {
    if (this.state.empty) {
      return <View></View>;
    } else if (!this.state.rowDataReady) {
      return this.renderLoadingView();
    }
    return (
      <ListView 
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        scrollEnabled={this.props.scrollEnabled}>
      </ListView>
    );
  },
});

var styles = StyleSheet.create({
  row: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 10,
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

