var apiKey = require('./../.env').apiKey;
var Githubapp = function(){
};

Githubapp.prototype.getGithubInfo = function(username, displayFunction){
  $.get('https://api.github.com/users/'+username+'?access_token='+apiKey).then(function(response){
    displayFunction(response);
  }).fail(function(error){
    displayFunction(error.responseJSON.message);
  });
};

exports.githubappModule = Githubapp;
