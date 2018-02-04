
var { 
    KubiPairs,
} = require("../../configs/configs");
const { repeatCall_noInterval } = require("../../utils/utils");
module.exports = function () {

    const func = (coinPair) => {
        const options = { 
            method: 'GET',
            url: 'https://api.kucoin.com/v1/open/orders',
            qs: { symbol: coinPair, limit: '10' }
        };
        return options;
    };

    const promise = repeatCall_noInterval(KubiPairs, func);

    return promise
}