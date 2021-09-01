export const checkIfItemInWatchList = (company, watchListItems) => {
  const check = watchListItems.find(
    (item) => item.symbol === company.toUpperCase()
  );
  return typeof check !== "undefined";
};

export const filterArray = (symbol, watchListItems) => {
  return watchListItems.filter((item) => item.symbol.includes(symbol));
};

const fetchAllItemsFromDatabase = () => {
  // this would return a list of items from the database,
  // but for this example we will not bother connecting to a database
  // this will be mocked from the tests
};

export const isItemInDatabase = (symbol, fetchAllItemsFromDatabaseFunction) => {
  // calls function I just passed in (which was mocked)
  const data = fetchAllItemsFromDatabaseFunction();
  return data.find((searchItem) => searchItem.symbol === symbol);
};
