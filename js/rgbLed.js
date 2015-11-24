var five = require('johnny-five'),
	io   = require('socket.io').listen(8081),
	right_eye,
    left_eye,
    nose,
    neck;

five.Board().on("ready", function(){
	//Initialized RGB LED
	right_eye = new five.Led.RGB([9, 10, 11]);
    left_eye = new five.Led.RGB([3, 5, 6]);
    //Initialized Servo
    /*neck = new five.Servo({
         pin: 7,
         startAt: 0
    });*/

    nose = new five.Proximity({
        controller: 'HCSR04',
        pin: 7
    });

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

       /* socket.on("moveNeckToLeft", function() {
              neck.to(45, 5);
        });

        socket.on("moveNeckToRight", function() {
              neck.to(90, 5);
        });

        socket.on("NeckFreeze", function() {
            console.log('stop')
              neck.stop();
        });*/

        nose.on("data", function() {
            if(this.cm < 10) {
                left_eye.color('#cc0000');
                right_eye.color('#cc0000');
                console.log('Very Angry!')
            } else if(10 <= this.cm && this.cm <= 20) {
                left_eye.color('#e6005c');
                right_eye.color('#e6005c');
                console.log('Angry!')
            }else if(20 < this.cm && this.cm <= 30) {
                left_eye.color('#ff33cc');
                right_eye.color('#ff33cc');
                console.log('Bad!')
            }else if(this.cm > 30){
                console.log('OK')
                left_eye.color('#00ffff');
                right_eye.color('#00ffff');
            }
            /*if(Math.random() < 0.1)
            {
                socket.emit('newDistance', 'object is ' + this.inches + ' inches away');
            }*/
        });
    });

	right_eye.on();
    left_eye.on();


});
