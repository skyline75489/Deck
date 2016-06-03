'use strict';

var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Text = require('Text');
var Base = require('../Common/Base');
var Color = require('../Common/Color');

module.exports = React.createClass({
  render: function() {
    var k = this.props.name;
    var percent = this.props.percent;
    return (
      <View style={styles.container}>
        <Text style={styles.languageName}>{k} {percent}%</Text>
        <View style={
          [{width: (Base.width - 20) * percent * 0.01},
           {height: 5},
           {backgroundColor: Color.github_language_color[k]}]
         }
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 5,
  },
  languageName: {
    color: Color.github_font_dark,
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 3,
  },
});
