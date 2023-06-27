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

export {
    apiFetchObj,
    randomOrgCpu,
    getRandomApiCall
}

// randomOrgCpu[0]["result"]["random"]["data"][0]

