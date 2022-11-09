let music
if(window.HTMLAudioElement){
	music = document.querySelector('#music');
}
let playButton = document.querySelector("#playButton");
let pauseButton = document.querySelector("#pauseButton");
let previuosButton = document.querySelector(".previousButton");
let nextButton = document.querySelector(".nextButton");
let voiceEmp = document.querySelector('.voiceEmp'); // mute, set volume = 0
let voiceFull = document.querySelector('.voiceFull'); // unmute
let songName = document.querySelector("#songName");
let progress = document.querySelector("#progress");
let pictures = document.querySelector("#pictures");
let songList = document.getElementById("songList");
let index = 0; // current index

playButton.addEventListener('click',playSong);
pauseButton.addEventListener('click',pauseSong);
voiceEmp.addEventListener('click',mute);
voiceFull.addEventListener('click',unmute);
previuosButton.addEventListener("click", previousSong);
nextButton.addEventListener("click", nextSong);
music.addEventListener("ended",autoNext); // After playing the current song, automatically switch to the next song

// song playlist
let songs = [
	
	{
		mp3:'SEVENTEEN-Rock-with-you.mp3',
		name:'SEVENTEEN-Rock-with-you',
		pic:'Rock-with-you-album.jpeg',
	},
	{
        //////////////////// MORE SONGS
    },
]

// display song playlist
for (var i =0; i < songs.length; i++) {
	songList.innerHTML += '<li>' + songs[i].name + '</li>';
}

function changeMusic(index) {
    music.src=songs[index].mp3;
    songName.innerHTML=songs[index].name;
	pictures.src=songs[index].pic;
};

function playSong(){
	music.play();
	playButton.style.display='none';
	pauseButton.style.display='';
	timeSpan();
}

function pauseSong(){
	music.pause();
	playButton.style.display='';
	pauseButton.style.display='none';
}

function mute(){
	music.volume = 0;
}

function unmute(){
	music.volume = 1;
}

function previousSong() {
    index--;
    if(index<=-1){
        index=songs.length-1;
    }
    changeMusic(index);
}

function nextSong() {
    index++;
    if(index>songs.length-1){
        index=0;
    }
    changeMusic(index);
	playButton.style.display='';
	pauseButton.style.display='none';
}

function autoNext(){
    nextButton.click();
}

// Set the time display format
function timeFormat(time){
	let minutes = parseInt(time/60);
	let seconds = parseInt(time%60);
    if(minutes<10){minutes = "0"+minutes;}
    if(seconds<10){seconds = "0"+seconds;}	
	return minutes+':'+seconds;
}
// time display
function timeSpan(){
	setInterval(function(){
		let songTime = document.querySelector("#songTime");
		let currenttime = music.currentTime;
		let totaltime = music.duration;
		songTime.innerHTML = timeFormat(currenttime)+"|"+timeFormat(totaltime);
		let progressLenth =(currenttime/totaltime)*getWidth("#progress");
		document.querySelector('#progressYet').style.width = progressLenth+'px';
	},1000);
}

function getWidth(domId){
	let dom = document.querySelector(domId);
	let domLenth = dom.style.width;
	let domLenthInt = domLenth.split('px')[0];
	return domLenthInt;
}

progress.addEventListener("click",function (event) {
    let x=event.offsetX; // get mouse position
    let bfb=x/610*100;
    progressYet.style.width=bfb+"%";
    music.currentTime=music.duration*+bfb/100;
});