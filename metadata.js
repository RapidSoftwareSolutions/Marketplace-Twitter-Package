"use strict";

module.exports.do = function(req, res){
    res.status(200).send({
        'package': 'Twitter',
        "tagline": "Post and get Tweets from Twitter",
        "description": "Twitter is an online news and social networking service where users post and read short 140-character messages called 'tweets'.",
        "image": "http://logo.clearbit.com/twitter.com",
        "repo": "https://github.com/RapidSoftwareSolutions/Marketplace-Twitter-Package",
        "accounts": {
            "domain": "twitter.com",
            "credentials": [
                "consumerKey",
                "consumerSecret"
            ]
        },
        'blocks'      : [{
            "name":"tweet",
            "args":[
                {name:"consumerKey", type:"credentials", info:"The consumer key obtained from Tweeter."},
                {name:"consumerSecret", type:"credentials", info:"The consumer secret obtained from Tweeter."},
                {name:"accessTokenKey", type:"String", info:"The access token key obtained from Tweeter."},
                {name:"accessTokenSecret", type:"String", info:"The access token secret obtained from Tweeter."},
                {name:"tweetBody", type:"String", info:"The status you would like to tweet."},
                {name:"to", type:"String", info:"The status that was tweeted."}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"This block allows you to tweet whatever status you like."
        },
        {
            "name":"search",
            "args":[
                {name:"consumerKey", type:"credentials", info:"The consumer key obtained from Tweeter."},
                {name:"consumerSecret", type:"credentials", info:"The consumer secret obtained from Tweeter."},
                {name:"accessTokenKey", type:"String", info:"The access token key obtained from Tweeter."},
                {name:"accessTokenSecret", type:"String", info:"The access token secret obtained from Tweeter."},
                {name:"query", type:"String", info:"The search will be using this query."},
                {name:"to", type:"String", info:"The tweets that are found."}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"This block allows you to search for tweets."
        },
        {
            "name":"retweet",
            "args":[
                {name:"consumerKey", type:"credentials", info:"The consumer key obtained from Tweeter."},
                {name:"consumerSecret", type:"credentials", info:"The consumer secret obtained from Tweeter."},
                {name:"accessTokenKey", type:"String", info:"The access token key obtained from Tweeter."},
                {name:"accessTokenSecret", type:"String", info:"The access token secret obtained from Tweeter."},
                {name:"tweetId", type:"String", info:"The ID of the tweet to retweet."},
                {name:"to", type:"String", info:"The tweet that was retweeted."}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"This block allows you to retweet a certain tweet."
        },
        {
            "name":"retweetEdit",
            "args":[
                {name:"consumerKey", type:"credentials", info:"The consumer key obtained from Tweeter."},
                {name:"consumerSecret", type:"credentials", info:"The consumer secret obtained from Tweeter."},
                {name:"accessTokenKey", type:"String", info:"The access token key obtained from Tweeter."},
                {name:"accessTokenSecret", type:"String", info:"The access token secret obtained from Tweeter."},
                {name:"tweetId", type:"String", info:"The ID of the tweet to retweet."},
                {name:"tweetAddition", type:"String", info:"The addition to the tweet."},
                {name:"to", type:"String", info:"The tweet that was retweeted."}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"This block allows you to retweet a certain tweet and to add additional text to it."
        }]
    })
};