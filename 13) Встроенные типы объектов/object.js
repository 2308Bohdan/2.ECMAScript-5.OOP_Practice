"use strict";
//Задание №1.

function Rectangle(numX1, numY1, numX2, numY2) {
	if (this._validNumber(numX1)) {
		this.x1 = numX1;
	} else {
		throw new Error("Not a number!");
	}
	if (this._validNumber(numY1)) {
		this.y1 = numY1;
	} else {
		throw new Error("Not a number!");
	}
	if (this._validNumber(numX2)) {
		this.x2 = numX2;
	} else {
		throw new Error("Not a number!");
	}
	if (this._validNumber(numY2)) {
		this.y2 = numY2;
	} else {
		throw new Error("Not a number!");
	}
	
};

Rectangle.prototype.toString = function() {
	return "Upper left corner " + this.x1 + ", " + this.y1 + "; bottom right corner " + this.x2 + ", " + this.y2 + ".";
};
Rectangle.prototype.valueOf = function() {
	var per = 2 * (Math.abs(this.x2 - this.x1) + Math.abs(this.y2 - this.y1));
	return per;
};

Rectangle.prototype._validNumber = function(num) {
	if (typeof num === "number" && !isNaN(num) && isFinite(num)) {
		return true;
	}
	return false;
};