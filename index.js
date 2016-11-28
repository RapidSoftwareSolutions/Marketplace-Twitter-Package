"use strict";

/** IMPORTS **/
const express       = require('express'),
    bodyParser      = require('body-parser');

/** SET UP **/
//If ran in production - use enviroment PORT. In development, default to 8080
const PORT = process.env.PORT || 8080;
//The package name
global.PACKAGE_NAME = "Twitter";

//Initialize web server
const app = express();
app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended:true}));

/** ENDPOINT **/
//A metadata endpoint at GET /api/PACKAGE_NAME should return package metadata
app.get(`/api/${PACKAGE_NAME}`, require('./metadata.js').do);

//For each block, a POST /api/PACKAGE_NAME/BLOCK_NAME should execute the block
app.post(`/api/${PACKAGE_NAME}/tweet`, require('./blocks/tweet.js').tweet);
app.post(`/api/${PACKAGE_NAME}/retweet`, require('./blocks/retweet.js').retweet);
app.post(`/api/${PACKAGE_NAME}/retweetEdit`, require('./blocks/retweetEdit.js').retweetEdit);
app.post(`/api/${PACKAGE_NAME}/search`, require('./blocks/search.js').search);

/** START LISTENING **/
app.listen(PORT);
console.log('UP');
