const rp = require('request-promise');
const request = require("request");

const wrappingStructure = require("../configs/standard").wrappingStructure;

function requestAsync(url) {
    return new Promise(function(resolve, reject) {
        request(url, function(err, res, body) {
            if (err) { return reject(err); }
            return resolve([res, body]);
        });
    });
}

function repeatCall(interval, coinPairs, func) {
    const p = new Promise(function(resolve, reject) {
        let calls = [];
        let count = 0;
        const int = setInterval(function() {
            if(count++ < coinPairs.length) {
                calls.push(rp(func(coinPairs[count])));
            } else {
                clearInterval(int);
                resolve(calls);
            }
            
        }, interval);
    })

    return p.then(calls => {
        return Promise.all(calls)
        .then(res => {
            let data = [];

            for(let i=0; i<res.length; i++) {
                data.push({})
                res[i] = JSON.parse(res[i])
                data[i]["coinName"] = standardPairs[i]
                const parentName = wrappingStructure[plateformName]["parenName"]
                if(parentName) {
                    const buyName = wrappingStructure[plateformName]["buyName"]
                    const sellName = wrappingStructure[plateformName]["sellName"]
                    data[i]["buy"] = res[i][parentName][buyName];
                    data[i]["sell"] = res[i][parentName][sellName];

                } else {
                    const buyName = wrappingStructure[plateformName]["buyName"]
                    const sellName = wrappingStructure[plateformName]["sellName"]
                    data[i]["buy"] = res[i][buyName];
                    data[i]["sell"] = res[i][sellName];
                }
            }
            return data;
        })
        .catch(err => {
            console.log(err)
        });
    });
    
    // return prices;
}

function repeatCall_noInterval(coinPairs, func, plateformName) {
    let calls = [];
    for(let i in coinPairs) {
        calls.push(rp(func(coinPairs[i])));
    }
    const standardPairs = standardlizeCoinPairs(coinPairs);
    
    return Promise.all(calls)
        .then(res => {
            let data = [];

            for(let i=0; i<res.length; i++) {
                data.push({})
                res[i] = JSON.parse(res[i])
                data[i]["coinName"] = standardPairs[i]
                const parentName = wrappingStructure[plateformName]["parenName"]
                if(parentName) {
                    const buyName = wrappingStructure[plateformName]["buyName"]
                    const sellName = wrappingStructure[plateformName]["sellName"]
                    data[i]["buy"] = res[i][parentName][buyName];
                    data[i]["sell"] = res[i][parentName][sellName];

                } else {
                    const buyName = wrappingStructure[plateformName]["buyName"]
                    const sellName = wrappingStructure[plateformName]["sellName"]
                    data[i]["buy"] = res[i][buyName];
                    data[i]["sell"] = res[i][sellName];
                }
            }
            return data;
        })
        .catch(err => {
            console.log(err)
        });
}

function standardlizeCoinPairs(coinPairs) {
    return coinPairs.map(str => {
        str = str.toLowerCase();
        str = str.replace(/[^A-Z0-9]+/ig, "") //remove _ - characters.
        str = str.replace('btc', '') // remove btc
        return str
    })
}
// Promise.all(ps)
//         .then(responses => {
//             console.log(responses);
//         })
//         .catch(err => {
//             console.log(err);
//         })
module.exports = {
    requestAsync,
    repeatCall,
    repeatCall_noInterval,
};