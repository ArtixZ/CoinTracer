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

    return Promise.all(calls);
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