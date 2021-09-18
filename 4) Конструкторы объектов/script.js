"use strict";

function СreateMp3(name) {
	this.name = name;
	this.batteryCharge = 100;
	this.watch = {
		hour: 15,
		minutes: 45,
	},
	this.volume = 10;
	this.currentNumberTrack = 1;
	this.musicTrack = [
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
	];
	this.powerOn = function () {
		console.log("Power on");
		console.log("Hello, " + this.name + "!:)");
	};
	this.powerOff = function () {
		console.log("Bye bye, " + this.name);
		console.log("Power off");
	};
	this.showBattery = function () {
		console.log("Charge " + this.batteryCharge + "%");
	};
	this.displayWatch = function () {
		console.log(this.watch.hour + ":" + this.watch.minutes);
	};
	this.volumeDown = function () {
		this.volume -= 1;
		if (this.volume < 1) {
			this.volume = 0;
			console.log("Sound off");
		}
		console.log(this.volume);
	};
	this.volumeUp = function () {
		this.volume += 1;
		if (this.volume > 19) {
			this.volume = 20;
			console.log("Blood from the ears");
		}
		console.log(this.volume);
	};
	this.nextTrack = function () {
		this.currentNumberTrack += 1;
		if (this.currentNumberTrack > this.musicTrack.length) {
			this.currentNumberTrack = 1;
		}
		console.log(this.musicTrack[this.currentNumberTrack - 1].singer + ": " + this.musicTrack[this.currentNumberTrack - 1].trackTitle);
	};
	this.previousTrack = function () {
		this.currentNumberTrack -= 1;
		if (this.currentNumberTrack < 1) {
			this.currentNumberTrack = this.musicTrack.length;
		}
		console.log(this.musicTrack[this.currentNumberTrack - 1].singer + ": " + this.musicTrack[this.currentNumberTrack - 1].trackTitle);
	};
	this.musicStop = function () {
		console.log("Stop music");
		console.log(this.musicTrack[this.currentNumberTrack - 1].singer + ": " + this.musicTrack[this.currentNumberTrack - 1].trackTitle);
	};
	this.musicPlay = function () {
		console.log("Play");
		console.log(this.musicTrack[this.currentNumberTrack - 1].singer + ": " + this.musicTrack[this.currentNumberTrack - 1].trackTitle);
	};
	this.fullPlayTime = function () {
		var fullTime = 0;
		for (var i = 0; i < this.musicTrack.length; i++) {
			fullTime += this.musicTrack[i].songDutaion;
		}
		var minutes = parseInt(fullTime / 60);
		var seconds = fullTime % 60;
		console.log("Total: " + minutes + " min, " + seconds + " sec.");
	};
	this.addMusicTrack = function (obj) {
		this.musicTrack[this.musicTrack.length] = obj;
	}
}


function CreateTrack(singer, trackTitle, songDutaion) {
	this.singer = singer;
	this.trackTitle = trackTitle;
	this.songDutaion = songDutaion;
};

var bohdanMp3 = new СreateMp3("Bohdan");
var newTrack = new CreateTrack("Bob Marley", "Sun is shining", 298);

bohdanMp3.addMusicTrack(newTrack);


