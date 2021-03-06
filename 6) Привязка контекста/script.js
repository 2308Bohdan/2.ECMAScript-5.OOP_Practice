"use strict";

//Задание №1.
//1 Анонимная функцию обвертка;
var user = {
	name: "Tom"
};
function format(beginMsg, endMsg) {
	console.log(beginMsg + this.name + endMsg);
}
var tomFormat = function(beginMsg, endMsg) {
	format.call(user, beginMsg, endMsg);
};
tomFormat("<<<", ">>>"); // "<<<Tom>>>"


//2. Метод bind().
var user2 = {
	name: "Tom"
};
function format2(beginMsg, endMsg) {
	console.log(beginMsg + this.name + endMsg);
}
var tomFormat2 = format2.bind(user2);
tomFormat2("<<<", ">>>"); 



//Задание №2.
function mul(a, b) {
	return a * b;
}
var doubleMul = mul.bind(null, 2);
var qudraMul = mul.bind(null, 4);
console.log(doubleMul(5));
console.log(qudraMul(5));





//Задание №3.
function bind(func, context) {
    return function() {
        return func.call(context);
	};
}
function func() {
	console.log(this.name + " - "+ this.age);
}
var user = {
	name: "Tom",
	age: 20
};
var f = bind(func, user);
f(); // "Tom – 20"
