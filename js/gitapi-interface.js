var Githubapp = require('./../js/gitapi.js').githubappModule;
var githubObject = new Githubapp();

var displayInfo = function(response){
  $('#name').html('Login Name: '+ response.login);
  $('#link').html('Link: '+ response.url);
};

$(document).ready(function(){
  $('#btn').click(function(){
    var username = $('#username').val();
    $('#username').val('');
    githubObject.getGithubInfo(username, displayInfo);
  })
});
