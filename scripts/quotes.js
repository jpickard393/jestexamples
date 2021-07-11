const watchListItems = [
    { key: 1, symbol: "AMZN" },
    { key: 2, symbol: "MSFT" },
    { key: 3, symbol: "GOOG" },
    { key: 4, symbol: "AAPL" },
    { key: 5, symbol: "ARKK" }
];

export const checkIfItemInWatchList = (company) => {
    const check = watchListItems.find(
        (item) => item.symbol === company.toUpperCase()
    );
    return typeof check !== "undefined";
};

export const filterArray = (symbol) => {
    return watchListItems.filter((item) => item.symbol.includes(symbol));
};

export const getAllSymbols = () => {
    return watchListItems;
};