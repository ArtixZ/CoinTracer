
var { 
    BinancePairs,
} = require("../../configs/configs");
const { repeatCall_noInterval } = require("../../utils/utils");
module.exports = function () {

    const func = (coinPair) => {
        const options = { 
            method: 'GET',
            url: 'https://api.binance.com/api/v1/depth',
            qs: { symbol: coinPair, limit: '10' },
        };
        return options;
    };

    const promise = repeatCall_noInterval(BinancePairs, func);

    return promise
}