function isIncognito(callback){
    var fs = window.RequestFileSystem || window.webkitRequestFileSystem;

    if (!fs) {
        callback(false);
    } else {
        fs(window.TEMPORARY,
            100,
            callback.bind(undefined, false),
            callback.bind(undefined, true)
        );
    }
}


    
$(document).ready(function () {
  
  var Parser = new UAParser();
  var a = Parser.getResult().browser.name + " "+ Parser.getResult().browser.version +" "  + Parser.getResult().browser.major;
  
  $("#browserType").text(a); 
    
  var x=navigator.plugins.length; // store the total no of plugin stored 
  
  
  var txt="Total plugin installed: "+x+"<br/>";
  txt+="Available plugins are:"+"<br/>";
  for(var i=0;i<x;i++)
  {
  txt+=navigator.plugins[i].name + "<br/>"; 
  }
  $("#plugins").html(txt); 
   
   
   $("#screenres").text("Screen resolution is: " + window.screen.width * window.devicePixelRatio + "x" + window.screen.height * window.devicePixelRatio +" Color Depth: " + screen.colorDepth);
   
   
   isIncognito(function(itIs){
    if(itIs){
        $("#privatebrow").text("You are in incognito mode");
    }else{
        $("#privatebrow").text("You are NOT in incognito mode");
    }
});
   
 
  var browser = Parser.getResult().browser.name;
  var homepageurl = browser == 'Chrome' ? 'https://www.google.com/_/chrome/newtab' : browser == 'op' ? 'about:speeddial' : browser=='sa' ? 'http://livepage.apple.com' : 'about:home'
  var yhomepage = window.home;
  
  $("#yhomepage").html(yhomepage); 
  
});

