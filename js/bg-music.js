const audio = document.querySelectorAll('audio');
const audioArr = Array.from(audio);

function randomTime(){
   return Math.floor(Math.random() * 12)*1000
}

function randomIndex(){
    return Math.floor(Math.random() * 10)
}

const bgMusicA = function(){  // messy
    setInterval(() => {
        let rAudio = audioArr[randomIndex()];
        rAudio.volume = 0.35;
        rAudio.play();
    }, randomTime());
}

const bgMusicB = function(){ // messy messy
    setInterval(() => {
        setTimeout(() => {
            let rAudio = audioArr[randomIndex()];
            rAudio.volume = 0.35;
            rAudio.play();
        }, randomTime());
    }, randomTime());
}

const bgMusicC = function(){ //chill random interval
    setTimeout(() => {
        let rAudio = audioArr[randomIndex()];
        rAudio.volume = 0.35;
        rAudio.play();
        setTimeout(bgMusicC(), randomTime())
    }, randomTime());
}

// document.addEventListener('load', audioArr[randomIndex()].play() ) 


document.addEventListener('load', bgMusicC()) 

