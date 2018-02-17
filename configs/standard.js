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
    }
}