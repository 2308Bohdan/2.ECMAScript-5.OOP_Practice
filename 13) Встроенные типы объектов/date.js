"use strict";
//Задание №1.
var dayX = new Date();

function plusTwoDay(obj) {
	var res = obj.getHours();
	return obj.setHours(48 + res);
}

plusTwoDay(dayX);
console.log(dayX);
