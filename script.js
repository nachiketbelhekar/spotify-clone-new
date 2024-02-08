console.log("Welcome to Spotify") ;

//Iniitialize the Variables
letsongIndex = 0;
let audioElement = new Audio('2.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('masterplay');

let songs = [
    {songName:"Unstopabble", Filepath:"song/2.mp3",coverpath:"covers/2.jpg"},
    {songName:"Unstopabble", Filepath:"song/2.mp3",coverpath:"covers/2.jpg"},
    {songName:"Unstopabble", Filepath:"song/2.mp3",coverpath:"covers/2.jpg"},
    {songName:"Unstopabble", Filepath:"song/2.mp3",coverpath:"covers/2.jpg"},
]

//audoElement.play();

//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
       audioElement.play()
       masterPlay.classList.remove(' fa-circle-play');
       masterPlay.classList.add(' fa-circle-pause') 
    }
})

//listen to events
myprogressbar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar

})



