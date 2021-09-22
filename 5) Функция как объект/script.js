"use strict";

//Задание №1.
function mul() {
	var res = 1;
	var par = 0;
	for (var i = 0; i < arguments.length; i++) {
		if (typeof(arguments[i]) === "number") {
			res *= arguments[i];
			par++;
		}
	}
	if (par === 0) {
		res = 0;
	}
	return res;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

//Задание №2. Явное указание this
var country = {
	name: "Украина",
	language: "украинский",
	capital: {
		name: "Киев",
		population: 2907817,
		area: 847.66
	}
};
function format(beginMsg, endMsg) {
	console.log(beginMsg + this.name + endMsg);
}
format.call(country, "<", ">"); // "<Украина>"
format.apply(country, ["[", "]"]); // "[Украина]"
format.call(country.capital, '"', '"'); // ""Киев""
format.apply(country.capital, ['', '']); // "Киев"
