"use strict";

//Задание №1

/*Вопрос:
Параметрами функции делать все свойства объекта MP3? Или выборочно

Еще мне интересно добавление в массив новых треков. Представим что функция
по созданию объектов, которые описывают MP3 плеер, содержит в себе пустой 
трек лист. В правильном ли направлении я хоть думаю:
нужно добавить метод, функция которого за параметр будет принимать объект (трек) 
и добавлять его в массив музыкальных треков, а так же вводим новое свойство,
обычный счетчик, для контроля "записи" новых треков? */


function createMp3 () {
	return {
		batteryCharge: 100,
		watch: {
			hour: 15,
			minutes: 45,
		},
		volume: 10,
		currentNumberTrack: 1,
		musicTrack: [
		{
			serialNumber: 1,
			singer: "24kGoldn",
			trackTitle: "«Mood»",
			songDutaion: 194,
		},	{
			serialNumber: 2,
			singer: "Silk Sonic",
			trackTitle: "Leave the Door Open",
			songDutaion: 265,
		},	{
			serialNumber: 3,
			singer: "The Kid LAROI",
			trackTitle: "Stay",
			songDutaion: 240,
		},	{
			serialNumber: 4,
			singer: "Ioral Dik Eht",
			trackTitle: "Yats",
			songDutaion: 42,
		}
		],
		powerOn: function () {
			console.log("Power on");
			console.log("Hello, bro!:)");
		},
		powerOff: function () {
			console.log("Bye bye");
			console.log("Power off");
		},
		showBattery: function () {
			console.log("Charge " + this.batteryCharge + "%");
		},
		displayWatch: function () {
			console.log(this.watch.hour + ":" + this.watch.minutes);
		},
		volumeDown: function () {
			this.volume -= 1;
			if (this.volume < 1) {
				this.volume = 0;
				console.log("Sound off");
			}
			console.log(this.volume);
		},
		volumeUp: function () {
			this.volume += 1;
			if (this.volume > 19) {
				this.volume = 20;
				console.log("Blood from the ears");
			}
			console.log(this.volume);
		},
		nextTrack: function () {
			this.currentNumberTrack += 1;
			if (this.currentNumberTrack > this.musicTrack.length) {
				this.currentNumberTrack = 1;
			}
			console.log(this.musicTrack[this.currentNumberTrack - 1].singer + ": " + this.musicTrack[this.currentNumberTrack - 1].trackTitle);
		},
		previousTrack: function () {
			this.currentNumberTrack -= 1;
			if (this.currentNumberTrack < 1) {
				this.currentNumberTrack = this.musicTrack.length;
			}
			console.log(this.musicTrack[this.currentNumberTrack - 1].singer + ": " + this.musicTrack[this.currentNumberTrack - 1].trackTitle);
		},
		musicStop: function () {
			console.log("Stop music");
		},
		musicPlay: function () {
			console.log("Play");
			console.log(this.musicTrack[this.currentNumberTrack - 1].singer + ": " + this.musicTrack[this.currentNumberTrack - 1].trackTitle);
		},
		fullPlayTime: function () {
			var fullTime = 0;
			for (var i = 0; i < this.musicTrack.length; i++) {
				fullTime += this.musicTrack[i].songDutaion;
			}
			var minutes = parseInt(fullTime / 60);
			var seconds = fullTime % 60;
			console.log("Total: " + minutes + " min, " + seconds + " sec.");
		}
	};
}


//Задание №2
function maxSalary(obj) {
	var max = 0;
	var par;
	for (var key in obj) {
		par = obj[key];
		if (par > max) {
			max = par;
		}
	}
	return max;
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

console.log(maxSalary(salaries1));
console.log(maxSalary(salaries2));