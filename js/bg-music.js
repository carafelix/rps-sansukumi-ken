const audio = document.querySelectorAll('audio');
const audioArr = Array.from(audio);

function randomTime(){
   return Math.floor(Math.random() * 5)
}

function randomIndex(){
    return Math.floor(Math.random() * 11)
}

function bgMusic(){
    setTimeout(() => {
        audioArr
    }, randomTime());
}

// document.addEventListener('load', audioArr[randomIndex()].play() ) 