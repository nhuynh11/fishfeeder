// arduino code

// require johnny-five
var five = require('johnny-five'), board, motor, led;

board = new five.Board();

board.on("ready", function() {
  // create new motor hardware instance
  var motor = new five.Motor({
    pin: 5  // output pin
  });
});

// initialized the instance for pubnub

var pubnub = PUBNUB({
  　subscribe_key : 'sub-c-50867924-b132-11e7-85f8-821de3cbacaa',                          
  　publish_key   : 'pub-c-cb9e8d3b-884b-4c46-a2fa-0d4e9861b724'
});

pubnub.subscribe({
  channel: 'feed',
  callback: function(message) {
    // spin the motor algorithm
    if(motor) {
      if (message.action === 'feed') {
        motor.start(100); // motor speed (pwm, 255 max)
        // delay to allow motor to run for 1 second then stop
        board.wait(1000, function() {
          motor.stop();
        });
      }
    }
    // error: function(err) {console.log(err);}
  }
  
});

