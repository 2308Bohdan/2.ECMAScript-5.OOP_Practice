"use strict";
var calculator = {
	firstNum: 0,
	secondNum: 0,
	read: function () {
		this.firstNum = Number(prompt("Введите первое число", ""));
		this.secondNum = Number(prompt("Введите второе число", ""));
	},
	sum: function () {
		var sum = this.firstNum + this.secondNum;
		return sum;
	},
	mul: function () {
		var mul = this.firstNum * this.secondNum;
		return mul;
	}
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
