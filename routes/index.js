var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


var config_uc = ['ETH_BTC', 'TRX_BTC', 'VEN_BTC', 'EOS_BTC', 'BNB_BTC', 'XVG_BTC', 'ICX_BTC', 'XRP_BTC', 'ELF_BTC', 'WTC_BTC', 'NEO_BTC', 'CND_BTC', 'QTUM_BTC', 'VIBE_BTC', 'ADA_BTC', 'BCC_BTC', 'APPC_BTC', 'LTC_BTC', 'LINK_BTC', 'SUB_BTC', 'MDA_BTC', 'XLM_BTC', 'POE_BTC', 'SNGLS_BTC', 'HSR_BTC\N', 'IOTA_BTC', 'WABI_BTC', 'INS_BTC', 'BNT_BTC', 'MTL_BTC', 'BTS_BTC', 'ETC_BTC', 'BRD_BTC', 'LRC_BTC', 'BCPT_BTC', 'AION_BTC', 'NEBL_BTC', 'LEND_BTC', 'ZRX_BTC', 'REQ_BTC', 'GTO_BTC', 'OMG_BTC', 'TNB_BTC', 'OST_BTC', 'BCD_BTC', 'DNT_BTC', 'AMB_BTC', 'ENG_BTC', 'BTG_BTC', 'FUN_BTC', 'ARN_BTC', 'XMR_BTC', 'CDT_BTC', 'QSP_BTC', 'SALT_BTC', 'KNC_BTC', 'WINGS_BTC', 'STRAT_BTC', 'CMT_BTC', 'POWR_BTC', 'AST_BTC', 'TRIG_BTC', 'LSK_BTC', 'LUN_BTC', 'MCO_BTC', 'GAS_BTC', 'FUEL_BTC', 'DASH_BTC', 'MANA_BTC', 'ZEC_BTC', 'RLC_BTC', 'BAT_BTC', 'EDO_BTC', 'RCN_BTC\N', 'NULS_BTC', 'SNT_BTC', 'ENJ_BTC', 'CTR_BTC', 'KMD_BTC', 'ARK_BTC', 'GVT_BTC', 'MTH_BTC', 'MOD_BTC', 'GXS_BTC', 'BQX_BTC', 'TNT_BTC', 'SNM_BTC', 'OAX_BTC\N', 'YOYO_BTC', 'EVX_BTC', 'ADX_BTC', 'WAVES_BTC', 'NAV_BTC', 'STORJ_BTC', 'PPT_BTC', 'VIB_BTC', 'XZC_BTC', 'DGD_BTC', 'DLT_BTC', 'ICN_BTC', 'RDN_BTC'];
var config_lc = ['eth_btc', 'trx_btc', 'ven_btc', 'eos_btc', 'bnb_btc', 'xvg_btc', 'icx_btc', 'xrp_btc', 'elf_btc', 'wtc_btc', 'neo_btc', 'cnd_btc', 'qtum_btc', 'vibe_btc', 'ada_btc', 'bcc_btc', 'appc_btc', 'ltc_btc', 'link_btc', 'sub_btc', 'mda_btc', 'xlm_btc', 'poe_btc', 'sngls_btc', 'hsr_btc\n', 'iota_btc', 'wabi_btc', 'ins_btc', 'bnt_btc', 'mtl_btc', 'bts_btc', 'etc_btc', 'brd_btc', 'lrc_btc', 'bcpt_btc', 'aion_btc', 'nebl_btc', 'lend_btc', 'zrx_btc', 'req_btc', 'gto_btc', 'omg_btc', 'tnb_btc', 'ost_btc', 'bcd_btc', 'dnt_btc', 'amb_btc', 'eng_btc', 'btg_btc', 'fun_btc', 'arn_btc', 'xmr_btc', 'cdt_btc', 'qsp_btc', 'salt_btc', 'knc_btc', 'wings_btc', 'strat_btc', 'cmt_btc', 'powr_btc', 'ast_btc', 'trig_btc', 'lsk_btc', 'lun_btc', 'mco_btc', 'gas_btc', 'fuel_btc', 'dash_btc', 'mana_btc', 'zec_btc', 'rlc_btc', 'bat_btc', 'edo_btc', 'rcn_btc\n', 'nuls_btc', 'snt_btc', 'enj_btc', 'ctr_btc', 'kmd_btc', 'ark_btc', 'gvt_btc', 'mth_btc', 'mod_btc', 'gxs_btc', 'bqx_btc', 'tnt_btc', 'snm_btc', 'oax_btc\n', 'yoyo_btc', 'evx_btc', 'adx_btc', 'waves_btc', 'nav_btc', 'storj_btc', 'ppt_btc', 'vib_btc', 'xzc_btc', 'dgd_btc', 'dlt_btc', 'icn_btc', 'rdn_btc'];
var coins  = ['eth', 'trx', 'ven', 'eos', 'bnb', 'xvg', 'icx', 'xrp', 'elf', 'wtc', 'neo', 'cnd', 'qtum', 'vibe', 'ada', 'bcc', 'appc', 'ltc', 'link', 'sub', 'mda', 'xlm', 'poe', 'sngls', 'hsr', 'iota', 'wabi', 'ins', 'bnt', 'mtl', 'bts', 'etc', 'brd', 'lrc', 'bcpt', 'aion', 'nebl', 'lend', 'zrx', 'req', 'gto', 'omg', 'tnb', 'ost', 'bcd', 'dnt', 'amb', 'eng', 'btg', 'fun', 'arn', 'xmr', 'cdt', 'qsp', 'salt', 'knc', 'wings', 'strat', 'cmt', 'powr', 'ast', 'trig', 'lsk', 'lun', 'mco', 'gas', 'fuel', 'dash', 'mana', 'zec', 'rlc', 'bat', 'edo', 'rcn', 'nuls', 'snt', 'enj', 'ctr', 'kmd', 'ark', 'gvt', 'mth', 'mod', 'gxs', 'bqx', 'tnt', 'snm', 'oax', 'yoyo', 'evx', 'adx', 'waves', 'nav', 'storj', 'ppt', 'vib', 'xzc', 'dgd', 'dlt', 'icn', 'rdn'];
var coins_Bittrex = ['BTC-ETH', 'BTC-TRX', 'BTC-VEN', 'BTC-EOS', 'BTC-BNB', 'BTC-XVG', 'BTC-ICX', 'BTC-XRP', 'BTC-ELF', 'BTC-WTC', 'BTC-NEO', 'BTC-CND', 'BTC-QTUM', 'BTC-VIBE', 'BTC-ADA', 'BTC-BCC', 'BTC-APPC', 'BTC-LTC', 'BTC-LINK', 'BTC-SUB', 'BTC-MDA', 'BTC-XLM', 'BTC-POE', 'BTC-SNGLS', 'BTC-HSR', 'BTC-IOTA', 'BTC-WABI', 'BTC-INS', 'BTC-BNT', 'BTC-MTL', 'BTC-BTS', 'BTC-ETC', 'BTC-BRD', 'BTC-LRC', 'BTC-BCPT', 'BTC-AION', 'BTC-NEBL', 'BTC-LEND', 'BTC-ZRX', 'BTC-REQ', 'BTC-GTO', 'BTC-OMG', 'BTC-TNB', 'BTC-OST', 'BTC-BCD', 'BTC-DNT', 'BTC-AMB', 'BTC-ENG', 'BTC-BTG', 'BTC-FUN', 'BTC-ARN', 'BTC-XMR', 'BTC-CDT', 'BTC-QSP', 'BTC-SALT', 'BTC-KNC', 'BTC-WINGS', 'BTC-STRAT', 'BTC-CMT', 'BTC-POWR', 'BTC-AST', 'BTC-TRIG', 'BTC-LSK', 'BTC-LUN', 'BTC-MCO', 'BTC-GAS', 'BTC-FUEL', 'BTC-DASH', 'BTC-MANA', 'BTC-ZEC', 'BTC-RLC', 'BTC-BAT', 'BTC-EDO', 'BTC-RCN', 'BTC-NULS', 'BTC-SNT', 'BTC-ENJ', 'BTC-CTR', 'BTC-KMD', 'BTC-ARK', 'BTC-GVT', 'BTC-MTH', 'BTC-MOD', 'BTC-GXS', 'BTC-BQX', 'BTC-TNT', 'BTC-SNM', 'BTC-OAX', 'BTC-YOYO', 'BTC-EVX', 'BTC-ADX', 'BTC-WAVES', 'BTC-NAV', 'BTC-STORJ', 'BTC-PPT', 'BTC-VIB', 'BTC-XZC', 'BTC-DGD', 'BTC-DLT', 'BTC-ICN', 'BTC-RDN'];
var coins_len = config_lc.length;

//liqui.io marketing depth: GET
var request = require("request");
for (i = 0; i < coins_len; i++) {
    var options = {
        method: 'GET',
        url: 'https://api.liqui.io/api/3/depth/' + config_lc[i],
        headers:
            {
                'postman-token': 'a6ff1c1b-29e1-0695-2ff1-6f054efd65d5',
                'cache-control': 'no-cache'
            }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    })
};




// Poloniex marketing depth: GET

for (i = 0; i < coins_len; i++) {
    var request = require("request");

    var options = {
        method: 'GET',
        url: 'https://poloniex.com/public',
        qs:
            {
                command: 'returnOrderBook',
                currencyPair: config_uc[i],
                depth: '5'
            },
        headers:
            {
                'postman-token': '7d6490ec-cdf0-98de-504f-7c7c61547f1b',
                'cache-control': 'no-cache'
            }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    })
};


//www.aex.com marketing depth: GET

for (i = 0; i < coins.length; i++) {
    var request = require("request");

    var options = {
        method: 'GET',
        url: 'https://api.aex.com/depth.php',
        qs: {c: coins[i], mk_type: 'btc'},
        headers:
            {
                'postman-token': '03a6b958-608d-d718-6ded-dc27dfb0a14a',
                'cache-control': 'no-cache'
            }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    })
};

//Bittrex marketing depth: GET
for (i = 0; i < coins_Bittrex.length; i++) {
var request = require("request");

var options = { method: 'GET',
    url: 'https://bittrex.com/api/v1.1/public/getorderbook',
    qs: { market: coins_Bittrex[i], type: 'both' },
    headers:
        { 'postman-token': 'fad1748c-2c2e-9edc-0bf6-0998d3746499',
            'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
})
};









module.exports = router;