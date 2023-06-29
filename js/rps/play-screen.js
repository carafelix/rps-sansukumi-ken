// all this should be wrapp inside a function to pass to the main js

// nodes 

const gamediv = document.querySelector('div');
const btnPlay = document.querySelector('#play')

const slider = document.createElement('input'); 
const btnRounds = document.createElement('button');
const sliderOutput = document.createElement('output');

//#region slider attributes

slider.setAttribute('id','slider')
slider.setAttribute('type','range');
slider.setAttribute('value','5');
slider.setAttribute('min', '1');
slider.setAttribute('max','15');
slider.addEventListener('input', () => sliderOutput.value = slider.value);


// gamediv.appendChild(slider);

//#endregion

// rps weapons

const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"


//#region --------- get cpu choice from pseudo-random ------------

    const cpuChoiceArray = [rock, paper, scissors]

    function getCpuChoice(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
    } 
//#endregion


//#region --------- get cpu choice from randomg.org ------------

    // store response obj arr

    const randomOrg = []; 

    // Api passed Obj

    const apiFetchObj = {
        "jsonrpc": "2.0",
        "method": "generateIntegers",
        "params": {
            "apiKey": "aa28fec6-cdad-47f8-b471-cc8ee106298f", // I know this shouldn't be public but idk how to keep it secret in a front-end enviroment
            "n": 1,
            "min": 1,
            "max": 3,
            "replacement": true,
            "base": 10,
            "pregeneratedRandomization": null
        },
        "id": 27714
    }

    // random.org api function call

    async function getRandomApiCall() {
    await fetch("https://api.random.org/json-rpc/4/invoke", {
            method: "POST",
            body: JSON.stringify(apiFetchObj),
            headers: {"Content-type": "application/json; charset=UTF-8"}   
        })
            .then(res => res.json())
            .then((data) =>{
                randomOrg.unshift(data)
            });
    };


    // returns r-p-s depending on random.org API response

    async function getOrgCpuChoice() {
        await getRandomApiCall();
        if ((randomOrg[0]["result"]["random"]["data"][0]) === 0){
            return rock
        } else if ((randomOrg[0]["result"]["random"]["data"][0]) === 1 ) {
            return paper
        } else {
            return scissors
        }
    } 
//#endregion

// round and game variables

let bestOfX = 0; 
let usrScore = 0;
let cpuScore = 0;
let roundCount = 0;


//#region --------- play round function -----------

    const playRound = function (usr, cpu) {
        if (usr === cpu) {

                ++bestOfX;                      
                return (`It's a tie baby! -------- Round #${roundCount+1}`);

        } else if ((usr === paper && cpu === rock)    || 
                   (usr === rock && cpu === scissors) ||
                   (usr === scissors && cpu === paper)) {

                    ++usrScore;                                   
                    return (`Humanity Scores ${usr}! CPU ${cpu} Human ${usrScore} ---- CPU ${cpuScore} -------- Round #${roundCount+1} `);

        } else {
                    ++cpuScore;                                   
                    return (`CPU Scores ${cpu} Usr ${usr}! Human ${usrScore} ---- CPU ${cpuScore} -------- Round #${roundCount+1}`);
        }
    }
//#endregion

//#region --------- play a true random game ----------

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
//#endregion

// transition to round screen

const roundScreen = function(){
    gamediv.removeChild(btnPlay);
    gamediv.appendChild(btnRounds);
    btnRounds.setAttribute('id', 'rounds')
    btnRounds.innerText = 'rounds';
    gamediv.appendChild(slider);
    gamediv.appendChild(sliderOutput);
}


btnPlay.addEventListener('click', roundScreen);
btnRounds.addEventListener('click', () => playAgame(slider.value))