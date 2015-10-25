## arduino
This project contains various functions working with arduino UNO board using NodeJS and JohnnyFive

### 1- keypress.js
 @description turns on the LED on port 13 by capturing the high and low events published by the key.

### 2- flowingLed.js
 @description uses LEDs to create flowing LED lights. As the name implies, these flowing lights are made up of eight LEDs in a row which successively light up and dim one after another like flowing water. 

### 3- buzzer.js
 @description uses a buzzer to make some noise. First with traditional way by defining notes and then by using **j5-songs** library.

### 4- photocell.js
 @description A photoresistor or light-dependent resistor (LDR) or photocell is a light-controlled variable resistor. The resistance of a photoresistor decreases with increasing incident light intensity; in other words, it exhibits photoconductivity. A photoresistor can be applied in light-sensitive detector circuits, and light- and dark-activated switching circuits.
 	The resistance of the photoresistor changes with incident light intensity. If the incident light intensity is high, the resistance reduces; if low, increases.
	In this experiment, 
	we will use eight LEDs to indicate light intensity. The higher the light intensity is, the more the LED is lit. When the light intensity is high enough, all the LEDs will be lit. When there is no light, all the LEDs will go out.

### 5- RGB LED

This was an Halloween hack night one hour project. 
* You can watch the video at [YouTube](https://youtu.be/ozgB9a5aAxk)

####Description

RGB stands for the red, green, and blue color channels and is an industry color standard. RGB displays various new colors by changing the three channels and superimposing them, which, according to statistics, can create 16,777,216 different colors. If you say the color displayed doesn’t completely match a natural color, then it almost certainly cannot be differentiated with the naked eye.

This file has "index.html" which runs a control panel on your browser which you can change your LED color on the Arduino board by picking a color from a color picker. It leverages "johnny-five" and "socket.io".

* View it online here - > http://nazanin1369.github.io/arduino/


#### To run: 
1- run any server , I used ["http_server"](https://www.npmjs.com/package/http-server): 

	http-server ./ start -p 8080 
	
	Starting up http-server, serving ./ on: http://0.0.0.0:8080
	Hit CTRL-C to stop the server

2- Then you have to run the server side which is the _rgbLed.js_ file: 

		node rgbLed.js

3- Do not forget to connect your Arduino board.
	

