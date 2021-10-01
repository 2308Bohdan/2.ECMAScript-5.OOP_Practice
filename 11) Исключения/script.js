"use strict";
//Задание №1.

function sumSliceArray(arr, first, second) {
	if (typeof first !== "number" || typeof second !== "number"){
		throw new Error("Введите корректно число");
	} else if (typeof first === "number" && first > arr.length || typeof second === "number" && second > arr.length) {
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