// ------------ background random music -----------

const audio = document.querySelectorAll('.long-audio');
const audioArr = Array.from(audio);
const audioBtn = document.querySelector('#audio-settings-btn');


function randomTime(){
   return Math.floor(Math.random() * 12)*1000
}

function randomIndex(){
    return Math.floor(Math.random() * 13)
}


const bgMusicC = function(){ //chill random interval
    setTimeout(() => {
        let rAudio = audioArr[randomIndex()];
        rAudio.volume = 0.2;
        rAudio.play();
        setTimeout(bgMusicC(), randomTime()*randomTime())  // such a good thing to know!
    }, randomTime());
}


//#region not in use
// document.addEventListener('load', audioArr[randomIndex()].play() ) 

const bgMusicA = function(){  // define once, play interval
    setInterval(() => {
        let rAudio = audioArr[randomIndex()];
        rAudio.volume = 0.35;
        rAudio.play();
    }, randomTime());
}

const bgMusicB = function(){ // define once the interval, play the sound at different distance every time
    setInterval(() => {
        setTimeout(() => {
            let rAudio = audioArr[randomIndex()];
            rAudio.volume = 0.35;
            rAudio.play();
        }, randomTime());
    }, randomTime());
}
//#endregion

document.addEventListener('load', bgMusicC());


//#region --------- audio toggle -----------

function audioToggle(e) {
    if (!e.target.dataset.clicked){

        e.target.setAttribute('data-clicked', 'true');
        audioMute();

    } else {

        e.target.removeAttribute("data-clicked");

        audioFull();

    }
}

function audioMute(){
    audioArr.forEach(audio => audio.volume = 0);
}

function audioFull(){
    audioArr.forEach(audio => audio.volume = 1); // variable instead of = 0
}

audioBtn.addEventListener('click', (e)=> audioToggle(e));


//#endregion


