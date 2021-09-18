"use strict";

//Задание №1

function createMp3(name) {
	return {
		name: name,
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
			console.log("Hello, " + this.name + "!:)");
		},
		powerOff: function () {
			console.log("Bye bye, " + this.name);
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
			console.log(this.musicTrack[this.currentNumberTrack - 1].singer + ": " + this.musicTrack[this.currentNumberTrack - 1].trackTitle);
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
		},
		addMusicTrack: function (obj) {
			this.musicTrack[this.musicTrack.length] = obj;
		}
	};
}


function createTrack(singer, trackTitle, songDutaion) {
	return {
		singer: singer,
		trackTitle: trackTitle,
		songDutaion: songDutaion,
	};
};

var bohdanMp3 = createMp3("Bohdan");
var newTrack = createTrack("Bob Marley", "Sun is shining", 298);

bohdanMp3.addMusicTrack(newTrack);


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