// Get Elements
const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
var progress = document.querySelector(".progress");
var progressBar = document.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const ranges = player.querySelectorAll('.player__slider');
const skipButtons = document.querySelectorAll("[data-skip]");

//functions

function togglePlay(){
    console.log("click");
    if(video.paused) video.play();
    else video.pause();
}

function updateButton(){
    // const icon = this.pause ?  '►' : '❚ ❚';
    console.log(this.pause ?  '►' : '❚❚');
    toggle.textContent = this.paused ?  '►' : '❚❚';
    // this.innerHTML = "||"
}

function skip(x){
    console.log(this.dataset.skip);
    video.currentTime +=parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    console.log(this.name);
    console.log(this.value);
    video[this.name] = this.value;
}

function handleProgress(){
    const percent = (video.currentTime/ video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function changeTime(e){
    console.log(e);
    video.currentTime = ((e.screenX - 156)/(795 - 156)) * video.duration;
}
// document.addEventListener("click", ()=> console.log('pkmkb'))
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
toggle.addEventListener("click", togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
video.addEventListener("timeupdate", handleProgress);
let mdown = false;
progress.addEventListener("click", changeTime);
progress.addEventListener("mousemove", mdown && changeTime);
progress.addEventListener("mousedown", ()=> mdown = true)
progress.addEventListener("mousedown", ()=> mdown = false)