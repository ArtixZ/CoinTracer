// import { config } from '../../../Users/Dongyue/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/bluebird';

var express = require('express');
var router = express.Router();
var async = require('async');

var poloniex_dataInjection = require('./DataInjection/Poloniex');
var liqui_dataInjection = require('./DataInjection/Liqui');
var bittrex_dataInjection = require('./DataInjection/Bittrex');
var binance_dataInjection = require('./DataInjection/Binance');
var huobi_dataInjection = require('./DataInjection/Huobi');
var kubi_dataInjection = require('./DataInjection/Kubi');
var gate_dataInjection = require('./DataInjection/Gate');

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

var poloniexPrices = poloniex_dataInjection();
// poloniexPrices
//         .then( resAry => {
//             console.log(resAry);
//         })

var bittrexPrices = bittrex_dataInjection()
// bittrexPrices
//         .then( resAry => {
//             console.log(resAry);
//         })

var binancePrices = binance_dataInjection();
// binancePrices.then( resAry => {
//     console.log(resAry);
// })

var huobiPrices = huobi_dataInjection();
// huobiPrices.then( resAry => {
//     console.log(resAry);
// })

var kubiPrices = kubi_dataInjection();
// kubiPrices.then( resAry => {
//     console.log(resAry);
// })

var gatePrices = gate_dataInjection();
// gatePrices.then( resAry => {
//     console.log(resAry);
// })

// Promise.all([ poloniexPrices, bittrexPrices, binancePrices, huobiPrices, kubiPrices, gatePrices ]).then(res => {
//     console.log(res);
// })


async.parallel({
    poloniex: function(callback) {
        poloniexPrices.then(res => {
            callback(null, res)
        })
    },
    bittrex: function(callback) {
        bittrexPrices.then(res => {
            callback(null, res);
        })
    },
    binance: function(callback) {
        binancePrices.then(res => {
            callback(null, res);
        })
    },
    huobi: function(callback) {
        huobiPrices.then(res => {
            callback(null, res);
        })
    },
    kubi: function(callback) {
        kubiPrices.then(res => {
            callback(null, res);
        })
    },
    gate: function(callback) {
        gatePrices.then(res => {
            callback(null, res);
        })
    },
    
}, (err, res) => {
    console.log(res)
})

module.exports = router;
