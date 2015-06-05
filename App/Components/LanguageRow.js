var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
} = React;

var Base = require("../Common/Base");

module.exports = React.createClass({
  render: function() {
    var k = this.props.name;
    var percent = this.props.percent;
    return (
      <View style={styles.container}>
        <Text style={styles.languageName}>{k} {percent}%</Text>
        <View style={[{width: (Base.width - 20) * percent * 0.01}, 
                       {height: 5}, 
                       {backgroundColor: Base.github_language_color[k]}]}>
        </View>
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
    color: '#666666',
    fontSize: 13,
    marginBottom: 3,
  },
});
