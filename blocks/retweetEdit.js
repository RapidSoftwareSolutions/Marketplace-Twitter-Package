/**
 * Created by Gilad on 16/06/16.
 */

const Twitter = require('twitter');

module.exports.retweetEdit = function (req, res) {
    var args = req.body.args;
    var project = req.body.projectMetadata;

    var consumerKey = args.consumerKey,
        consumerSecret = args.consumerSecret,
        accessTokenKey = args.accessTokenKey,
        accessTokenSecret = args.accessTokenSecret,
        retweetEditURL = "statuses/update",
        tweetId = args.tweetId,
        tweetAddition = args.tweetAddition;

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

    client.get('statuses/show/' + tweetId, function(error, tweet, response){
        if(error){
            r.contextWrites[to] = error;
            r.callback = 'error';
            res.status(200).send(r);
        }
        else{
            var editedTweet = tweet.text + "\n" + tweetAddition;
            client.post(retweetEditURL, {status: editedTweet},  function(error, tweet, response){
                if(error){
                    r.contextWrites[to] = error;
                    r.callback = 'error';
                }
                else{
                    r.contextWrites[to] = "Successfully tweeted: " + editedTweet;
                    r.callback = 'success';
                }
                res.status(200).send(r);
            });
        }
    });
};