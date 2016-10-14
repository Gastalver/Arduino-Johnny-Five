/**
 * Created by Miguel on 14/10/16.
 */

var five = require('johnny-five');
var board = new five.Board();

board.on("ready", function(){   // Equivalente a void loop() en C
    var led = new five.Led(13);
    led.blink(100);
})
