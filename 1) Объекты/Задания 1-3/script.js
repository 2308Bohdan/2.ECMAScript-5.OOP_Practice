"use strict";


/* Задание №1.
1. Создайте новый объект user;
2. Добавьте свойство name со значением Cris;
3. Добавьте свойство surname со значением Simons;
4. Поменяйте значение name на Brain;
5. Удалите свойство name из объекта;
*/
var user = {};
user.name = "Cris";
user.surname = "Simons";
user.name = "Brain";
delete user.name;

/*Задание №2.
1. Создайте новый объект car;
2. Добавьте свойство model с любым значением;
3. Добавьте свойство speed с любым значением;
4. Добавьте метод run(), который выводит сообщение: "model едет со скоростью speed";
5. Добавьте метод stop(), который вывод сообщение: "model остановилась";
Реализуйте 3 версии текущего задания, используя следующие синтаксисы создания объектов:
1. Стандартный;
2. Массивов;
3. Упрощенный.
*/

//1.
var car = {};
car.model = "Tesla";
car.speed = 200;
car.run = function () {
	console.log(car.model + " едет со скоростью " + car.speed);
};
car.stop = function () {
	console.log(car.model + " остановилась");
};

car.run();
car.stop();

//2.
var car = {};
car["model"] = "Tesla";
car["speed"] = 200;
car["run"] = function () {
	console.log(car.model + " едет со скоростью " + car.speed);
};
car["stop"] = function () {
	console.log(car.model + " остановилась");
};

car["run"]();
car["stop"]();

//3.
var car = {
	model: "Tesla",
	speed: 200,
	run: function () {
		console.log(car.model + " едет со скоростью " + car.speed);
	},
	stop: function () {
		console.log(car.model + " остановилась")
	},
};

car.run();
car.stop();

/*Задание №3.
1. Создайте новый объект tv;
2. Добавьте свойство currentChannel со значением 1;
3. Добавьте метод nextChannel(), который увеличивает currentChannel на единицу;
4. Добавьте метод previousChannel(), который уменьшает currentChannel на единицу;
5. Добавьте метод setChannel(number), который переходит на канал по номеру.
*/

var tv = {
	currentChannel: 1,
	nextChannel: function () {
		return tv.currentChannel += 1;
	},
	previousChannel: function () {
		return tv.currentChannel -= 1;
	},
	setChannel: function (number) {
		tv.currentChannel = number;
		return tv.currentChannel;
	},
};

tv.nextChannel();
tv.nextChannel();
tv.nextChannel();
console.log(tv.currentChannel);
tv.previousChannel();
console.log(tv.currentChannel);
tv.setChannel(65);
console.log(tv.currentChannel);
