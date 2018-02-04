var express = require('express');
var router = express.Router();
var request = require("request");


var poloniex_dataInjection = require('./DataInjection/Poloniex');
var liqui_dataInjection = require('./DataInjection/Liqui');
var bittrex_dataInjection = require('./DataInjection/Bittrex');
var binance_dataInjection = require('./DataInjection/Binance');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


// var poloniexPrices = poloniex_dataInjection();
// poloniexPrices.then( calls => Promise.all(calls))
//         .then( resAry => {
//             console.log(resAry);
//         })

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

var binancePrices = binance_dataInjection();
binancePrices.then( resAry => {
    console.log(resAry);
})

// //Bittrex marketing depth: GET
// for (i = 0; i < coins_Bittrex.length; i++) {
// var request = require("request");

// var options = { method: 'GET',
//     url: 'https://bittrex.com/api/v1.1/public/getorderbook',
//     qs: { market: coins_Bittrex[i], type: 'both' },
//     headers:
//         { 'postman-token': 'fad1748c-2c2e-9edc-0bf6-0998d3746499',
//             'cache-control': 'no-cache' } };

// request(options, function (error, response, body) {
//     if (error) throw new Error(error);

//     console.log(body);
// })
// };


module.exports = router;
