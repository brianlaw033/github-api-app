var Githubapp = require('./../js/gitapi.js').githubappModule;
var githubObject = new Githubapp();
var mode = "";
var displayInfo = function(response){
  if (mode === ''){
    $('#loginName').html('Login Name: '+ response.login);
    $('#link').html('Link: '+ response.url);
  }else if (mode === '/repos'){
    var reposArray = response;
    $('#reposname').empty();
    $('#reposdate').empty();
    for (i=0;i<reposArray.length; i++){
      $('#reposname').append('<li>'+ reposArray[i].name + '</li>');
      $('#reposdate').append('<li>'+ moment(reposArray[i].created_at).format('LLL')+ '</li>');
    }
    console.log(reposArray[1].name);
  }
};

$(document).ready(function(){
  $('.btn').click(function(){
    var username = $('#username').val();
    $('#username').val('');
    if(this.id === 'basic'){
      mode = '';
    }else if (this.id === 'reposDate') {
      mode = '/repos';
    }

    githubObject.getGithubInfo(username, displayInfo, mode);
  });
});
