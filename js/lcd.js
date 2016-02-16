var five = require('johnny-five'),
			board = new five.Board(),
            lcd;

board.on("ready", function() {
	console.log('Bord ready!');
    lcd = new five.LCD({
        pins: [4, 7, 10, 11, 12, 13],
        backlight: 6,
        rows: 2,
        cols: 20
    });

    lcd.useChar("check");
    lcd.useChar("heart");
    lcd.useChar("duck");

    var that =  this;

    setInterval(function() {
        lcd.clear().print('Hello :duck: :D');
        lcd.cursor(1, 0).print("I :heart: you Ali!)");
        //lcd.cursor(1, 0).print("I :heart: Javascript!)");

        that.wait(4000, function() {
            lcd.clear().cursor(0, 0).print("I :heart: you Daddy!)");
            lcd.cursor(1, 0).print("I :heart: you Najooh!)");
        });
    }, 6000);


    this.repl.inject({
        lcd: lcd
    });
});

console.log('\nWaiting for nodeBot to connect');


