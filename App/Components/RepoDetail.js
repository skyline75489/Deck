'use strict';

var FAKE_DATA = {
  "id": 22034841,
  "name": "pyfm",
  "full_name": "skyline75489/pyfm",
  "owner": {
    "login": "skyline75489",
    "id": 4710575,
    "avatar_url": "https://avatars.githubusercontent.com/u/4710575?v=3",
    "gravatar_id": "",
    "url": "https://api.github.com/users/skyline75489",
    "html_url": "https://github.com/skyline75489",
    "followers_url": "https://api.github.com/users/skyline75489/followers",
    "following_url": "https://api.github.com/users/skyline75489/following{/other_user}",
    "gists_url": "https://api.github.com/users/skyline75489/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/skyline75489/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/skyline75489/subscriptions",
    "organizations_url": "https://api.github.com/users/skyline75489/orgs",
    "repos_url": "https://api.github.com/users/skyline75489/repos",
    "events_url": "https://api.github.com/users/skyline75489/events{/privacy}",
    "received_events_url": "https://api.github.com/users/skyline75489/received_events",
    "type": "User",
    "site_admin": false
  },
  "private": false,
  "html_url": "https://github.com/skyline75489/pyfm",
  "description": "使用Python编写的豆瓣FM(douban.fm)命令行播放器",
  "fork": false,
  "url": "https://api.github.com/repos/skyline75489/pyfm",
  "forks_url": "https://api.github.com/repos/skyline75489/pyfm/forks",
  "keys_url": "https://api.github.com/repos/skyline75489/pyfm/keys{/key_id}",
  "collaborators_url": "https://api.github.com/repos/skyline75489/pyfm/collaborators{/collaborator}",
  "teams_url": "https://api.github.com/repos/skyline75489/pyfm/teams",
  "hooks_url": "https://api.github.com/repos/skyline75489/pyfm/hooks",
  "issue_events_url": "https://api.github.com/repos/skyline75489/pyfm/issues/events{/number}",
  "events_url": "https://api.github.com/repos/skyline75489/pyfm/events",
  "assignees_url": "https://api.github.com/repos/skyline75489/pyfm/assignees{/user}",
  "branches_url": "https://api.github.com/repos/skyline75489/pyfm/branches{/branch}",
  "tags_url": "https://api.github.com/repos/skyline75489/pyfm/tags",
  "blobs_url": "https://api.github.com/repos/skyline75489/pyfm/git/blobs{/sha}",
  "git_tags_url": "https://api.github.com/repos/skyline75489/pyfm/git/tags{/sha}",
  "git_refs_url": "https://api.github.com/repos/skyline75489/pyfm/git/refs{/sha}",
  "trees_url": "https://api.github.com/repos/skyline75489/pyfm/git/trees{/sha}",
  "statuses_url": "https://api.github.com/repos/skyline75489/pyfm/statuses/{sha}",
  "languages_url": "https://api.github.com/repos/skyline75489/pyfm/languages",
  "stargazers_url": "https://api.github.com/repos/skyline75489/pyfm/stargazers",
  "contributors_url": "https://api.github.com/repos/skyline75489/pyfm/contributors",
  "subscribers_url": "https://api.github.com/repos/skyline75489/pyfm/subscribers",
  "subscription_url": "https://api.github.com/repos/skyline75489/pyfm/subscription",
  "commits_url": "https://api.github.com/repos/skyline75489/pyfm/commits{/sha}",
  "git_commits_url": "https://api.github.com/repos/skyline75489/pyfm/git/commits{/sha}",
  "comments_url": "https://api.github.com/repos/skyline75489/pyfm/comments{/number}",
  "issue_comment_url": "https://api.github.com/repos/skyline75489/pyfm/issues/comments{/number}",
  "contents_url": "https://api.github.com/repos/skyline75489/pyfm/contents/{+path}",
  "compare_url": "https://api.github.com/repos/skyline75489/pyfm/compare/{base}...{head}",
  "merges_url": "https://api.github.com/repos/skyline75489/pyfm/merges",
  "archive_url": "https://api.github.com/repos/skyline75489/pyfm/{archive_format}{/ref}",
  "downloads_url": "https://api.github.com/repos/skyline75489/pyfm/downloads",
  "issues_url": "https://api.github.com/repos/skyline75489/pyfm/issues{/number}",
  "pulls_url": "https://api.github.com/repos/skyline75489/pyfm/pulls{/number}",
  "milestones_url": "https://api.github.com/repos/skyline75489/pyfm/milestones{/number}",
  "notifications_url": "https://api.github.com/repos/skyline75489/pyfm/notifications{?since,all,participating}",
  "labels_url": "https://api.github.com/repos/skyline75489/pyfm/labels{/name}",
  "releases_url": "https://api.github.com/repos/skyline75489/pyfm/releases{/id}",
  "created_at": "2014-07-20T14:28:12Z",
  "updated_at": "2015-05-26T08:19:54Z",
  "pushed_at": "2015-01-13T05:04:07Z",
  "git_url": "git://github.com/skyline75489/pyfm.git",
  "ssh_url": "git@github.com:skyline75489/pyfm.git",
  "clone_url": "https://github.com/skyline75489/pyfm.git",
  "svn_url": "https://github.com/skyline75489/pyfm",
  "homepage": "",
  "size": 574,
  "stargazers_count": 94,
  "watchers_count": 94,
  "language": "Python",
  "has_issues": true,
  "has_downloads": true,
  "has_wiki": true,
  "has_pages": false,
  "forks_count": 24,
  "mirror_url": null,
  "open_issues_count": 0,
  "forks": 24,
  "open_issues": 0,
  "watchers": 94,
  "default_branch": "master",
  "network_count": 24,
  "subscribers_count": 14
}

var LANGUAGE_DATA = {
  "JavaScript": 14351,
  "Objective-C": 4733
};

var CONTRIBUTION_DATA = [
  {
    "login": "skyline75489",
    "id": 4710575,
    "avatar_url": "https://avatars.githubusercontent.com/u/4710575?v=3",
    "gravatar_id": "",
    "url": "https://api.github.com/users/skyline75489",
    "html_url": "https://github.com/skyline75489",
    "followers_url": "https://api.github.com/users/skyline75489/followers",
    "following_url": "https://api.github.com/users/skyline75489/following{/other_user}",
    "gists_url": "https://api.github.com/users/skyline75489/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/skyline75489/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/skyline75489/subscriptions",
    "organizations_url": "https://api.github.com/users/skyline75489/orgs",
    "repos_url": "https://api.github.com/users/skyline75489/repos",
    "events_url": "https://api.github.com/users/skyline75489/events{/privacy}",
    "received_events_url": "https://api.github.com/users/skyline75489/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 130
  },
  {
    "login": "felixonmars",
    "id": 1006477,
    "avatar_url": "https://avatars.githubusercontent.com/u/1006477?v=3",
    "gravatar_id": "",
    "url": "https://api.github.com/users/felixonmars",
    "html_url": "https://github.com/felixonmars",
    "followers_url": "https://api.github.com/users/felixonmars/followers",
    "following_url": "https://api.github.com/users/felixonmars/following{/other_user}",
    "gists_url": "https://api.github.com/users/felixonmars/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/felixonmars/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/felixonmars/subscriptions",
    "organizations_url": "https://api.github.com/users/felixonmars/orgs",
    "repos_url": "https://api.github.com/users/felixonmars/repos",
    "events_url": "https://api.github.com/users/felixonmars/events{/privacy}",
    "received_events_url": "https://api.github.com/users/felixonmars/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 4
  },
  {
    "login": "Fansion",
    "id": 5452767,
    "avatar_url": "https://avatars.githubusercontent.com/u/5452767?v=3",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Fansion",
    "html_url": "https://github.com/Fansion",
    "followers_url": "https://api.github.com/users/Fansion/followers",
    "following_url": "https://api.github.com/users/Fansion/following{/other_user}",
    "gists_url": "https://api.github.com/users/Fansion/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Fansion/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Fansion/subscriptions",
    "organizations_url": "https://api.github.com/users/Fansion/orgs",
    "repos_url": "https://api.github.com/users/Fansion/repos",
    "events_url": "https://api.github.com/users/Fansion/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Fansion/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 1
  }
];

var README_DATA = {
  "name": "README.md",
  "path": "README.md",
  "sha": "b91d686a456440febcd3c3cf08b3d05c18f6114e",
  "size": 267,
  "url": "https://api.github.com/repos/skyline75489/Sunshine-React-Native/contents/README.md?ref=master",
  "html_url": "https://github.com/skyline75489/Sunshine-React-Native/blob/master/README.md",
  "git_url": "https://api.github.com/repos/skyline75489/Sunshine-React-Native/git/blobs/b91d686a456440febcd3c3cf08b3d05c18f6114e",
  "download_url": "https://raw.githubusercontent.com/skyline75489/Sunshine-React-Native/master/README.md",
  "type": "file",
  "content": "U3Vuc2hpbmUgUmVhY3QgTmF0aXZlCj09PT09PT09PT09PT09PT09PT09PQoK\nQSBzaW1wbGUgYW5kIGluY29tcGxldGUgY2xvbmUgb2YgQW5kcm9pZCBhcHAg\nW1N1bnNoaW5lXShodHRwczovL2dpdGh1Yi5jb20vdWRhY2l0eS9TdW5zaGlu\nZSksIHBvd2VyZWQgYnkgW1JlYWN0LU5hdGl2ZV0oaHR0cHM6Ly9naXRodWIu\nY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZSkuCgohW3NjcmVlbnNob3RdKHN1\nbnNoaW5lLmdpZikKCkxpY2Vuc2UKPT09PT09PQoKTUlUIExpY2Vuc2UK\n",
  "encoding": "base64",
  "_links": {
    "self": "https://api.github.com/repos/skyline75489/Sunshine-React-Native/contents/README.md?ref=master",
    "git": "https://api.github.com/repos/skyline75489/Sunshine-React-Native/git/blobs/b91d686a456440febcd3c3cf08b3d05c18f6114e",
    "html": "https://github.com/skyline75489/Sunshine-React-Native/blob/master/README.md"
  }
};

var React = require('react-native');
var {
  AsyncStorage,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  AlertIOS,
  ScrollView,
  ActivityIndicatorIOS,
} = React;

var Base = require("../Common/Base");
var Color = require("../Common/Color");
var Base64 = require('../Common/Base64');

var Api = require('../Network/Api');

var LanguageRow = require('./LanguageRow');

var Icon = require("react-native-icons");
var Markdown = require('react-native-markdown');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      repoData: null,
      languageData: null,
      readmeData: null,
      repoDataReady: false,
      languageDataReady: false,
      readmeDataReady: false,
    };
  },
  componentDidMount: function() { 
    var that = this;
    Api.getRepoInfo(this.props.data.repoName, function(data) {
      if (data.hasOwnProperty('message') && data.message === "Not Found") {
        AlertIOS.alert(
          'Error',
          'Repo not found!',
          [{text: 'OK', onPress: () => that.props.data.goBack()},]
        );
        return;
      }
      that.setState({
        repoData: data,
        repoDataReady: true,
      });
    });
    Api.getRepoLanguage(this.props.data.repoName, function(data) {
      that.setState({
        languageData: data,
        languageDataReady: true,
      });
    });
    /*Api.getRepoContributors(this.props.data.repoName, function(data) {
      that.setState({
        contributorsData: data,
        contributorsDataReady: true,
      });
    });
    */
    Api.getRepoReadme(this.props.data.repoName, function(data) {
      that.setState({
        readmeData: data,
        readmeDataReady: true,
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
    if (! (this.state.repoDataReady &&
       this.state.languageDataReady &&
       this.state.readmeDataReady)) {
      return this.renderLoadingView();
    }
    var data = this.state.repoData;
    var languageData = this.state.languageData;
    var readmeData = this.state.readmeData;
    var readmeContent = Base64.decode(readmeData.content);

    var icon = <Icon name='octicons|repo' size={16} color='#666666' style={styles.icon}/>;
    if (data.fork) {
      icon = <Icon name='octicons|repoForked' size={16} color='#666666' style={styles.icon}/>;
    }

    var languageStatics = [];
    var totalLOC = 0;
    for (var k in languageData) {
      totalLOC += languageData[k];
    }
    for (var k in languageData) {
      var percent = (languageData[k] / totalLOC * 100).toFixed(1);
      languageStatics.push(<LanguageRow key={Base.makeKey()} name={k} percent={percent}/>);
    }
    return (
      <ScrollView style={styles.containter}>
        <View style={styles.repoNameWrapper}>
          {icon}
          <Text style={styles.repoFullName}>{data.full_name}</Text>
        </View>
        <View style={styles.actionWrapper}>
            <View style={styles.actionItemWrapper}>
              <Icon name='octicons|eyeWatch' size={16} color='#666666' style={styles.icon}/>
              <Text style={styles.actionText}>Watch {data.subscribers_count}</Text>
            </View>

            <View style={styles.actionItemWrapper}>
              <Icon name='octicons|star' size={16} color='#666666' style={styles.icon}/>
              <Text style={styles.actionText}>Star {data.watchers_count}</Text>
            </View>

            <View style={styles.actionItemWrapper}>
              <Icon name='octicons|repoForked' size={16} color='#666666' style={styles.icon}/>
              <Text style={styles.actionText}>Fork {data.network_count}</Text>
            </View>
        </View>

        <View style={styles.repoDescriptionWrapper}>
          <Text style={styles.repoDescription}>{data.description}</Text>
        </View>

        <View style={styles.languageWrapper}>
          {languageStatics}
        </View>

        <View style={styles.readmeWrapper}>
          <Text>{readmeContent}</Text>
        </View>
      </ScrollView>
      );
  }
});

var styles = StyleSheet.create({
  containter: {
    backgroundColor: '#fff',
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
  readmeWrapper: {
    padding: 10,
  },
  loadingView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
