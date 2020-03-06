function ajax_get(url, callback) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      console.log('responseText:' + xmlhttp.responseText);
      try {
        var data = JSON.parse(xmlhttp.responseText);
      } catch (err) {
        console.log(err.message + " in " + xmlhttp.responseText);
        return;
      }
      callback(data);
    }
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}


ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
  document.getElementById("id").innerHTML = data[0]["id"];
  document.getElementById("url").innerHTML = data[0]["url"];

  var html = '<img src="' + data[0]["url"] + '">';
  document.getElementById("image").innerHTML = html;


});

ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
  document.getElementById("id").innerHTML = data[0]["id"];
  document.getElementById("url").innerHTML = data[0]["url"];

  var html = '<img src="' + data[0]["url"] + '">';
  document.getElementById("image2").innerHTML = html;


});

ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
  document.getElementById("id").innerHTML = data[0]["id"];
  document.getElementById("url").innerHTML = data[0]["url"];

  var html = '<img src="' + data[0]["url"] + '">';
  document.getElementById("image3").innerHTML = html;


});

ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
  document.getElementById("id").innerHTML = data[0]["id"];
  document.getElementById("url").innerHTML = data[0]["url"];

  var html = '<img src="' + data[0]["url"] + '">';
  document.getElementById("image4").innerHTML = html;


});

ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
  document.getElementById("id").innerHTML = data[0]["id"];
  document.getElementById("url").innerHTML = data[0]["url"];

  var html = '<img src="' + data[0]["url"] + '">';
  document.getElementById("image5").innerHTML = html;


});

ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
  document.getElementById("id").innerHTML = data[0]["id"];
  document.getElementById("url").innerHTML = data[0]["url"];

  var html = '<img src="' + data[0]["url"] + '">';
  document.getElementById("image6").innerHTML = html;


});

ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
  document.getElementById("id").innerHTML = data[0]["id"];
  document.getElementById("url").innerHTML = data[0]["url"];

  var html = '<img src="' + data[0]["url"] + '">';
  document.getElementById("image7").innerHTML = html;


});

ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
  document.getElementById("id").innerHTML = data[0]["id"];
  document.getElementById("url").innerHTML = data[0]["url"];

  var html = '<img src="' + data[0]["url"] + '">';
  document.getElementById("image8").innerHTML = html;


});

ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
  document.getElementById("id").innerHTML = data[0]["id"];
  document.getElementById("url").innerHTML = data[0]["url"];

  var html = '<img src="' + data[0]["url"] + '">';
  document.getElementById("image9").innerHTML = html;


});

ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
  document.getElementById("id").innerHTML = data[0]["id"];
  document.getElementById("url").innerHTML = data[0]["url"];

  var html = '<img src="' + data[0]["url"] + '">';
  document.getElementById("image10").innerHTML = html;


});

ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
  document.getElementById("id").innerHTML = data[0]["id"];
  document.getElementById("url").innerHTML = data[0]["url"];

  var html = '<img src="' + data[0]["url"] + '">';
  document.getElementById("image11").innerHTML = html;


});

ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
  document.getElementById("id").innerHTML = data[0]["id"];
  document.getElementById("url").innerHTML = data[0]["url"];

  var html = '<img src="' + data[0]["url"] + '">';
  document.getElementById("image12").innerHTML = html;


});

ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
  document.getElementById("id").innerHTML = data[0]["id"];
  document.getElementById("url").innerHTML = data[0]["url"];

  var html = '<img src="' + data[0]["url"] + '">';
  document.getElementById("image13").innerHTML = html;


});

ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
  document.getElementById("id").innerHTML = data[0]["id"];
  document.getElementById("url").innerHTML = data[0]["url"];

  var html = '<img src="' + data[0]["url"] + '">';
  document.getElementById("image14").innerHTML = html;


});

ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
  document.getElementById("id").innerHTML = data[0]["id"];
  document.getElementById("url").innerHTML = data[0]["url"];

  var html = '<img src="' + data[0]["url"] + '">';
  document.getElementById("image15").innerHTML = html;


});

ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
  document.getElementById("id").innerHTML = data[0]["id"];
  document.getElementById("url").innerHTML = data[0]["url"];

  var html = '<img src="' + data[0]["url"] + '">';
  document.getElementById("image16").innerHTML = html;


});

ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
  document.getElementById("id").innerHTML = data[0]["id"];
  document.getElementById("url").innerHTML = data[0]["url"];

  var html = '<img src="' + data[0]["url"] + '">';
  document.getElementById("image17").innerHTML = html;


});

ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
  document.getElementById("id").innerHTML = data[0]["id"];
  document.getElementById("url").innerHTML = data[0]["url"];

  var html = '<img src="' + data[0]["url"] + '">';
  document.getElementById("image18").innerHTML = html;


});

ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
  document.getElementById("id").innerHTML = data[0]["id"];
  document.getElementById("url").innerHTML = data[0]["url"];

  var html = '<img src="' + data[0]["url"] + '">';
  document.getElementById("image19").innerHTML = html;


});

ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
  document.getElementById("id").innerHTML = data[0]["id"];
  document.getElementById("url").innerHTML = data[0]["url"];

  var html = '<img src="' + data[0]["url"] + '">';
  document.getElementById("image20").innerHTML = html;


});
