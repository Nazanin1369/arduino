var five = require('johnny-five');
var board, led_num, ledPins, photoresistor, sensorValue, ledLevel;


board = new five.Board({port: "/dev/cu.usbmodem1411"});
led_num = 8;
ledPins = [];
ledLevel = 0; // sensor value converted into LED 'bars'

board.on('ready', function(){
	//create a new photo resistor
	photoresistor = new five.Sensor({
    	pin: "A0",
    	freq: 250
  	});
	// make all the LED pins outputs  
	for(var led = 5; led < led_num; led++){
		ledPins.push(new five.Led({'pin': led, mode: 1}));
	}
	
	// Inject the `sensor` hardware into
  	// the Repl instance's context;
  	// allows direct command line access
	board.repl.inject({
		pot: photoresistor
	});
	
	// "data" get the current reading from the photoresistor
  	photoresistor.on("data", function(err, value) {
		// map to the number of LEDs
		var ledLevel = five.Fn.map(value, 300, 1023, 0, led_num);

		for(var i = 0; i < led_num; led++){
			if(ledPins[i].pin < ledLevel){
				// turn on pins less than the level
				ledPins[i].on();
			}else{
				// turn off pins higher than the level
				ledPins[i].off();
			}
		}
  	});

});