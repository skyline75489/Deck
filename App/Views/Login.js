'use strict';

var React = require('react-native');
var {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBarIOS
} = React;

var Base = require("../Common/Base");

var Icon = require("react-native-icons");

var LoginView = React.createClass({
  _doLogin: function() {
    this.props.navigator.replace({ id: 'home' });
  },
  render: function() {
    return (
      <View style={styles.containter}>
      <Icon
        name='ion|social-github'
        size={100}
        color='black'
        style={styles.icon_github}
      />
      <View style={styles.inputContainter}>
      <TextInput
        ref="email"
        style={styles.inputs}
        placeholder="Username or email"
        keyboardType="default"
        clearButtonMode="while-editing"
        returnKeyType="next"
        autoFocus={true}
        onChangeText={(email) => this.setState({email: email})}
        onEndEditing={()=>{
              this.refs["password"].focus();
        }}
       />

       <TextInput
        ref="password"
        style={styles.inputs}
        placeholder="Password"
        password="true"
        keyboardType="default"
        clearButtonMode="while-editing"
        returnKeyType="done"
        onSubmitEditing={this._doLogin}
        onChangeText={(password) => this.setState({password: password})}
       />
       </View>
      </View>
      )
  }
});

var styles = StyleSheet.create({
  containter: {
    flex: 1,
    alignItems: 'center',
  },
  inputContainter: {
    marginTop: 30,
    borderRadius: 5,
    overflow: 'hidden',
  },
  inputs: {
    height: 40,
    width: Base.width/1.3,
    fontSize: 14,
    padding: 10,
  },
  icon_github: {
    marginTop: 100,
    width: 100,
    height: 100,
  },
});

module.exports = LoginView;
