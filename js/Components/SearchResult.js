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
var ActivityIndicatorIOS = require('ActivityIndicatorIOS');

var Base = require('../Common/Base');
var Api = require('../Network/Api');

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
    if(!query.trim()) {
      return;
    }
    var self = this;
    this.setState({
      empty: false,
      rowDataReady: false
    });

    if (option === 'Repo') {
      Api.getSearchRepo(query, function(data) {
        self.setState({
          empty: false,
          option: option,
          rowData: data.items,
          rowDataReady: true,
          dataSource: self.state.dataSource.cloneWithRows(data.items),
        });
      });
    } else if (option === 'User') {
      Api.getSearchUser(query, function(data) {
        self.setState({
          empty: false,
          option: option,
          rowData: data.items,
          rowDataReady: true,
          dataSource: self.state.dataSource.cloneWithRows(data.items),
        });
      });
    }
  },
  _renderRow: function(data) {
    if (this.state.option === 'Repo') {
      var Row = <RepoRow data={data} goToRepo={this.props.goToRepo}/>;
    } else if (this.state.option === 'User') {
      var Row = <UserRow data={data} goToUser={this.props.goToUser}/>;
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
      return <View />;
    } else if (!this.state.rowDataReady) {
      return this.renderLoadingView();
    }
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        scrollEnabled={this.props.scrollEnabled}
      />
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
