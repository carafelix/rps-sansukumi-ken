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

            console.log(playRound(getUserChoice(), await setCpuChoice()));
            
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

// export {
//     apiFetchObj,
//     randomOrgCpu,
//     getRandomApiCall,
//     setCpuChoice,
//     playAtrueGame
// }

const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"

// randomOrgCpu[0]["result"]["random"]["data"][0]

