var fs = require('fs');
var csv = require('./images.csv')
var request = require('request');
var cheerio = require('cheerio');

// GET request
request("http://substack.net/images/", function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("success!");

    // Node equivalent of Nokogiri gem
    var $ = cheerio.load(body);

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

      // // Write to CSV
      // var csvLines = url + "-" + permission + "-" + fileType
      // fs.write('./images.csv', csvLines, 'a');

    });
  };
});

console.log("--------- loading... ---------");

