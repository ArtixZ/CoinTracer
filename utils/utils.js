const rp = require('request-promise');

const request = require("request");

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

    return p;
    
    // return prices;
}

function repeatCall_noInterval(coinPairs, func) {
    let calls = [];
    for(let i in coinPairs) {
        calls.push(rp(func(coinPairs[i])));
    }
    const standardPairs = standardlizeCoinPairs(coinPairs);
    
    return Promise.all(calls)
        .then(res => {
            for(let i=0; i<res.length; i++) {
                res[i] = JSON.parse(res[i])
                res[i]["coinName"] = standardPairs[i]
            }
            return res;
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