'use strict';

var Secrets = require('../Common/Secrets');

var myHeaders = new Headers();
myHeaders.append('Authorization', Secrets.token);

var Api = {
  doRequest: function(url, callback) {
    fetch(url, {headers: myHeaders})
    .then((response) => response.json())
    .then(function(ret) {
      callback && callback(ret);
    })
    .catch((err) => {
      console.log(err);
      return callback && callback(false);
    })
    .done();
  },

  getUserProfile: function (username, callback) {
    var url = `https://api.github.com/users/${username}`;
    fetch(url, {headers: myHeaders})
    .then((response) => response.json())
    .then(function(ret) {
      var url2 = `https://api.github.com/users/${username}/starred?per_page=1`;
      fetch(url2, {method: 'HEAD', headers: myHeaders,})
      .then((response) => response.headers)
      .then(function(headers) {
        var link = headers.get('Link');
        var count_regex = /&page=(\d+)>; rel="last"/;
        var matches = count_regex.exec(link);

        ret.starred_count = matches[1];
        callback && callback(ret);
      })
      .catch((err) => {
        console.log(err);
      })
      .done();
    })
    .catch((err) => {
      console.log(err);
      return callback && callback(false);
    })
    .done();
  },

  getUserReceivedEvents: function(username, callback) {
    var url = `https://api.github.com/users/${username}/received_events`;
    return this.doRequest(url, callback);
  },

  getUserReceivedEventsPromise: function(username) {
    var url = `https://api.github.com/users/${username}/received_events`;
    return fetch(url, {headers: myHeaders})
           .then((response) => response.json());
  },

  getRepoInfo: function(repoName, callback) {
    var url = `https://api.github.com/repos/${repoName}`;
    return this.doRequest(url, callback);
  },

  getRepoLanguage: function(repoName, callback) {
    var url = `https://api.github.com/repos/${repoName}/languages`;
    return this.doRequest(url, callback);
  },

  getRepoContributors: function(repoName, callback) {
    var url = `https://api.github.com/repos/${repoName}/contributors`;
    return this.doRequest(url, callback);
  },

  getRepoReadme: function(repoName, callback) {
    var url = `https://api.github.com/repos/${repoName}/readme`;
    return this.doRequest(url, callback);
  },

  getUserRecentlyPushedRepo: function(username, page_count, per_page, callback) {
    var url = `https://api.github.com/users/${username}/repos?sort=pushed&page=${page_count}&per_page=${per_page}`;
    return this.doRequest(url, callback);
  },

  getSearchRepo: function(query, callback) {
    var url = `https://api.github.com/search/repositories?q=${query}`;
    return this.doRequest(url, callback);
  },
  getSearchUser: function(query, callback) {
    var url = `https://api.github.com/search/users?q=${query}`;
    return this.doRequest(url, callback);
  }
};

module.exports = Api;
