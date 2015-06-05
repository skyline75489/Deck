'use strict';

var Api = {
  getUserProfile: function (username, callback) {
    var url = 'https://api.github.com/users/' + username;
    fetch(url)
    .then((response) => response.json())
    .then(function(ret) {
      var url = 'https://api.github.com/users/' + username + '/starred?per_page=1';
      fetch(url, {method: 'HEAD'})
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
  getRepoInfo: function(repoName, callback) {
    var url = 'https://api.github.com/repos/' + repoName;
    fetch(url)
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

  getRepoLanguage: function(repoName, callback) {
    var url = 'https://api.github.com/repos/' + repoName + '/languages';
    fetch(url)
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

  getRepoContributors: function(repoName, callback) {
    var url = 'https://api.github.com/repos/' + repoName + '/contributors';
    fetch(url)
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
};

module.exports = Api;
