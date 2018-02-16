
var { 
    PoloniexPairs,
} = require("../../configs/configs");
const { repeatCall } = require("../../utils/utils");
module.exports = function () {

    const func = (coinPair) => {
        const options = {
            method: 'GET',
            url: 'https://poloniex.com/public',
            qs: {
                    command: 'returnOrderBook',
                    currencyPair: coinPair,
                    depth: '10'
            }
        }
        return options;
    };

    const promise = repeatCall(Math.floor(1000/100), PoloniexPairs, func)
    // .then(calls => { return Promise.all(calls) });

    return promise
}