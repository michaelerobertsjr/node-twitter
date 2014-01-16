var Stream = require('user-stream');
var FB = require('fb');
var stream = new Stream({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});

// Facebook Acccess Token
var access_token = ""
FB.setAccessToken(access_token);

//Text to post
var fbPostText = 'Someone said JAVASCRIPT!';

//create stream
stream.stream();

//listen stream data
stream.on('data', function(data) {

  // Check if there is a tweet data in the stream
  if(data.text){

    // Write that tweet to the console
    console.log(data.text);

    //seach that tweet to see if it contains the text 'javascript'
    if(data.text.toLowerCase().search("javascript") != -1){

      // post to facebook
      FB.api('me/feed', 'post', { message: fbPostText}, function (res) {

        // check for errors and output them
        if(!res || res.error) {

          //output the error
          console.log(!res ? 'error occurred' : res.error);
          return;
        }

        // output the post id
        console.log('Post Id: ' + res.id);

      });
    }
  }

});


// Just so you know it's running
console.log("Monitoring your twitter stream.")
