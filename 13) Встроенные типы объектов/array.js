"use strict";

//Задание №1.
var arr1 = ["Джаз", "Блюз"];
arr1.push("Рок-н-Ролл");
arr1.splice(arr1.length - 2, 1, "Классика");
var res = arr1.shift();
console.log(res);
arr1.unshift("Рэп", "Регги");
console.log(arr1);


//Задание №2.
Array.prototype.sortDesc = function() {
	this.sort();
	this.reverse();
};
var arr2 = [5, 1, 4, 2, 3];
arr2.sortDesc();
console.log(arr2); // [5, 4, 3, 2, 1]


//Задание №3.
function deleteEvenNumbers(array) {
	return array.filter( function(value) {
		return value % 2 === 1;
	} );
}

var arr3 = [1, 2, 3, 4, 5];
var arr3 = deleteEvenNumbers(arr3);
console.log(arr3);


//Задание №4.
var arr4 = ["Tom", "Sam", "Bob"];
var arrLength = arr4.map( function(value) {
	return "<li>" + arr4[arr4.indexOf(value)] + "</li>";
} );
console.log(arrLength);


//Задание №5.
function matrixToArray(matrix) {
	return matrix.reduce(function (acc, nextValue) {
		return acc.concat(nextValue);
	});
}
var arr5 = [[1, 2], [3, 4, 5], [6, 7, 8], [9]];
var arr5 = matrixToArray(arr5);
console.log(arr5);
