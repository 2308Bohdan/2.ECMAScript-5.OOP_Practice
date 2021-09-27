"use strict";

function GeometricFig () {
	this.__coordinCenterX = 0;
	this.__coordinCenterY = 0;
	this.__geomCenter = []; 
};

GeometricFig.prototype.getCoordinCenterX = function () {
	return this.__coordinCenterX;
};
GeometricFig.prototype.setCoordinCenterX = function (value) {
	if (this.__geomValueValid(value)) {
			this.__coordinCenterX = value;
			this.__addXtoCenter();
	}
};

GeometricFig.prototype.getCoordinCenterY = function () {
	return this.__coordinCenterY;
};
GeometricFig.prototype.setCoordinCenterY = function (value) {
	if (this.__geomValueValid(value)) {
			this.__coordinCenterY = value;
			this.__addYtoCenter();
	}
};

GeometricFig.prototype.getGeomCenter = function () {
	return this.__geomCenter;
};

GeometricFig.prototype.__addXtoCenter = function() {
	this.__geomCenter[0] = this.__coordinCenterX;
};
GeometricFig.prototype.__addYtoCenter = function() {
	this.__geomCenter[1] = this.__coordinCenterY;
};

GeometricFig.prototype.info = function() {
	for (var key in this) {
		console.log(key + ": " + this[key]);
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
Rectangle.prototype.setRadiusCircle = function(value) {
	if (this.__geomValueValid(value)) {
		this.__radiusCircle = value;
	}
};