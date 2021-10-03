"use strict";
//Задание №1.

function sumSliceArray(arr, first, second) {
	if (typeof first !== "number" || typeof second !== "number"){
		throw new Error("Введите корректно число");
	} else if (first > arr.length || second > arr.length) {
		throw new Error("Числo должнo быть меньше или равнo " + arr.length);
	}
	return arr[first - 1] + arr[second - 1];
};

var someArr = [1, 2, 3, 4, 5, 6, 7];

try {
	var res1 = sumSliceArray(someArr, 3, 1);
	console.log(res1);
} catch (error) {
	console.log(error.name);
	console.log(error.message);
}

try {
	var res2 = sumSliceArray(someArr, "3", 1);
	console.log(res2);
} catch (error) {
	console.log(error.name);
	console.log(error.message);
}

try {
	var res3 = sumSliceArray(someArr, 3, 9);
	console.log(res3);
} catch (error) {
	console.log(error.name);
	console.log(error.message);
}


//Задание №2.

function sumWithCheck(arr) {
	while (true) {
		var numOne = Number(prompt("Enter first number", ""));
		var numTwo = Number(prompt("Enter second number", ""));
		if (numOne > arr.length || numTwo > arr.length || isNaN(numOne) || isNaN(numTwo)) {
			continue;
		}
		return sumSliceArray(arr, numOne, numTwo);
	}
};

var res = sumWithCheck(someArr);
console.log(res);