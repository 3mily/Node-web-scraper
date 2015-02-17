var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

request("http://substack.net/images/", function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("success");
    // console.log(body); => all the HTML for the page
    var $ = cheerio.load(body);
    $('').each(function(i, element){
      console.log(element);
    });
  }
});
