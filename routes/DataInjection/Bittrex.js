
// var { 
//     BittrexPairs,
// } = require("../../configs/configs");
// const { repeatCall } = require("../../utils/utils");
// module.exports = function () {

//     const func = (coinPair) => {
//         const options = { 
//             method: 'GET',
//             url: 'https://bittrex.com/api/v1.1/public/getorderbook',
//             qs: { market: coinPair, type: 'both' }
//         }
//         return options;
//     };

//     const promise = repeatCall(Math.floor(1000/100), BittrexPairs, func);

//     return promise
// }

/*None limit*/
var { 
    BittrexPairs,
} = require("../../configs/configs");
const { repeatCall_noInterval } = require("../../utils/utils");
module.exports = function () {

    const func = (coinPair) => {
        const options = { 
            method: 'GET',
            url: 'https://bittrex.com/api/v1.1/public/getorderbook',
            qs: { market: coinPair, type: 'both' }
        }
        return options;
    };

    const promise = repeatCall_noInterval(BittrexPairs, func, "bittrex");

    return promise
}