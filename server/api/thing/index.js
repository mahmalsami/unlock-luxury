'use strict';

var express = require('express');
var controller = require('./thing.controller');

var youtubeDL = require('../../components/youtubeDL');

function onDLDone() {
	console.log("Download is done !");
}

youtubeDL.getVideosUrlFromQuery("toto");
youtubeDL.getVideoFromURL("youtube.com/toto" , onDLDone);


var router = express.Router();

router.get('/', controller.index);

module.exports = router;