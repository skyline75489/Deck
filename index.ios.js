/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View,
} = React;

var Home       = require('./App/Views/Home');
var Login      = require('./App/Views/Login');

var Deck = React.createClass({
 getInitialState: function() {
    return {
      logined: false
    };
  },
  renderScene: function(route, nav) {
      switch (route.id) {
        case 'home':
          return <Home navigator={nav}/>;
        case 'login':
          return <Login navigator={nav}/>;
        default:
          return (
            <Login navigator={nav}/>
          );
      }
  },
  render: function() {
    return (
      <Navigator
      style={{backgroundColor: '#fff'}}
      initialRoute={{ id: "home" }}
      renderScene={this.renderScene}
      configureScene={(route) => {
          if (route.sceneConfig) {
              return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight
        }
      }
    />
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Deck', () => Deck);
