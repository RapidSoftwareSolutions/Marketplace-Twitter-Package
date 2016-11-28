# Twitter Package
Twitter is an online news and social networking service where users post and read short 140-character messages called 'tweets'.
* Domain: twitter.com
* Credentials: consumerKey, consumerSecret

## How to get credentials: 
1. Go to https://dev.twitter.com/apps
2. Click on "Create New App"
3. Enter the details of your application
4. Find you keys under "Keys and Access Tokens"

## Twitter.tweet
This block allows you to tweet whatever status you like.

| Field            | Type       | Description
|------------------|------------|----------
| consumerKey      | credentials| The consumer key obtained from Tweeter.
| consumerSecret   | credentials| The consumer secret obtained from Tweeter.
| accessTokenKey   | String     | The access token key obtained from Tweeter.
| accessTokenSecret| String     | The access token secret obtained from Tweeter.
| tweetBody        | String     | The status you would like to tweet.
| to               | String     | The status that was tweeted.

## Twitter.search
This block allows you to search for tweets.

| Field            | Type       | Description
|------------------|------------|----------
| consumerKey      | credentials| The consumer key obtained from Tweeter.
| consumerSecret   | credentials| The consumer secret obtained from Tweeter.
| accessTokenKey   | String     | The access token key obtained from Tweeter.
| accessTokenSecret| String     | The access token secret obtained from Tweeter.
| query            | String     | The search will be using this query.
| to               | String     | The tweets that are found.

## Twitter.retweet
This block allows you to retweet a certain tweet.

| Field            | Type       | Description
|------------------|------------|----------
| consumerKey      | credentials| The consumer key obtained from Tweeter.
| consumerSecret   | credentials| The consumer secret obtained from Tweeter.
| accessTokenKey   | String     | The access token key obtained from Tweeter.
| accessTokenSecret| String     | The access token secret obtained from Tweeter.
| tweetId          | String     | The ID of the tweet to retweet.
| to               | String     | The tweet that was retweeted.

## Twitter.retweetEdit
This block allows you to retweet a certain tweet and to add additional text to it.

| Field            | Type       | Description
|------------------|------------|----------
| consumerKey      | credentials| The consumer key obtained from Tweeter.
| consumerSecret   | credentials| The consumer secret obtained from Tweeter.
| accessTokenKey   | String     | The access token key obtained from Tweeter.
| accessTokenSecret| String     | The access token secret obtained from Tweeter.
| tweetId          | String     | The ID of the tweet to retweet.
| tweetAddition    | String     | The addition to the tweet.
| to               | String     | The tweet that was retweeted.

