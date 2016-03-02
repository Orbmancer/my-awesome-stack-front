
var gif = require('../../my-awesome-stack-shared/src/shared/gif');
var request = require('request');

var api = "http://localhost:4242/gifs/random";

window.randomizeFromShared = function() {
    gif.getRandomGIF('kitten')
        .then(function(url){
            appendGIF(url);
        });
};

window.randomizeFromAPI = function() {

    request(api, function(error, response, body){
        if(!error && response.statusCode == 200){
            appendGIF(body);
        }else{
            console.log('error='+JSON.stringify(error));
        }
    });
};

function appendGIF(url){
    var DOM_img = document.createElement("img");
    DOM_img.src = url;

    document.getElementById("gifList").appendChild(DOM_img);
}