// In this first iteration I would not implement the conditional for cpu choice to await for human choice
// Since I think im missing the point on it and getting a bit stuck, and want to continue. I would revisit.

// *0 normalize text input function

function uniformInput(string) {   
    const excludeFirstLetter = string.toLowerCase().slice(1);
    return string[0].toUpperCase() + excludeFirstLetter;    
}

const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"

// *1 Asking the user for a choice and normalize it

function getUserChoice() {
    let chose = prompt("Chose your weapon", "Rock, Paper, Scissors")
    chose = uniformInput(chose);
    return chose;
}

// *2 Cpu choice pseudo random, only used in playAgame

const cpuChoiceArray = [rock, paper, scissors]

function getCpuChoice(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
   return array[randomIndex];
}


let playRound = function (usr, cpu) {
    if (usr == cpu) {
            ++bestOfX;                                //extend round limit on ties
                return (`It's a tie baby! -------- Round #${roundCount+1}`);

    } else if ((usr == paper && cpu == rock) 
            || (usr == rock && cpu == scissors)
            || (usr == scissors && cpu == paper)) {
                ++usrScore;                                   
                return (`Humanity Scores ${usr}! CPU ${cpu} Human ${usrScore} ---- CPU ${cpuScore} -------- Round #${roundCount+1} `);

    } else {
                ++cpuScore;                                   
                return (`CPU Scores ${cpu} Usr ${usr}! Human ${usrScore} ---- CPU ${cpuScore} -------- Round #${roundCount+1}`);
    }
}


// *6 first implementation is Best of 'x' rounds || Second implementation should be first to 'x'
    
let bestOfX = 0; 
let usrScore = 0;
let cpuScore = 0;
let roundCount = 0;

// *5 before I used let bestofX = +prompt("rounds?", 5); etc. but found it annoying. Prefer to initialize on console and its more horizontal.// *5 before I used let bestofX = +prompt("rounds?", 5); etc. but found it annoying. Prefer to initialize on console and its more horizontal.

function playAgame (rounds) {  

        bestOfX = rounds;
    
    for (roundCount = 0; roundCount < bestOfX; roundCount++) {

            console.log(playRound(getUserChoice(), getCpuChoice(cpuChoiceArray)));
            
            if (usrScore > (Math.floor(rounds/2)) || cpuScore > (Math.floor(rounds/2))) {
                break;                              // game ends if any gets more than half the points.
            }
    } if ((usrScore - cpuScore) >= 1) {     // Final win/loss determination

        console.log(`Humankind Strikes Again! ${usrScore} is more than ${cpuScore}. Aprende algo DINERO.`);
        cpuScore = 0;
        usrScore = 0;

    } else {
        console.log(`CPU has coup the world! Clearly ${cpuScore} is more than ${usrScore}. Bip Bop Soy un robot, gane. `);
        usrScore = 0;
        cpuScore = 0;
    }
}

// --------------------- random.org fetched game ---------------------------------

const apiFetchObj = {
    "jsonrpc": "2.0",
    "method": "generateIntegers",
    "params": {
        "apiKey": "aa28fec6-cdad-47f8-b471-cc8ee106298f", // I know this shouldn't be public but idk how to keep it secret in a front-end only enviroment and its a free api with limited requests
        "n": 1,
        "min": 1,
        "max": 3,
        "replacement": true,
        "base": 10,
        "pregeneratedRandomization": null
    },
    "id": 27714
}

const randomOrgCpu = []; // 'let' should be easier to clear it; const with: randomOrgCpu.length = 0 || while(A.length > 0) {A.pop();}

async function getRandomApiCall() {
   await fetch("https://api.random.org/json-rpc/4/invoke", {
        method: "POST",
        body: JSON.stringify(apiFetchObj),
        headers: {"Content-type": "application/json; charset=UTF-8"}   
    })
        .then(res => res.json())
        .then((data) =>{
            randomOrgCpu.unshift(data)
        });
};

async function setCpuChoice() {
    await getRandomApiCall();
    if ((randomOrgCpu[0]["result"]["random"]["data"][0]) === 0){
        return rock
    } else if ((randomOrgCpu[0]["result"]["random"]["data"][0]) === 1 ) {
        return paper
    } else {
        return scissors
    }
}

async function playAtrueGame (rounds){

    bestOfX = rounds;

    for (roundCount = 0; roundCount < bestOfX; roundCount++) {

        console.log(playRound(usrChoice, await setCpuChoice()));
            
            if (usrScore > (Math.floor(rounds/2)) || cpuScore > (Math.floor(rounds/2))) {
                break;                              // game ends if any gets more than half the points.
            }

            } if ((usrScore - cpuScore) >= 1) {     // Final win/loss determination

                console.log(`Humankind Strikes Again! ${usrScore} is more than ${cpuScore}. Aprende algo DINERO.`);
                cpuScore = 0;
                usrScore = 0;

            } else if (((cpuScore - usrScore) >= 1) ) {
                
                console.log(`CPU has coup the world! Clearly ${cpuScore} is more than ${usrScore}. Bip Bop Soy un robot, gane. `);
                usrScore = 0;
                cpuScore = 0;
            }
}

function getRounds(){
    return bestOfX = +prompt("Rounds???")
}

async function setUsrChoice(e){
    console.log(e.innerText)
}

const slider = document.querySelector('input');

const gamediv = document.querySelector('div');

const btnRounds = document.createElement('button');

const btnPlay = document.querySelector('#play')

const roundScreen = function(){
    gamediv.removeChild(btnPlay);
    gamediv.appendChild(btnRounds);
    btnRounds.setAttribute('id', 'rounds')
    btnRounds.innerText = 'rounds';
}


btnPlay.addEventListener('click', roundScreen);
btnRounds.addEventListener('click', () => playAgame(slider.value))









const rockChoice = document.querySelector('#rock');
const paperChoice = document.querySelector('#paper');
const scissorsChoice = document.querySelector('#scissors');





// btn.addEventListener('click', () => playAtrueGame(bestOfX));
// askRounds.addEventListener('click', () => getRounds())

// rockChoice.addEventListener('click', (e) => setUsrChoice(e));
// paperChoice.addEventListener('click', (e) => setUsrChoice(e));
// scissorsChoice.addEventListener('click', (e) => setUsrChoice(e));






 function functionTest(){

    let variable = "one"

    function veet(){
        console.log("veet")
    } 


    console.log(variable)
    veet();

}










// for (let usrScore = 0, usrCpu = 0; usrScore < firstToWhat, usrCpu < firstToWhat; ???? )

// how should I implement a multi variable counter???
// I think its possible to omit some parameters from the 'for loop' and do all operations in the body
// using ++ -- break and return
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
// If I had revisited https://developer.mozilla.org/en-US/docs/Glossary/Callback_function before it would have saved me like 3 hours time lol


// Writing this code after implementing *2 since I also haved another way to solve it



// function cpuCpu () {
//     return Math.floor((Math.random() * 3)+1)
// }

// let cpuGuess = cpuCpu();

//     if (cpuGuess == 1) {
//         cpuGuess = rock
//     } else if (cpuGuess == 2) {
//         cpuGuess = paper
//     } else {
//         cpuGuess = scissors
//     }

// code down below was extracted from a codewar kata. Much better than mine but at the moment of writing this code
// I didn't knew about objects. Nice

// const rps = (p1, p2) => {
//     if (p1 === p2) return "Draw!";
//     var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
//     if (p2 === rules[p1]) {
//       return "Player 1 won!";
//     }
//     else {
//       return "Player 2 won!";
//     }
//   };

// stepper normalize function (idk wich one is easier to read)

// function uniformInput(string) {   
//     const uniform = string.toLowerCase();
//     const excludeFirstLetter = uniform.slice(1);
//     return uniform[0].toUpperCase() + excludeFirstLetter;    
// }
