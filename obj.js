const obj = {
    "jsonrpc": "2.0",
    "method": "generateIntegers",
    "params": {
        "apiKey": "aa28fec6-cdad-47f8-b471-cc8ee106298f",
        "n": 1,
        "min": 1,
        "max": 3,
        "replacement": true,
        "base": 10,
        "pregeneratedRandomization": null
    },
    "id": 27714
}

let getRandom = [];

let randomApi = async function (){
   await fetch("https://api.random.org/json-rpc/4/invoke", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {"Content-type": "application/json; charset=UTF-8"}   
    })
        .then(res => res.json())
        .then((data) =>{
             getRandom.push(data)
        });
}

// getRandom[0]["result"]["random"]["data"][0]


