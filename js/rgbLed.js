var five = require('johnny-five'),
	io   = require('socket.io').listen(8080),
	led;

five.Board().on("ready", function(){
	//Initialized RGB LED
	 led = new five.Led.RGB([9, 10, 11]);

    this.repl.inject({ led: led });

	io.sockets.on("connection", function(socket) {
        console.log("New connection: " + socket.id);
        socket.on("changeColor", function(color) {
            console.log("Changing color: " + color);
            led.color(color)
        });
    });

	led.on();

});
