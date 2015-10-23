var five = require('johnny-five'),
	io   = require('socket.io').listen(8081),
	right_eye,
    left_eye,
    legs;

five.Board().on("ready", function(){
	//Initialized RGB LED
	right_eye = new five.Led.RGB([9, 10, 11]);
    left_eye = new five.Led.RGB([3, 5, 6]);
    legs = new five.Servo({
         pin: 7
    });

     legs.sweep();
    //this.repl.inject({ led: right_eye });
    //this.repl.inject({ led: left_eye });

	io.sockets.on("connection", function(socket) {
        console.log("New connection: " + socket.id);
        socket.on("changeRightEyeColor", function(color) {
            console.log("Changing right eye color: " + color);
            right_eye.color(color);
        });
        socket.on("changeLeftEyeColor", function(color) {
            console.log("Changing left eye color: " + color);
            left_eye.color(color);
        });
    });

	right_eye.on();
    left_eye.on();


});
