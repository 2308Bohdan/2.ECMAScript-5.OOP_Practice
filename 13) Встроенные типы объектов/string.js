"use strict";
//Задание №1.
var someString = "Login1,LOgin2,login3,loGin4";

function transformToArr(string) {
	var res = string.toLowerCase();
	var arr = res.split(",");
	return arr;
};
var qwe = transformToArr(someString);
console.log(qwe);


//Задание №2.
function needString() {
	var arr = [];
	var string;
	var res;
	var str1 = "Numbers: ";
	var str2 = "No numbers: ";
	var j = 0;
	while (true) {
		string = prompt("Ввод", "");
		if (string === "end") {
			break;
		}
		for (var i = 0; i < string.length; i++) {
			if (string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57) {
				res = str1.concat(string);
				break;
			} else {
				res = str2.concat(string);
			}
		}
		arr[j] = res;
		j++;
	}
	return arr;
}
var res = needString();
console.log(res);


//Задание №2. Вариант 2
function checkNumber(value) {
	var res = false;
	for (var i = 0; i < value.length; i++) {
		if (value.charCodeAt(i) >= 48 && value.charCodeAt(i) <= 57) {
			res = true;
			break;
		}
	}
	return res;
};
function needString2() {
	var arr = [];
	var string;
	var str1 = "Numbers: ";
	var str2 = "No numbers: ";
	var i = 0;
	while (true) {
		string = prompt("Ввод", "");
		if (string === "end") {
			break;
		} else if (checkNumber(string)) {
			string = str1.concat(string);
		} else {
			string = str2.concat(string);
		}
		arr[i] = string;
		i++;
	}
	return arr;
}
var res2 = needString2();
console.log(res2);
