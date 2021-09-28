"use strict";
//Задание №1.

var rectangle = (function () {
	var rectSideA;
	var rectSideB;
	
	function perimeter() {
		var per = 2 * (rectSideA + rectSideB);
		return per;
	};
	function square() {
		return rectSideA * rectSideB;
	};
	
	return {
		setSideA: function(num) {
			if (typeof num === "number" && !isNaN(num) && num > 0) {
				rectSideA = num;
			}
		},
		setSideB: function(num) {
			if (typeof num === "number" && !isNaN(num) && num > 0) {
				rectSideB = num;
			}
		},
		perimeter: function() {
			return perimeter();
		},
		square: function() {
			return square();
		}
	}
	
	
	
	
	
	
	
}());
