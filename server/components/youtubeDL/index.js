/**
 * Error responses
 */

'use strict';

console.log('Initiating youtube-dl-module ...');


function youtubeDL() {
	var _this = this;
}


/*
	Fake Data display
*/

youtubeDL.prototype.getUrlListFromYoutube = function (query) {
	return [{"url" : "youtube.ty/toto"} , {"url" : "youtube.ty/tata"} , {"url" : "youtube.ty/titi"}];
}

youtubeDL.prototype.getVideosUrlFromQuery = function (query) {
	var tab = new Array();

	//Todo
	this.getUrlListFromYoutube(query).forEach(function (key) {
		console.log(key);
		// tab.push()
	});

	return 0;
}

youtubeDL.prototype.getVideoFromURL = function (videoURL, onDLDone) {
  console.log("[youtubeDL::getVideoFromURL] Try to download: " + videoURL);
  onDLDone();
  console.log("[youtubeDL::getVideoFromURL] File has been saved in " + videoURL);
}


youtubeDL.prototype.getVideoFromURL = function () {

}


module.exports = new youtubeDL();