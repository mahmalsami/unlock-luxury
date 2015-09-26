/**
 * Error responses
 */

'use strict';

console.log('Initiating youtube-dl-module ...');


function youtubeDL() {
	var _this = this;
	_this.apiKey = 'someRandomKey';
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
  //Download videos in folder ../data/videos
  onDLDone();
  console.log("[youtubeDL::getVideoFromURL] File has been saved in " + videoURL);
}


youtubeDL.prototype.convertVideoToAudio = function () {
	//To be dl .flac or .wav	
	//Get videos from folder ../data/videos
	//Save within ../data/audio

}



youtubeDL.prototype.getTranscriptForVideos = function () {
	//Get
	var _this = this;
	
	//Get videos from folder ../data/audios
	//Save results in ../data/json

	// To be Called from Nodejs-shell	
	// curl -X POST --data-binary @audio/good-morning-google.flac --header 'Content-Type: audio/x-flac; rate=44100;' 'https://www.google.com/speech-api/v2/recognize?output=json&lang=en-us&key='+_this.apiKey
}


/* Fallback scenario*/
youtubeDL.prototype.getVideoSubtitles = function () {
	//Get video Subtitles with Nodejs and Youtube API ???
	//easy Option
}



module.exports = new youtubeDL();