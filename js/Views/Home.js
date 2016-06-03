'use strict';

var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Image = require('Image');
var Text = require('Text');
var TextInput = require('TextInput');
var TouchableOpacity = require('TouchableOpacity');
var TabBarIOS = require('TabBarIOS');
import Icon from 'react-native-vector-icons/Ionicons';
var TabBarItemIOS = Icon.TabBarItemIOS;

var Dashboard = require('./Dashboard');
var Activity = require('./Activity');
var Search = require('./Search');

var Me = require('./Me');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'dashboard',
      notifCount: 0,
      presses: 0,
    };
  },
  _renderContent: function() {
    switch (this.state.selectedTab) {
      case 'dashboard':
        return <Dashboard navigator={this.props.nav}/>;
      case 'activity':
        return <Activity navigator={this.props.nav}/>;
      case 'me':
        return <Me navigator={this.props.nav}/>;
      case 'search':
        return <Search navigator={this.props.nav}/>;
      default:
        return (
          <View>
          <Text>Hello</Text>
          </View>
        );
    }
  },
  render: function () {
    return (
      <TabBarIOS
        selectedTab={this.state.selectedTab}
        tintColor={'#4183C4'}
        barTintColor={'#FFFFFF'}
        styles={styles.tabBar}>
        <TabBarItemIOS
          name="dashboard"
          iconName={'ios-home-outline'}
          title={'Dashboard'}
          iconSize={32}
          accessibilityLabel="Dashboard Tab"
          selected={this.state.selectedTab === 'dashboard'}
          onPress={() => {
            this.setState({
              selectedTab: 'dashboard',
            });
          }}>
          {this._renderContent()}
        </TabBarItemIOS>
        <TabBarItemIOS
            name="activity"
            iconName={'ios-paper-outline'}
            title={'Activity'}
            iconSize={32}
            accessibilityLabel="Activity Tab"
            selected={this.state.selectedTab === 'activity'}
            onPress={() => {
            this.setState({
              selectedTab: 'activity',
            });
          }}>
          {this._renderContent()}
        </TabBarItemIOS>
        <TabBarItemIOS
            name="search"
            iconName={'ios-search'}
            title={'Search'}
            iconSize={32}
            accessibilityLabel="Search Tab"
            selected={this.state.selectedTab === 'search'}
            onPress={() => {
            this.setState({
              selectedTab: 'search',
            });
          }}>
          {this._renderContent()}
        </TabBarItemIOS>
        <TabBarItemIOS
            name="me"
            iconName={'ios-person'}
            title={'Me'}
            iconSize={32}
            accessibilityLabel="Me Tab"
            selected={this.state.selectedTab === 'me'}
            onPress={() => {
            this.setState({
              selectedTab: 'me',
            });
          }}>
          {this._renderContent()}
        </TabBarItemIOS>
      </TabBarIOS>
    );
  }
});

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});
