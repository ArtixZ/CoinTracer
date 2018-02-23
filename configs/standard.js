module.exports = {
    wrappingStructure: {
        poloniex: {
            parenName: null,
            buyName: "bids",
            sellName: "asks",
        },
        bittrex: {
            parenName: "result",
            buyName: "buy",
            sellName: "sell",
        },
        binance: {
            parenName: null,
            buyName: "bids",
            sellName: "asks",
        },
        huobi: {
            parenName: "tick",
            buyName: "bids",
            sellName: "asks",
        },
        kubi: {
            parenName: "data",
            buyName: "BUY",
            sellName: "SELL",
        },
        gate: {
            parenName: null,
            buyName: "bids",
            sellName: "asks",
        }
    },
    // coinTypes: { poloniex, bittrex, binance, huobi, kubi, gate, },
    priceLocation: {
        poloniex: 0, bittrex: 0, binance: 0, huobi: 0, kubi: 0, gate: 0,
    }
}