// General Plan; goals, input, expected result, rules, ideas.

// The objective of this proyect is to allow the user to play a simple
// Rock-Paper-Scissors game against the computer; first via text input-output form, and later with a GUI

// Cpu choices must only be initialized after the user already selected a weapon of choice
// so no cheating its allowed prior. Since the machine selects its own weapon on random, there is no problem on letting it select after
// Draws should not count towards the scores but should be registered in the total rounds count.

// Ideas: 
// Make the user able to select if he wants to play a golden goal round, a best of 3 , a Fto5 or a Fto10.
// Implement random.org API for cpuChoice, so it is trully random.
// Hestiation is defeat, maybe with a counter like when kids slap their fist into the other hand for count. 
// Maybe implement a Voice-Recognition Library to allow the user to shout like a kid to the computer hahaha.
// GUI visualitation of rounds/score record.


// Pseudocode

// Ask the user if he wants to play a game of Rochambeu, and to wich score  |   *5
// Give the user and the machine a counter for score (or lifes)             |   *6
// Define the elementary inputs regarding the game                          |   *0
// Ask the user to input his choice via prompt and normalize the string     |   *1
// Computer selects a random choice                                         |   *2
// Determine if it is a Tie or any of the parties won                       |   *3
// If someome won, score them a point                                       |   *4
// Reset computer choice and answer for the player next choice              |   *7
// Loop until the selected amount of score is reached by one of the parties |   *8
// Display the winning partie                                               |   *9
// ask the user if he want to play another set and loop                     |   *10


// *0

const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"

// normalize function 

function normalize(string) {
    let uniform = string.toLowerCase();
    let excludeFirstLetter = uniform.slice(1);
    let getFirstLetter = uniform.slice(0,1);
    let firstCap = getFirstLetter.toUpperCase();
    let sumStr = firstCap + excludeFirstLetter;            
    return sumStr;

let 































// Cpu Array random

const cpuWepArray = [rock, paper, scissors]

function getCpuChoice(arr) {
const randomIndex = Math.floor(Math.random() * arr.length);
const cpuChoice = arr[randomIndex];
return cpuChoice;
}

let cpuWep = getCpuChoice(cpuWepArray)


