
var { 
    LiquiPairs,
} = require("../../configs/configs");
const { repeatCall } = require("../../utils/utils");
module.exports = function () {

    const func = (coinPair) => {
        const options = {
            method: 'GET',
            url: 'https://api.liqui.io/api/3/depth/' + coinPair,
        };
        return options;
    };

    const promise = repeatCall(Math.floor(1000), LiquiPairs, func);

    return promise
        .then( calls => Promise.all(calls))
        .then( resAry => {
            console.log(resAry);
        })

    // return promise;
}