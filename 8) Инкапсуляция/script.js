"use strict";
//Задание №1.
function AudioPlayer () {
	this.__volume = 50;
};
//1. Методы геттер и сеттер;
AudioPlayer.prototype.getVolume = function () {
	return this.__volume;
};
AudioPlayer.prototype.setVolume = function (value) {
	if (this.__volumeValidation(value)) {
		this.__volume = value;
	}
};
//2. Единый метод геттер-сеттер. 
AudioPlayer.prototype.volume = function (value) {
	if (value === undefined) {
		return this.__volume;
	} else {
		if (this.__volumeValidation(value)) {
			this.__volume = value;
		}
	}
};

AudioPlayer.prototype.__volumeValidation = function (num) {
	if (typeof num === "number" && !isNaN(num) && num >= 0 && num <= 100) {
		return true;
	}
	return false;
};


//Задание №2.
function Sum() {
	this.__firstNumber = 0;
	this.__secondNumber = 0;
	this.result = 0;
};

Sum.prototype.firstNumber = function (value) {
	if (value === undefined) {
		return this.__firstNumber;
	} else {
		if (this.__numValid(value)) {
			this.__firstNumber = value;
			this.__calc();
		}
	}
};
Sum.prototype.secondNumber = function (value) {
	if (value === undefined) {
		return this.__secondNumber;
	} else {
		if (this.__numValid(value)) {
			this.__secondNumber = value;
			this.__calc();
		}
	}
};

Sum.prototype.__calc = function () {
	this.result = this.__firstNumber + this.__secondNumber;
};

Sum.prototype.__numValid = function (num) {
	if (typeof num === "number" && !isNaN(num) && isFinite(num)) {
		return true;
	}
	return false; 
};