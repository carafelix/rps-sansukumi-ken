// General Plan; goals, input, expected result, rules, ideas.

// The objective of this proyect is to allow the user to play a simple
// Rock-Paper-Scissors game against the computer; first via text input-output form, and later with a GUI

// Cpu choices must only be initialized after the user already selected a weapon of choice
// so no cheating its allowed prior. Since the machine selects its own weapon on random, there is no problem on letting it select after
// Draws should not count towards the scores but should be registered in the total rounds count.
// Would do multiple iterations to get the flow of it

// Ideas: 
// Make the user able to select if he wants to play a golden goal round, a best of 3 , a Fto5 or a Fto10.
// Implement random.org API using fetch() on cpuChoice, so it is truly random.
// Hestiation is defeat, maybe with a counter like when kids slap their fist into the other hand for count. setTimeout Function. 
// Maybe implement a Voice-Recognition Library to allow the user to shout like a kid to the computer hahaha.
// GUI visualitation of rounds/score record.


// Pseudocode

// Ask the user if he wants to play a game of Rochambeu, and to wich score  |   *5
// Give the user and the machine a counter for score (or lifes)             |   *6
// Define the elementary inputs regarding the game                          |   *0
// Ask the user to input his choice via prompt and normalize the string     |   *1
// Computer selects a random choice                                         |   *2
// Play and determine if it is a Tie or any of the parties won              |   *3
// If someome won, score them a point                                       |   *4
// Reset computer choice and answer for the player next choice              |   *7
// Loop until the selected amount of score is reached by one of the parties |   *8
// Display the winning partie                                               |   *9
// ask the user if he want to play another set and loop                     |   *10


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
    chose = uniformInput(chose)
    return chose 
}

// *2 Cpu choice

function getCpuChoice(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const cpuChoice = array[randomIndex];
    return cpuChoice;
}

const cpuChoiceArray = [rock, paper, scissors]

// *2.1 Cpu choice fetched from Random.org api

import { randomOrgCpu, getRandomApiCall, apiFetchObj   } from "./randomOrg.js";


// console.log(getRandomApiCall())
// console.log(randomOrgCpu)
// RandomOrgCpu[0]["result"]["random"]["data"][0]

// 3* Play a game // console.log(typeof(usrChoice)) | console.log(typeof(cpuChoice)). Compared at a string level

let playRound = function (usr, cpu) {
    if (usr == cpu) {
            ++bestOfX;                                //extend round limit on ties
                return (`It's a tie baby! -------- Round #${roundCount+1}`);

    } else if ((usr == paper && cpu == rock) 
            || (usr == rock && cpu == scissors)
            || (usr == scissors && cpu == paper)) {
                ++usrScore;                                   
                return (`Humanity ${usr} strike again! CPU ${cpu} is usless against it!!!!!!!! Human ${usrScore} ---- CPU ${cpuScore} -------- Round #${roundCount+1} `);

    } else if ((cpu == paper && usr == rock) 
            || (cpu == rock && usr == scissors)
            || (cpu == scissors && usr == paper)) {
                ++cpuScore;                                   
                return (`CPU is taking over with ${cpu} against Humanity ${usr}! Be careful! Human ${usrScore} ---- CPU ${cpuScore} -------- Round #${roundCount+1}`);

    } else {
        ++cpuScore
        return (`WHAT ARE YOU DOING?? what does your ${usr} is gonna help you in combat!?!?! Make sure you pick the right weapon next time. CPU scores the point.Human ${usrScore} ---- CPU ${cpuScore} -------- Round #${roundCount+1}`);
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

    // total game code:
    
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

playAgame(5);


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