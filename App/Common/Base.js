'use strict';

var React = require('react-native');
var {
  AlertIOS
} = React;

var width = require('Dimensions').get('window').width,
    height = require('Dimensions').get('window').height;

module.exports = {
  width: width,
  height: height,
  showMessage: function(title, msg) {
    AlertIOS.alert(title, msg)
  },
  makeKey: function() {
  	var text = "";
  	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  	for(var i=0; i < 5; i++)
  	   text += possible.charAt(Math.floor(Math.random() * possible.length));

  	return text;
  }
};
