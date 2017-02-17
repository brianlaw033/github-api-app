var apiKey = require('./../.env').apiKey;
var Githubapp = function(){
};

Githubapp.prototype.getGithubInfo = function(username, displayFunction, mode){
  $.get('https://api.github.com/users/' + username + mode + '?access_token=' + apiKey).then(function(response){
    displayFunction(response);
  }).fail(function(error){
    displayFunction(error.responseJSON.message);
  });
};

exports.githubappModule = Githubapp;
