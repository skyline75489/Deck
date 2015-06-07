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
  StatusBarIOS
} = React;

var RepoRow = require('./RepoRow');

module.exports = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(this.props.dataSource),
    };
  },
  _renderRow: function(data) {
    return (
      <View style={styles.row}>
         <RepoRow data={data} goToRepo={this.props.goToRepo}/>
      </View>
    );
  },
  render: function() {
    return(
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
});

