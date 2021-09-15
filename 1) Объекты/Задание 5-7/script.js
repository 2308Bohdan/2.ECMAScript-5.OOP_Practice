"use strict";
/*Задание №5. Вложенные. Массивы в объектах
Опишите следующую информацию в виде иерархии массивов и объектов:
Name	Age	Experience	Languages
John	28	1	Java, JavaScript, SQL
Bill	30	5	HTML, CSS, JavaScript
Mike	32	4	Python, SQL*/

var someData = {
	employees: [
		{
			name: "John",
			age: 28,
			experience: 1,
			languages: ["Java", "JavaScript", "SQL"],
		}, {
			name: "Bill",
			age: 30,
			experience: 5,
			languages: ["HTML", "CSS", "JavaScript"],
		}, {
			name: "Mike",
			age: 32,
			experience: 4,
			languages: ["Python", "SQL"],
		}
] };

/*Задание №6. Проверка наличия свойств и методов. Перебор свойств и методов
Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет 
свойств и false – если хоть одно свойство есть.*/

function isEmpty(obj) {
	var res = true;
	for (var key in obj) {
		res = false;
	}
	return res;
}

var someObj1 = {
	name: "Big Bob",
	sayHello: function () {
		console.log("Hello " + someObj1.name + "!");
	},
};

var someObj2 = {};

var res1 = isEmpty(someObj1);
console.log(res1);
var res2 = isEmpty(someObj2);
console.log(res2);


/*Задание №7. Перебор свойств и методов
Есть объект salaries с зарплатами. Напишите код, который выведет среднее значение всех зарплат. Код должен работать с различным количеством зарплат в объекте.
Примеры salaries:
var salaries = {
   John: 100,
   Bill: 300,
   Mike: 250
};

var salaries = {
   Cris: 150,
   Brain: 600,
   John: 300,
   Steve: 400,
   Bill: 50
};*/

function averageSalary(obj) {
	var numberOfWorkers = 0;
	var sum = 0;
	var averSalary;
	for (var key in obj) {
		sum += obj[key];
		numberOfWorkers += 1;
	}
	averSalary = parseInt(sum / numberOfWorkers);
	console.log(averSalary);
} 

var salaries1 = {
	John: 100,
	Bill: 300,
	Mike: 250
};

var salaries2 = {
    Cris: 150,
    Brain: 600,
    John: 300,
    Steve: 400,
    Bill: 50
};

averageSalary(salaries1);
averageSalary(salaries2);
