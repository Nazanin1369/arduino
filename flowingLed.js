var five = require('johnny-five');
var myBoard, lowestPin, highestPin, leds;

myBoard = new five.Board({port: "/dev/cu.usbmodem1411"});

lowestPin = 2; 
highestPin = 9;
leds = [];



myBoard.on('ready', function(){
	//set pins 1 through 6 as output
	for(var pin = lowestPin; pin <= highestPin; pin++){
		leds.push(new five.Led({'pin': pin, mode: 1}));
	}
	//iterate over the pins
	//turn the led on/off from lowest to the highest
	var i = 0;
	var nIntervId = setInterval(function(){
		if(i <= 7){
			leds[i].on();
		}
		if(i > 7 && i <= 15){
			leds[i - 8].off();
		}
		if(i > 15 && i <= 23){
			leds.reverse();
			leds[i - 16].on();
		}
		if(i > 23){
			clearInterval(nIntervId);
		}
		i++;
	}, 1000);
});