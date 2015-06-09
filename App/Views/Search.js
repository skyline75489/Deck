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
  TouchableHighlight,
  Navigator,
} = React;

var ActionSheetIOS = require('ActionSheetIOS');

var Base = require("../Common/Base");
var Color = require("../Common/Color");

var UserProfile = require('../Components/UserProfile');
var RepoDetail = require('../Components/RepoDetail');
var SearchResult = require("../Components/SearchResult");

var Icon = require("react-native-icons");
var Router = require('react-native-router');

var ACTION_OPTIONS = ['Repo', 'User'];

var SearchTextInput = React.createClass({
  getInitialState: function() {
    return {
      currentSearchType: 'Repo',
    };
  },
  handleSubmit: function(event) {
    this.props.customAction({action:'submit', data: event.nativeEvent.text});
  },
  resignResponder: function() {
    this.refs.input.blur();
  },
  render: function() {
    var placeholder = `Search ${this.state.currentSearchType}`;
    return (
      <TextInput 
        ref="input"
        style={styles.input} 
        autoFocus={true}
        returnKeyType={'search'} 
        placeholder={placeholder} 
        onSubmitEditing={this.handleSubmit}
        onChangeText={(text) => this.setState({input: text})}
      />
    );
  },
});

var SearchIcon = React.createClass({
  render: function() {
    return (
      <TouchableOpacity 
        onPress={()=>{
          this.props.customAction({action: 'search'});
        }}>
        <Icon name='octicons|search' size={16} color='white' style={styles.icon}/>
      </TouchableOpacity>
    );
  },
});


var SearchOption = React.createClass({
  render: function() {
    return (
      <TouchableOpacity onPress={()=>{
          this.props.customAction({action: 'option'});
        }}>
        <Icon name='octicons|threeBars' size={16} color='white' style={styles.icon}/>
      </TouchableOpacity>
    );
  },
});

var Search = React.createClass({
  getInitialState: function() {
    return {
      currentSearchType: 'Repo',
    };
  },
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
  showActionSheet: function() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: ACTION_OPTIONS,
    }, 
    (buttonIndex) => {
      this.setState({
        currentSearchType: ACTION_OPTIONS[buttonIndex]
      });
      this.refs.input.setState({
        currentSearchType: ACTION_OPTIONS[buttonIndex]
      });
    });
  },
  customAction: function(event) {
    switch(event.action) {
      case 'option':
        this.showActionSheet();
        break;
      case 'submit':
        var query = event.data;
        this.refs.search.doSearch(query, this.state.currentSearchType);
        break;
      case 'search':
        var query = this.refs.input.state.input;
        console.log(query);
        this.refs.search.doSearch(query, this.state.currentSearchType);
        this.refs.input.resignResponder();
        break;
    }
  },
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <SearchOption style={[styles.corner, styles.alignLeft]} customAction={this.customAction} />
          <SearchTextInput ref="input" customAction={this.customAction} />
          <SearchIcon style={[styles.corner, styles.alignLeft]} customAction={this.customAction} />
        </View>
        <View style={styles.searchResult}>
          <SearchResult 
            ref="search"
            goToUser={this.goToUser}
            goToRepo={this.goToRepo}
          />
        </View>
      </View>
    );
  }
});


module.exports = React.createClass({
  getInitialState: function() {
    return {
      route: {
        name: null,
        index: null
      },
      dragStartX: null,
      didSwitchView: null,
    }
  },
  onBack: function(navigator) {
    if (this.state.route.index > 0) {
      navigator.pop();
    }
  },
  onForward: function(route, navigator) {
    route.index = this.state.route.index + 1 || 1;
    navigator.push(route);
  },

  _renderScene: function(route, navigator) {

    var goForward = function(route) {
      route.index = this.state.route.index + 1 || 1;
      navigator.push(route);
    }.bind(this);

    var goBackwards = function() {
      this.onBack(navigator);
    }.bind(this);

    var customAction = function(opts) {
      this.customAction(opts);
    }.bind(this);

    var Content = route.component;

    if (route.name === 'search') {
      return (
        <Search 
          nav={navigator}
          toRoute={goForward}
          toBack={goBackwards}
        />
      );
    }
    return (
      <View>
        <Content
          name={route.name}
          index={route.index}
          data={route.data}
          toRoute={goForward}
          toBack={goBackwards}
          customAction={customAction}
          style={styles.searchResult}
        />
      </View>
    );
  },
  render: function() {
    return (
      <Navigator 
        initialRoute={{name: 'search', index: 0}}
        renderScene={this._renderScene}
      />
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
  navbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 64, // Default iOS navbar height
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 13,
    backgroundColor: Color.github_link,
  },
  corner: {
    flex: 1,
    justifyContent: 'center',
  },
  alignLeft: {
    alignItems: 'flex-start'
  },
  alignRight: {
    alignItems: 'flex-end'
  },
  icon: {
    width: 32,
    height: 32,
    marginTop: 4,
    marginLeft: 0, 
    marginRight: 0,
  },
  input: {
    backgroundColor: '#f5f8fa',
    width: 220,
    height: 32,
    marginTop: 13,
    paddingLeft: 10,
    marginLeft: 10,
    marginRight: 10,
    color: 'black',
    borderRadius: 4
  },
  searchResult: {
    top: 64,
    height: Base.height - 64
  }
});
