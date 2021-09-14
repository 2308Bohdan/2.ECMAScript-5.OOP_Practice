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

var someObj = {
	name: "Big Bob",
	sayHello: function () {
		console.log("Hello " + someObj.name + "!");
	},
};

for (var key in someObj) {
	if (key !== undefined) {
		console.log(false);
	} else {
		console.log(true);
	}
}

/*Вопрос, почему в 1 случае работает, а во втором - нет?
1) Запускаю for in для поиска методов и свойств
2) Так как я не знаю, точное название возможных методов и свойств, 
в условии if добавляю key
3) В первом случае в условии я получаю:
нашелся какой-то метод(свойство), он не равен undefined, if выполниться
4) Второй случай вообще не срабатывает,  
*/


var someObj2 = {};
for (var key in someObj2) {
	if (key !== undefined) {
		console.log(false);
	} else {
		console.log(true);
	}
}

