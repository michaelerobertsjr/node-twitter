var Stream = require('user-stream');
var stream = new Stream({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});

//create stream
stream.stream();

//listen stream data
stream.on('data', function(data) {
  console.log(data);
});