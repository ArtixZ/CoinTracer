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
        let prices = [];
        let count = 0;
        const int = setInterval(function() {
            if(count < coinPairs.length) {
                rp(func(coinPairs[count])).then(res => {
                    res = JSON.parse(res);
                    res['coin_pair'] = coinPairs[count];
                    console.log(res);
                    prices.push(res);
                    count++;
                }).catch(err => {
                    console.log(err);
                })
            } else {
                clearInterval(int);
                resolve(prices);
            }
            
        }, interval);
    })

    return p;
    
    // return prices;
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
};