var five = require("johnny-five");
var myBoard, key, led;

myBoard = new five.Board({port: "COM5"});

myBoard.on("ready", function() {
    led = new five.Led({pin: 13, mode: 1});
    key = new five.Pin({pin: 11, mode: 0});
 
    key.on("high", function(e){
      console.log("high event captured!")
      led.on();
    });
    
    key.on("low", function(e){
      console.log("low event captured!")
      led.off();
    });
 
});		
			
			
