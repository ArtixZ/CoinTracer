
var express = require('express');
var router = express.Router();
var async = require('async');
var _ = require('lodash');

var poloniex_dataInjection = require('./DataInjection/Poloniex');
var liqui_dataInjection = require('./DataInjection/Liqui');
var bittrex_dataInjection = require('./DataInjection/Bittrex');
var binance_dataInjection = require('./DataInjection/Binance');
var huobi_dataInjection = require('./DataInjection/Huobi');
var kubi_dataInjection = require('./DataInjection/Kubi');
var gate_dataInjection = require('./DataInjection/Gate');

var { priceLocation } = require('../configs/standard');
var { BTC_THRESHOLD } = require('../configs/configs');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


// var liquiPrices = liqui_dataInjection();
// console.log(liquiPrices)

// //www.aex.com marketing depth: GET

// for (i = 0; i < coins.length; i++) {
//     var request = require("request");

//     var options = {
//         method: 'GET',
//         url: 'https://api.aex.com/depth.php',
//         qs: {c: coins[i], mk_type: 'btc'},
//         headers:
//             {
//                 'postman-token': '03a6b958-608d-d718-6ded-dc27dfb0a14a',
//                 'cache-control': 'no-cache'
//             }
//     };

//     request(options, function (error, response, body) {
//         if (error) throw new Error(error);

//         console.log(body);
//     })
// };

// var bittrexPrices = bittrex_dataInjection()
// bittrexPrices.then( calls => Promise.all(calls))
//         .then( resAry => {
//             console.log(resAry);
//         })

// var poloniexPrices = poloniex_dataInjection();
// poloniexPrices
//         .then( resAry => {
//             console.log(resAry);
//         })

// var bittrexPrices = bittrex_dataInjection()
// bittrexPrices
//         .then( resAry => {
//             console.log(resAry);
//         })

// var binancePrices = binance_dataInjection();
// binancePrices.then( resAry => {
//     console.log(resAry);
// })

// var huobiPrices = huobi_dataInjection();
// huobiPrices.then( resAry => {
//     console.log(resAry);
// })

// var kubiPrices = kubi_dataInjection();
// kubiPrices.then( resAry => {
//     console.log(resAry);
// })

// var gatePrices = gate_dataInjection();
// gatePrices.then( resAry => {
//     console.log(resAry);
// })

// Promise.all([ poloniexPrices, bittrexPrices, binancePrices, huobiPrices, kubiPrices, gatePrices ]).then(res => {
//     console.log(res);
// })


async.parallel({
    // poloniex: function(callback) {
    //     poloniex_dataInjection().then(res => {
    //         callback(null, res)
    //     })
    // },
    // bittrex: function(callback) {
    //     bittrex_dataInjection().then(res => {
    //         callback(null, res);
    //     })
    // },
    binance: function(callback) {
        binance_dataInjection().then(res => {
            callback(null, res);
        })
    },
    huobi: function(callback) {
        huobi_dataInjection().then(res => {
            callback(null, res);
        })
    },
    kubi: function(callback) {
        kubi_dataInjection().then(res => {
            callback(null, res);
        })
    },
    gate: function(callback) {
        gate_dataInjection().then(res => {
            callback(null, res);
        })
    },
    
},  (err, res) => {
    console.log(res)
    let reArrange = {};
    for(let pfName in res) {
        for(let i in res[pfName]) {
            const { coinName, buy: buyAry, sell: sellAry } = res[pfName][i];
            let highestBuy = -Infinity, lowestSell = Infinity;

            if(reArrange[coinName]) {
                if(reArrange[coinName]["buy"]) {
                    const { price: buyPrice, amount: buyAmount } = reArrange[coinName]["buy"];
                    highestBuy = buyPrice;
                }

                if(reArrange[coinName]["sell"]) {
                    const { price: sellPrice, amount: sellAmount } = reArrange[coinName]["sell"];
                    lowestSell = sellPrice;
                }
                
            } else {
                reArrange[coinName] = {}
            }

            for(let buyRrd of buyAry) {
                const btcAmount = buyRrd[0] * buyRrd[1];
                if( btcAmount > BTC_THRESHOLD && Number(buyRrd[priceLocation[pfName]]) > highestBuy) {
                    // reArrange[coinName]["buy"]["price"] = buyRrd[priceLocation[pfName]]
                    // reArrange[coinName]["buy"]["amount"] = buyRrd[1 - priceLocation[pfName]]  
                    // reArrange[coinName]["buy"]["platform"] = pfName
                    reArrange[coinName]["buy"] = {
                        "price": Number(buyRrd[priceLocation[pfName]]),
                        "amount": Number(buyRrd[1 - priceLocation[pfName]]),
                        "platform": pfName,
                    }
                }
            } 

            for(let sellRrd of sellAry) {
                const btcAmount = sellRrd[0] * sellRrd[1];
                if( btcAmount > BTC_THRESHOLD && Number(sellRrd[priceLocation[pfName]]) < lowestSell) {
                    // reArrange[coinName]["sell"]["price"] = sellRrd[priceLocation[pfName]]
                    // reArrange[coinName]["sell"]["amount"] = sellRrd[1 - priceLocation[pfName]]  
                    // reArrange[coinName]["sell"]["platform"] = pfName
                    reArrange[coinName]["sell"] = {
                        "price": Number(sellRrd[priceLocation[pfName]]),
                        "amount": Number(sellRrd[1 - priceLocation[pfName]]),
                        "platform": pfName,
                    }
                }
            }
            if(_.isEmpty(reArrange[coinName])) {
                delete reArrange[coinName]
            }
        }
    }

    console.log(reArrange)
})

module.exports = router;
