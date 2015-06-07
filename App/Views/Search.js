'use strict';

var React = require('react-native');

var {
  ListView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} = React;

var ActionSheetIOS = require('ActionSheetIOS');

var Base = require("../Common/Base");
var Color = require("../Common/Color");

var Icon = require("react-native-icons");

var SearchBar = React.createClass({
  render: function() {
    return (
      <TextInput style={styles.input}  placeholder="Search Github" />
    );
  },
});

var SearchIcon = React.createClass({
  render: function() {
    return (<TouchableOpacity>
              <Icon name='octicons|search' size={16} color='white' style={styles.icon}/>
            </TouchableOpacity>);
  },
});

var SearchPage = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>Search page</Text>
      </View>
    );
  },
});

var SearchOption = React.createClass({
  render: function() {
    return (<TouchableOpacity onPress={()=>{
                this.props.customAction({action: 'on'});
              }}>
              <Icon name='octicons|threeBars' size={16} color='white' style={styles.icon}/>
            </TouchableOpacity>);
  },
});

var Icon = require("react-native-icons");
var Router = require('react-native-router');

var ACTION_OPTIONS = ['Repo', 'User'];

module.exports = React.createClass({
  firstRoute: {
    name: 'Search',
    component: SearchPage,
    titleComponent: SearchBar,
    leftCorner: SearchOption,
    rightCorner: SearchIcon,
  },
  getInitialState: function() {
    return {
      currentAction: 'Repo',
    };
  },

  showActionSheet: function() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: ACTION_OPTIONS,
    }, 
    (buttonIndex) => {
      this.setState({
        currentAction: ACTION_OPTIONS[buttonIndex]
      })
    });
  },
  _handleAction: function(evt) {
    switch(evt.action) {
      case 'on':
       this.showActionSheet();
    }
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Router ref="router"
          firstRoute={this.firstRoute}
          headerStyle={styles.header}
          customAction={this._handleAction}
          />
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: Color.github_link,
  },
  icon: {
    width: 32,
    height: 32,
    marginTop: 4,
    marginLeft: 5, 
    marginRight: 5,
  },
  input: {
    backgroundColor: '#f5f8fa',
    width: Base.width - 32 * 2 - 20,
    height: 32,
    marginTop: 6,
    paddingLeft: 10,
    marginLeft: 10,
    marginRight: 10,
    color: 'white',
    borderRadius: 4
  }
});
