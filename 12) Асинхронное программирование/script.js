"use strict";
//Задание №1.

function random(min, max, delay, callback) {
   var data;
   var error;
   if (min < max) {
	   data = Math.random() * (max - min) + min; //На MDN прочитал как получать число в заданном интервале
   } else {
	   error = new Error("Invalid parameters");
   }
   setTimeout(function() { callback(error, data) }, delay);
}
random(1, 100, 2000, function (error, data) {
   if (error) {
	   throw error;
   }
   console.log(data);
});
random(1000, 100, 3000, function (error, data) {
   if (error) {
	   throw error;
   }
   console.log(data);
});
