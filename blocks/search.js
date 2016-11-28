/**
 * Created by Gilad on 16/06/16.
 */

const Twitter = require('twitter');

module.exports.search = function (req, res) {
    var args = req.body.args;
    var project = req.body.projectMetadata;

    var consumerKey = args.consumerKey,
        consumerSecret = args.consumerSecret,
        accessTokenKey = args.accessTokenKey,
        accessTokenSecret = args.accessTokenSecret,
        searchURL = "search/tweets",
        query = {q: args.query};

    var to = args.to || "to";

    var r = {
        callback        : "",
        contextWrites   : {}
    };

    var client = new Twitter({
        consumer_key: consumerKey,
        consumer_secret: consumerSecret,
        access_token_key: accessTokenKey,
        access_token_secret: accessTokenSecret
    });


    client.get(searchURL, query, function(error, tweets, response) {
        if(error){
            r.contextWrites[to] = error;
            r.callback = 'error';
        }
        else{
            r.contextWrites[to] = tweets;
            r.callback = 'success';
        }
        res.status(200).send(r);
    });
};