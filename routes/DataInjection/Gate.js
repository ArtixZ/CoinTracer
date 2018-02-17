
var { 
    GatePairs,
} = require("../../configs/configs");
const { repeatCall_noInterval } = require("../../utils/utils");
module.exports = function () {

    const func = (coinPair) => {
        const options = { method: 'GET',
        url: `http://data.gate.io/api2/1/orderBook/${coinPair}`
    };
        return options;
    };

    const promise = repeatCall_noInterval(GatePairs, func, "gate");

    return promise
}