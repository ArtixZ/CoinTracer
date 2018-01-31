
var { 
    PoloniexPairs,
} = require("../../configs/configs");
const { repeatCall } = require("../../utils/utils");
module.exports = function () {
    // Poloniex marketing depth: GET

    // for (let i = 0; i < PoloniexPairs.length; i++) {

    //     var options = {
    //         method: 'GET',
    //         url: 'https://poloniex.com/public',
    //         qs:
    //             {
    //                 command: 'returnOrderBook',
    //                 currencyPair: PoloniexPairs[i],
    //                 depth: '5'
    //             },
    //         headers:
    //             {
    //                 'postman-token': '7d6490ec-cdf0-98de-504f-7c7c61547f1b',
    //                 'cache-control': 'no-cache'
    //             }
    //     };

    //     console.log(PoloniexPairs[i]);
    //     request(options, function (error, response, body) {
    //         console.log()
    //         if (error) throw new Error(error);

    //         console.log(body);
    //     })
    // };

    const func = (coinPair) => {
        const options = {
            method: 'GET',
            url: 'https://poloniex.com/public',
            qs: {
                    command: 'returnOrderBook',
                    currencyPair: coinPair,
                    depth: '10'
            },
            headers: {
                'postman-token': '7d6490ec-cdf0-98de-504f-7c7c61547f1b',
                'cache-control': 'no-cache'
            }
        }
        return options;
    };

    const promise = repeatCall(Math.floor(1000/100), PoloniexPairs, func);

    promise.then( prices => {
        console.log(prices)
    })
    

    return [];
}