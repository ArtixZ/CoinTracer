
var { 
    HuobiPairs,
} = require("../../configs/configs");
const { repeatCall_noInterval } = require("../../utils/utils");
module.exports = function () {

    const func = (coinPair) => {
        const options = { method: 'GET',
            url: 'http://api.huobi.pro/market/depth',
            qs: { symbol: coinPair, type: 'step1' },
        };
        return options;
    };

    const promise = repeatCall_noInterval(HuobiPairs, func);

    return promise
}