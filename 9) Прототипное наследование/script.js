"use strict";
function GeometricFig () {
	this.__coordinCenterX = 0;
	this.__coordinCenterY = 0;
};

GeometricFig.prototype.getCoordinCenterX = function () {
	return this.__coordinCenterX;
};
GeometricFig.prototype.setCoordinCenterX = function (value) {
	if (this.__geomValueValid(value)) {
			this.__coordinCenterX = value;
	}
};

GeometricFig.prototype.getCoordinCenterY = function () {
	return this.__coordinCenterY;
};
GeometricFig.prototype.setCoordinCenterY = function (value) {
	if (this.__geomValueValid(value)) {
			this.__coordinCenterY = value;
	}
};

GeometricFig.prototype.__geomValueValid = function (num) {
	if (typeof num === "number" && !isNaN(num) && isFinite(num)) {
		return true;
	}
	return false;
};


//Прямоугольник
function Rectangle() {
	GeometricFig.call(this);
	this.__lengthDiagonal = 0;
};
Rectangle.prototype = Object.create(GeometricFig.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getLengthDiagonal = function() {
	return this.__lengthDiagonal;
};
Rectangle.prototype.setLengthDiagonal = function(value) {
	if (this.__geomValueValid(value)) {
		this.__lengthDiagonal = value;
	}
};

Rectangle.prototype.info = function () {
	for (var key in this) {
		if (key === "constructor") {
			break;
		};
		console.log(key + ": " + this[key]);
	}
};

//Треугольник
function Circle() {
	GeometricFig.call(this);
	this.__radiusCircle = 0;
};
Circle.prototype = Object.create(GeometricFig.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.getRadiusCircle = function() {
	return this.__radiusCircle;
};
Circle.prototype.setRadiusCircle = function(value) {
	if (this.__geomValueValid(value)) {
		this.__radiusCircle = value;
	}
};
Circle.prototype.info = function () {
	for (var key in this) {
		if (key === "constructor") {
			break;
		};
		console.log(key + ": " + this[key]);
	}
};


//Задание №2. Полиморфизм
function Square() {
	this._side = 0;
};

Square.prototype.getSide = function() {
	return this._side;
};
Square.prototype.setSide = function(value) {
	if (typeof value === "number" && !isNaN(value) && isFinite(value)) {
		this._side = value;
	}
};

Square.prototype.perimeter = function() {
	return this._side * 4;
};

//1. Без расширения 
function Cube1() {
	Square.call(this);
};
Cube1.prototype = Object.create(Square.prototype);
Cube1.prototype.constructor = Cube1;

Cube1.prototype.perimeter = function() {
	return this._side * 12;
};

//2. С расширением 
function Cube2() {
	Square.call(this);
};
Cube2.prototype = Object.create(Square.prototype);
Cube2.prototype.constructor = Cube2;

Cube2.prototype.perimeter = function() {
	 return Square.prototype.perimeter.call(this) * 3;
};