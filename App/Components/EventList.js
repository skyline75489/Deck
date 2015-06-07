'use strict';

var React = require('react-native');

var {
  ListView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  StatusBarIOS,
  ActivityIndicatorIOS,
} = React;

var Base = require("../Common/Base");
var Api = require('../Network/Api');

var UserProfile = require('./UserProfile');
var RepoDetail = require('./RepoDetail');
var EventRow = require('./EventRow');

var FAKE_DATA = [
  {
    "id": "2845409428",
    "type": "CreateEvent",
    "actor": {
      "id": 7037733,
      "login": "certaincen",
      "gravatar_id": "",
      "url": "https://api.github.com/users/certaincen",
      "avatar_url": "https://avatars.githubusercontent.com/u/7037733?"
    },
    "repo": {
      "id": 36478795,
      "name": "certaincen/certaincen.github.io",
      "url": "https://api.github.com/repos/certaincen/certaincen.github.io"
    },
    "payload": {
      "ref": null,
      "ref_type": "repository",
      "master_branch": "master",
      "description": "",
      "pusher_type": "user"
    },
    "public": true,
    "created_at": "2015-05-29T02:42:00Z"
  },
  {
    "id": "2845389492",
    "type": "CreateEvent",
    "actor": {
      "id": 7037733,
      "login": "certaincen",
      "gravatar_id": "",
      "url": "https://api.github.com/users/certaincen",
      "avatar_url": "https://avatars.githubusercontent.com/u/7037733?"
    },
    "repo": {
      "id": 36478342,
      "name": "certaincen/chuangketiepages",
      "url": "https://api.github.com/repos/certaincen/chuangketiepages"
    },
    "payload": {
      "ref": null,
      "ref_type": "repository",
      "master_branch": "master",
      "description": "",
      "pusher_type": "user"
    },
    "public": true,
    "created_at": "2015-05-29T02:28:55Z"
  },
  {
    "id": "2845355428",
    "type": "WatchEvent",
    "actor": {
      "id": 219689,
      "login": "lexrus",
      "gravatar_id": "",
      "url": "https://api.github.com/users/lexrus",
      "avatar_url": "https://avatars.githubusercontent.com/u/219689?"
    },
    "repo": {
      "id": 36212012,
      "name": "johnil/VVeboTableViewDemo",
      "url": "https://api.github.com/repos/johnil/VVeboTableViewDemo"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2015-05-29T02:07:27Z"
  },
  {
    "id": "2843844949",
    "type": "ForkEvent",
    "actor": {
      "id": 153183,
      "login": "sofish",
      "gravatar_id": "",
      "url": "https://api.github.com/users/sofish",
      "avatar_url": "https://avatars.githubusercontent.com/u/153183?"
    },
    "repo": {
      "id": 10947021,
      "name": "darkskyapp/forecast-io-translations",
      "url": "https://api.github.com/repos/darkskyapp/forecast-io-translations"
    },
    "payload": {
      "forkee": {
        "id": 36452590,
        "name": "forecast-io-translations",
        "full_name": "sofish/forecast-io-translations",
        "owner": {
          "login": "sofish",
          "id": 153183,
          "avatar_url": "https://avatars.githubusercontent.com/u/153183?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/sofish",
          "html_url": "https://github.com/sofish",
          "followers_url": "https://api.github.com/users/sofish/followers",
          "following_url": "https://api.github.com/users/sofish/following{/other_user}",
          "gists_url": "https://api.github.com/users/sofish/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/sofish/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/sofish/subscriptions",
          "organizations_url": "https://api.github.com/users/sofish/orgs",
          "repos_url": "https://api.github.com/users/sofish/repos",
          "events_url": "https://api.github.com/users/sofish/events{/privacy}",
          "received_events_url": "https://api.github.com/users/sofish/received_events",
          "type": "User",
          "site_admin": false
        },
        "private": false,
        "html_url": "https://github.com/sofish/forecast-io-translations",
        "description": "a module for translating Forecast API summaries into any language",
        "fork": true,
        "url": "https://api.github.com/repos/sofish/forecast-io-translations",
        "forks_url": "https://api.github.com/repos/sofish/forecast-io-translations/forks",
        "keys_url": "https://api.github.com/repos/sofish/forecast-io-translations/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/sofish/forecast-io-translations/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/sofish/forecast-io-translations/teams",
        "hooks_url": "https://api.github.com/repos/sofish/forecast-io-translations/hooks",
        "issue_events_url": "https://api.github.com/repos/sofish/forecast-io-translations/issues/events{/number}",
        "events_url": "https://api.github.com/repos/sofish/forecast-io-translations/events",
        "assignees_url": "https://api.github.com/repos/sofish/forecast-io-translations/assignees{/user}",
        "branches_url": "https://api.github.com/repos/sofish/forecast-io-translations/branches{/branch}",
        "tags_url": "https://api.github.com/repos/sofish/forecast-io-translations/tags",
        "blobs_url": "https://api.github.com/repos/sofish/forecast-io-translations/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/sofish/forecast-io-translations/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/sofish/forecast-io-translations/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/sofish/forecast-io-translations/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/sofish/forecast-io-translations/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/sofish/forecast-io-translations/languages",
        "stargazers_url": "https://api.github.com/repos/sofish/forecast-io-translations/stargazers",
        "contributors_url": "https://api.github.com/repos/sofish/forecast-io-translations/contributors",
        "subscribers_url": "https://api.github.com/repos/sofish/forecast-io-translations/subscribers",
        "subscription_url": "https://api.github.com/repos/sofish/forecast-io-translations/subscription",
        "commits_url": "https://api.github.com/repos/sofish/forecast-io-translations/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/sofish/forecast-io-translations/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/sofish/forecast-io-translations/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/sofish/forecast-io-translations/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/sofish/forecast-io-translations/contents/{+path}",
        "compare_url": "https://api.github.com/repos/sofish/forecast-io-translations/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/sofish/forecast-io-translations/merges",
        "archive_url": "https://api.github.com/repos/sofish/forecast-io-translations/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/sofish/forecast-io-translations/downloads",
        "issues_url": "https://api.github.com/repos/sofish/forecast-io-translations/issues{/number}",
        "pulls_url": "https://api.github.com/repos/sofish/forecast-io-translations/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/sofish/forecast-io-translations/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/sofish/forecast-io-translations/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/sofish/forecast-io-translations/labels{/name}",
        "releases_url": "https://api.github.com/repos/sofish/forecast-io-translations/releases{/id}",
        "created_at": "2015-05-28T16:47:59Z",
        "updated_at": "2015-05-28T16:48:00Z",
        "pushed_at": "2015-04-29T14:20:32Z",
        "git_url": "git://github.com/sofish/forecast-io-translations.git",
        "ssh_url": "git@github.com:sofish/forecast-io-translations.git",
        "clone_url": "https://github.com/sofish/forecast-io-translations.git",
        "svn_url": "https://github.com/sofish/forecast-io-translations",
        "homepage": "",
        "size": 866,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "JavaScript",
        "has_issues": false,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 0,
        "mirror_url": null,
        "open_issues_count": 0,
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master",
        "public": true
      }
    },
    "public": true,
    "created_at": "2015-05-28T16:48:01Z",
    "org": {
      "id": 2413857,
      "login": "darkskyapp",
      "gravatar_id": "",
      "url": "https://api.github.com/orgs/darkskyapp",
      "avatar_url": "https://avatars.githubusercontent.com/u/2413857?"
    }
  },
  {
    "id": "2843521127",
    "type": "WatchEvent",
    "actor": {
      "id": 216638,
      "login": "jonathanslenders",
      "gravatar_id": "",
      "url": "https://api.github.com/users/jonathanslenders",
      "avatar_url": "https://avatars.githubusercontent.com/u/216638?"
    },
    "repo": {
      "id": 34074446,
      "name": "j-bennet/dockercli",
      "url": "https://api.github.com/repos/j-bennet/dockercli"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2015-05-28T15:18:10Z"
  },
  {
    "id": "2843496340",
    "type": "WatchEvent",
    "actor": {
      "id": 216638,
      "login": "jonathanslenders",
      "gravatar_id": "",
      "url": "https://api.github.com/users/jonathanslenders",
      "avatar_url": "https://avatars.githubusercontent.com/u/216638?"
    },
    "repo": {
      "id": 1897743,
      "name": "asweigart/pyperclip",
      "url": "https://api.github.com/repos/asweigart/pyperclip"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2015-05-28T15:11:49Z"
  },
  {
    "id": "2843293737",
    "type": "WatchEvent",
    "actor": {
      "id": 5310542,
      "login": "Aufree",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Aufree",
      "avatar_url": "https://avatars.githubusercontent.com/u/5310542?"
    },
    "repo": {
      "id": 18838039,
      "name": "nixzhu/dev-blog",
      "url": "https://api.github.com/repos/nixzhu/dev-blog"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2015-05-28T14:19:28Z"
  },
  {
    "id": "2843279418",
    "type": "WatchEvent",
    "actor": {
      "id": 5310542,
      "login": "Aufree",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Aufree",
      "avatar_url": "https://avatars.githubusercontent.com/u/5310542?"
    },
    "repo": {
      "id": 35732214,
      "name": "realm/SwiftLint",
      "url": "https://api.github.com/repos/realm/SwiftLint"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2015-05-28T14:15:28Z",
    "org": {
      "id": 7575099,
      "login": "realm",
      "gravatar_id": "",
      "url": "https://api.github.com/orgs/realm",
      "avatar_url": "https://avatars.githubusercontent.com/u/7575099?"
    }
  },
  {
    "id": "2864047469",
    "type": "MemberEvent",
    "actor": {
      "id": 1400198,
      "login": "phoenixlzx",
      "gravatar_id": "",
      "url": "https://api.github.com/users/phoenixlzx",
      "avatar_url": "https://avatars.githubusercontent.com/u/1400198?"
    },
    "repo": {
      "id": 15865103,
      "name": "phoenixlzx/nyaacat_page",
      "url": "https://api.github.com/repos/phoenixlzx/nyaacat_page"
    },
    "payload": {
      "member": {
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
        "site_admin": false
      },
      "action": "added"
    },
    "public": true,
    "created_at": "2015-06-04T15:25:12Z"
  },
];

module.exports = React.createClass({
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
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds,
      dateReady: false,
    };
  },

  componentDidMount: function() { 
    var me = this;
    Api.getUserReceivedEvents(this.props.data.username, function(data){
      me.setState({
        dataSource: me.state.dataSource.cloneWithRows(data),
        dataReady: true,
      });
    });
  },

  _renderRow: function(data) {
    return (
      <View style={styles.row}>
         <EventRow data={data} goToUser={this.goToUser} goToRepo={this.goToRepo}/>
      </View>
    );
  },
  render: function() {
    if (!this.state.dataReady) {
      return this.renderLoadingView();
    }
    return(
      <View style={styles.wrap}>
      <ListView dataSource={this.state.dataSource}
      renderRow={this._renderRow}>
      </ListView>
      </View>
    );
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

});

var styles = StyleSheet.create({
  wrap: {
    top: -10,
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 10,
    overflow: 'hidden',
    borderBottomWidth: 0.5,
    borderColor: '#F1F1F1',
  },
  loadingView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

});


