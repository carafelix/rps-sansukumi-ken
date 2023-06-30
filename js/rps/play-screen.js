// all this should be wrapp inside a function to pass to the main js

// nodes 

const gamediv = document.querySelector('div');
const btnPlay = document.querySelector('#play')

const sliderDiv = document.createElement('div')
const slider = document.createElement('input'); 
const sliderOutput = document.createElement('output');
const btnRounds = document.createElement('button');


const btnRock = document.createElement('button');
const btnPaper = document.createElement('button');
const btnScissors = document.createElement('button');


//#region --------- slider attributes -----------

sliderDiv.setAttribute('id', 'slider-div');
slider.setAttribute('id','slider');
slider.setAttribute('type','range');
slider.setAttribute('value','5');
slider.setAttribute('min', '1');
slider.setAttribute('max','15');
slider.addEventListener('input', () => sliderOutput.value = slider.value);


//#endregion


// rps weapons

const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"

// rps variables
let usrSpam = false;
let bestOfX = 0; 
let usrScore = 0;
let cpuScore = 0;
let roundCount = 0;
let usrChoice = null;


//#region --------- get cpu choice from pseudo-random ------------

    const cpuChoiceArray = [rock, paper, scissors]

    function getCpuChoice(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
    } 
//#endregion


//#region --------- get cpu choice from randomg.org --------------

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
                // randomOrg = data; // works but want to store them
            });
    };


    // returns r-p-s depending on random.org API response

    async function getOrgCpuChoice() {
        await getRandomApiCall();
        if ((randomOrg[0]["result"]["random"]["data"][0]) === 0){
            return rock
        } else if ((randomOrg[0]["result"]["random"]["data"][0]) === 1 ) {
            return paper
        } else if ((randomOrg[0]["result"]["random"]["data"][0]) === 2 ) {
            return scissors
        } else {
            console.log('porq chucha ' + randomOrg)
        }
    } 
//#endregion

//#region --------- get user choice ------------------------------



//#endregion

//#region --------- prevent spam function, nested playround--------               // setInterval could be used as event listener // noted. if I want to prevent something, better catch it on the if statement than in the 'else'


const noSpamPlayRound = async function(rps){
    if (!usrSpam) {
        usrSpam = true;
        setTimeout(clearUsrSpam, 5000);
        await playTrueRound(rps, await getOrgCpuChoice())
    } else {
        console.log('you must wait my man');
        
    }
}

const clearUsrSpam = function(){
    usrSpam = false;
}

//#endregion

//#region --------- hesitation is defeat function placeholder ----------

const hesitation = function(){
    setTimeout(()=> console.log('hesitation is defeat function') , 3000)
}

//#endregion











//#region --------- play round function ----------- // add timeout for somewhat of a response await

    async function playTrueRound (usr, cpu) {

        setTimeout(() => {
            
            if (usr === cpu) {

                ++bestOfX;                      
                return console.log ((`It's a tie baby! -------- Round #${roundCount+1}`));

    } else if ((usr === paper && cpu === rock)    || 
               (usr === rock && cpu === scissors) ||
               (usr === scissors && cpu === paper)) {

                ++usrScore;                                   
                return console.log((`Humanity Scores ${usr}! CPU ${cpu} Human ${usrScore} ---- CPU ${cpuScore} -------- Round #${roundCount+1} `));

    } else if (cpu === undefined) {

                ++bestOfX
                return console.log('Erro in Api call, try again, play slower')

    } else {
                ++cpuScore;                                   
                return console.log((`CPU Scores ${cpu} Usr ${usr}! Human ${usrScore} ---- CPU ${cpuScore} -------- Round #${roundCount+1}`));
    }
}

        , 500)};

        
//#endregion

//#region --------- play a true random game ----------

async function playAtrueGame (rounds){

    bestOfX = rounds;

    for (roundCount = 0; roundCount < bestOfX; roundCount++) {

        // hesitation();
        // setInterval(  'TO-DO CHECK IF USU AS SELECTED A CHOICE'   )
        

            
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

//#region transition to round screen

const roundScreen = function(){
    gamediv.removeChild(btnPlay); 
    sliderDiv.appendChild(slider);
    sliderDiv.appendChild(sliderOutput)
    sliderDiv.appendChild(btnRounds);
    btnRounds.setAttribute('id', 'rounds')
    btnRounds.innerText = 'rounds';
    gamediv.appendChild(sliderDiv)
} 
//#endregion


btnPlay.addEventListener('click', roundScreen);  // homescreen > round screen


const playScreen = function(){
    gamediv.removeChild(sliderDiv);
    gamediv.appendChild(btnRock);
    gamediv.appendChild(btnPaper);
    gamediv.appendChild(btnScissors);
    playAtrueGame(slider.value);
}

btnRounds.addEventListener('click', playScreen) // roundscreen > playscreen


//#region ------------ rps buttons atributes ---------

btnRock.setAttribute('id','rock');
btnRock.innerText = "Rock";
btnRock.addEventListener('click', async () => noSpamPlayRound(rock));

btnPaper.setAttribute('id','paper');
btnPaper.innerText = "Paper";
btnPaper.addEventListener('click', async () => noSpamPlayRound(paper));


btnScissors.setAttribute('id','scissors'); 
btnScissors.innerText = "Scissors";
btnScissors.addEventListener('click', async () => noSpamPlayRound(scissors));


//#endregion



// btnRock.addEventListener('click', async () => console.log(playRound(rock, await getOrgCpuChoice())));

// btnRounds.addEventListener('click', () => playAtrueGame(slider.value));

