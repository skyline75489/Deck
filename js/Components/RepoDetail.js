'use strict';

var React = require('React');
var ListView = require('ListView');
var ScrollView = require('ScrollView');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Image = require('Image');
var Text = require('Text');
var TouchableOpacity = require('TouchableOpacity');
var AsyncStorage = require('AsyncStorage');
var ActivityIndicatorIOS = require('ActivityIndicatorIOS');
var AlertIOS = require('AlertIOS');

var Base = require('../Common/Base');
var Color = require('../Common/Color');
var Api = require('../Network/Api');

var LanguageRow = require('./LanguageRow');

import Icon from 'react-native-vector-icons/Octicons';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      repoData: null,
      languageData: null,
      contributorsData: null,
      repoDataReady: false,
      languageDataReady: false,
      contributorsDataReady: false,
    };
  },
  componentDidMount: function() {
    var self = this;
    Api.getRepoInfo(this.props.repoName, function(data) {
      if (data.hasOwnProperty('message') && data.message === 'Not Found') {
        AlertIOS.alert(
          'Error',
          'Repo not found!',
          [{text: 'OK', onPress: () => self.props.data.goBack()},]
        );
        return;
      }
      self.setState({
        repoData: data,
        repoDataReady: true,
      });
    });
    Api.getRepoLanguage(this.props.repoName, function(data) {
      self.setState({
        languageData: data,
        languageDataReady: true,
      });
    });
    Api.getRepoContributors(this.props.repoName, function(data) {
      self.setState({
        contributorsData: data,
        contributorsDataReady: true,
      });
    });
  },
  renderLoadingView: function() {
    return (
      <View style={styles.loadingView}>
        <View>
          <ActivityIndicatorIOS
            animating={true}
            style={{height: 30}}
            size="small"
          />
        </View>
      </View>
    );
  },

  render: function() {
    if (!(this.state.repoDataReady &&
       this.state.languageDataReady &&
       this.state.contributorsDataReady)) {
      return this.renderLoadingView();
    }

    // Repo icon and full name
    var data = this.state.repoData;
    var languageData = this.state.languageData;
    var icon = <Icon name="repo" size={16} color="#666666" style={styles.icon}/>;
    if (data.fork) {
      icon = <Icon name="repo-forked" size={16} color="#666666" style={styles.icon}/>;
    }

    // Repo Description, only display if it exists.
    var RepoDescription;
    if (data.description) {
      RepoDescription = (
        <View style={styles.repoDescriptionWrapper}>
          <Text style={styles.repoDescription}>{data.description}</Text>
        </View>
      );
    }

    // Language Statistics
    var languageStatics = [];
    var totalLOC = 0;
    for (var k in languageData) {
      totalLOC += languageData[k];
    }
    for (var k2 in languageData) {
      var percent = (languageData[k2] / totalLOC * 100).toFixed(1);
      languageStatics.push(<LanguageRow key={Base.makeKey()} name={k2} percent={percent}/>);
    }

    return (
      <ScrollView style={styles.container}>
        <View style={styles.repoNameWrapper}>
          {icon}
          <Text style={styles.repoFullName}>{data.full_name}</Text>
        </View>
        <View style={styles.actionWrapper}>
            <View style={styles.actionItemWrapper}>
              <Icon name="eye-watch" size={16} color="#666666" style={styles.icon}/>
              <Text style={styles.actionText}>Watch {data.subscribers_count}</Text>
            </View>

            <View style={styles.actionItemWrapper}>
              <Icon name="star" size={16} color="#666666" style={styles.icon}/>
              <Text style={styles.actionText}>Star {data.watchers_count}</Text>
            </View>

            <View style={styles.actionItemWrapper}>
              <Icon name="repo-forked" size={16} color="#666666" style={styles.icon}/>
              <Text style={styles.actionText}>Fork {data.network_count}</Text>
            </View>
        </View>

        {RepoDescription}

        <View style={styles.languageWrapper}>
          {languageStatics}
        </View>
      </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 64,
  },
  repoNameWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: Color.github_border_light_gray,
  },
  repoFullName: {
    marginLeft: 5,
    color: Color.github_link,
  },
  repoDescriptionWrapper: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: Color.github_border_light_gray,
  },
  repoDescription: {
    color: Color.github_font_gray,
  },
  actionWrapper: {
    flex: 3,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom : 10,
    borderBottomWidth: 0.5,
    borderColor: Color.github_border_light_gray,
  },
  actionItemWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    color: Color.github_font_gray,
    marginLeft: 5,
  },
  languageWrapper: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: Color.github_border_light_gray,
  },
  gray: {
    color: Color.github_font_gray,
  },
  icon: {
    width: 15,
    height: 15,
  },
  loadingView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
