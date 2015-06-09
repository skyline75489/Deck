'use strict';

var React = require('react-native');
var {
  AsyncStorage,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBarIOS
} = React;

var SMXTabBarIOS = require('SMXTabBarIOS');
var SMXTabBarItemIOS = SMXTabBarIOS.Item;

var Dashboard = require('./Dashboard');
var Activity = require('./Activity');
var Search = require('./Search');

var Me = require('./Me');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'search',
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
      <SMXTabBarIOS
        selectedTab={this.state.selectedTab}
        tintColor={'#4183C4'}
        barTintColor={'#FFFFFF'}
        styles={styles.tabBar}>
        <SMXTabBarItemIOS
          name="dashboard"
          iconName={'ion|ios-home-outline'}
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
        </SMXTabBarItemIOS>
        <SMXTabBarItemIOS
            name="activity"
            iconName={'ion|ios-paper-outline'}
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
        </SMXTabBarItemIOS>
        <SMXTabBarItemIOS
            name="search"
            iconName={'ion|ios-search'}
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
        </SMXTabBarItemIOS>
        <SMXTabBarItemIOS
            name="me"
            iconName={'ion|person'}
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
        </SMXTabBarItemIOS>
      </SMXTabBarIOS>
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

