var five = require('johnny-five'),
			board = new five.Board(),
			led,
			toggleState;
			
board.on("ready", function() {
	console.log('Bord ready!');
	led = new five.Led(13);
	setInterval(toggleLED, 200);
	function toggleLED(){
		toggleState = !toggleState;
		((toggleState) && (led.on())) || (led.off());
	}
});	

console.log('\nWaiting for nodeBot to connect');		
			
			
