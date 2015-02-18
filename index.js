var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

request("http://substack.net/images/", function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("success!");
    var $ = cheerio.load(body);

    // for each tr do ~~
    $('tr').each(function(i, element){
      var url = "http://substack.net/images" + element.children[2].children[0].attribs.href;
      console.log("-Url: " + url);
      var permission = element.children[0].children[0].children[0].data
      console.log("-Permission: " + permission)

  // if (url.split(".")[1].match(/\./)){
      if (url.match(/\./)){
        var fileType = url.split(".")[2];
      } else {
        var fileType = "directory"
      }
      console.log("-File type: " + fileType);
      console.log("=====");

    });
  };
});

console.log("--------- loading... ---------");


