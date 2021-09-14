"use strict";
//Создайте объект, который описывает MP3 плеер.
var mp3Player = {
	
	batteryCharge: 98,
	watch: {
		hour: 8,
		minutes: 20,
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
		console.log("Charge " + mp3Player.batteryCharge + "%");
	},
	displayWatch: function () {
		console.log(mp3Player.watch.hour + ":" + mp3Player.watch.minutes);
	},
	volumeDown: function () {
		mp3Player.volume -= 1;
		if (mp3Player.volume < 1) {
			mp3Player.volume = 0;
			console.log("Sound off");
		}
		console.log(mp3Player.volume);
	},
	volumeUp: function () {
		mp3Player.volume += 1;
		if (mp3Player.volume > 19) {
			mp3Player.volume = 20;
			console.log("Blood from the ears");
		}
		console.log(mp3Player.volume);
	},
	nextTrack: function () {
		mp3Player.currentNumberTrack += 1;
		if (mp3Player.currentNumberTrack > mp3Player.musicTrack.length) {
			mp3Player.currentNumberTrack = 1;
		}
		//Тут конечно получается что-то уж очень длина большая
		console.log(mp3Player.musicTrack[mp3Player.currentNumberTrack - 1].singer + ": " + mp3Player.musicTrack[mp3Player.currentNumberTrack - 1].trackTitle);
		return mp3Player.currentNumberTrack;
	},
	previousTrack: function () {
		mp3Player.currentNumberTrack -= 1;
		if (mp3Player.currentNumberTrack < 1) {
			mp3Player.currentNumberTrack = mp3Player.musicTrack.length;
		}
		console.log(mp3Player.musicTrack[mp3Player.currentNumberTrack - 1].singer + ": " + mp3Player.musicTrack[mp3Player.currentNumberTrack - 1].trackTitle);
		return mp3Player.currentNumberTrack;
	},
	musicStop: function () {
		console.log("Stop music");
	},
	musicPlay: function () {
		console.log("Play");
		console.log(mp3Player.musicTrack[mp3Player.currentNumberTrack - 1].singer + ": " + mp3Player.musicTrack[mp3Player.currentNumberTrack - 1].trackTitle);
	},
	fullPlayTime: function () {
		var fullTime = 0;
		for (var i = 0; i < mp3Player.musicTrack.length; i++) {
			fullTime += mp3Player.musicTrack[i].songDutaion;
		}
		var minutes = parseInt(fullTime / 60);
		var seconds = fullTime % 60;
		console.log("Total: " + minutes + " min, " + seconds + " sec.");
	}
};


/*Интересно было бы сделать метод воспроизведения рендомного трека, но честно 
ничего в голову не приходит, по этому сделал вот так:

	whatTrackYouNeed: function () {
		currentNumberTrack = prompt("Track Number", "1");
		if (currentNumberTrack > 0 && currentNumberTrack <= mp3Player.musicTrack.length) {
			console.log("Play");
			console.log(mp3Player.musicTrack[currentNumberTrack - 1].singer + ": " + mp3Player.musicTrack[currentNumberTrack - 1].trackTitle);
		} else {
			console.log("Enter a number less " + mp3Player.musicTrack.length);
		}
	},

Но при добавлении этого медода появляется ошибка, еси взять отдельно и представить
в виде обычной фунции - работает. */

