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
} = React;

var { TabBarIOS, } = require('react-native-icons');
var TabBarItemIOS = TabBarIOS.Item;

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
      <TabBarIOS
        selectedTab={this.state.selectedTab}
        tintColor={'#4183C4'}
        barTintColor={'#FFFFFF'}
        styles={styles.tabBar}>
        <TabBarItemIOS
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
        </TabBarItemIOS>
        <TabBarItemIOS
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
        </TabBarItemIOS>
        <TabBarItemIOS
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
        </TabBarItemIOS>
        <TabBarItemIOS
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
