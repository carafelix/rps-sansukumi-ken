const audio = document.querySelectorAll('audio');
const audioArr = Array.from(audio);

function randomTime(){
   return Math.floor(Math.random() * 5)
}

function randomIndex(){
    return Math.floor(Math.random() * 10)
}

const bgMusic = function(){
    setInterval(() => {
        setTimeout(() => {
            let rAudio = audioArr[randomIndex()];
            rAudio.volume = 0.35;
            rAudio.play();
        }, randomTime()*1000);
    }, randomTime()*1000);
}

// document.addEventListener('load', audioArr[randomIndex()].play() ) 


document.addEventListener('load', bgMusic()) 

