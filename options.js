window.onload = function() {
  console.log('here');
  
  document.getElementById('save').onclick=function() {
      var url = document.getElementById('url').value;
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
      console.log(url);
      console.log(username);
      console.log(password);
      //Regexvalidate that it is a url 
      //https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)
      //alert(value);
      chrome.storage.sync.set({'url':url}, function(){
          //alert('saved'+ value);
      });
      chrome.storage.sync.set({'username':username}, function(){
        //alert('saved'+ value);
      });
      chrome.storage.sync.set({'password':password}, function(){
        //alert('saved'+ value);
      });
      gSettings =  BuildSettings(url, username, password);
      var ok = true;
      if(ok){
        window.close();
      }  
  }
  load_data();
}

function load_data(){
  console.log('load_data');
  chrome.storage.sync.get('url', function(data){
    document.getElementById("url").value = data.url;    
    console.log(data.url);
  });
  chrome.storage.sync.get('username', function(data){
    document.getElementById("username").value = data.username;
    console.log(data.username);
  })
  chrome.storage.sync.get('password', function(data){
    document.getElementById("password").value = data.password;
    console.log(data.password);
  });
};