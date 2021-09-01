import { mockWatchListItems } from "../__tests__/fixtures/watchlist_data";
import {
  checkIfItemInWatchList,
  filterArray,
  isItemInDatabase,
} from "../scripts/quotes";

let mockCheckIfItemInWatchList;

describe("should return correct values from mockWatchListItems", () => {
  // beforeAll runs before any of the tests are run so the data is set up at the start.
  beforeAll(() => {
    const initialiseMockData = () => {
      mockCheckIfItemInWatchList = jest.fn(() => mockWatchListItems);
    };
    return initialiseMockData();
  });

  // runs after all test completed.
  afterAll(() => {
    mockCheckIfItemInWatchList = null;
  });

  it("should return a count of 5 to represent each symbol in array", () => {
    const mockWatchList = jest.fn(() => mockWatchListItems);
    expect(mockWatchList().length).toBe(5);
  });

  // This is testing that there is a key value pair of  "key": 2, "symbol": "MSFT" in the mock data
  it("should return return object from array containg specified key and value", () => {
    expect(mockWatchListItems).toEqual(
      expect.arrayContaining([{ key: 2, symbol: "MSFT" }])
    );
  });

  // test if we can do this with just the array
  // This is testing that there is not a key value pair of  "key": 99, "symbol": "AMZN" in the mock data
  it("should not return object from array containg an invalid key", () => {
    expect(mockCheckIfItemInWatchList()).toEqual(
      expect.not.arrayContaining([{ key: 99, symbol: "AMZN" }])
    );
  });
});

// These tests should test the actual function but with mock data, so we don't have to rely on a database
// where the data could change and render the tests useless.
describe("checkIfItemInWatchList", () => {
  it("should identify when an item is in the array", () => {
    const existingItem = "GOOG";
    const result = checkIfItemInWatchList(existingItem, mockWatchListItems);

    expect(result).toBe(true);
  });

  it('should filter the array and return { "key": 1, "symbol": "AMZN" }', () => {
    const mockFilterArray = jest.fn(() =>
      filterArray(symbol, mockWatchListItems)
    );
    const symbol = "AMZN";
    const expected = { key: 1, symbol: "AMZN" };

    expect(mockFilterArray(symbol, mockWatchListItems)).toEqual(
      expect.arrayContaining([expect.objectContaining(expected)])
    );
  });
});

describe("isItemInDatabase function should return correct values", () => {
  let mockFetchAllItemsFromDatabaseFunction;

  beforeAll(() => {
    // here we create a mock function that contains an array of objects
    mockFetchAllItemsFromDatabaseFunction = jest.fn(() => mockWatchListItems);
    // mockFetchAllItemsFromDatabaseFunction = () => {
    //   return jest.fn(() => mockWatchListItems)();
    // };
  });

  afterAll(() => {
    mockFetchAllItemsFromDatabaseFunction = null;
  });

  // test name: what am I going to test.  Should return true if value exists
  it('should return { "key": 1, "symbol": "AMZN" }', () => {
    // test isItemInDatabase by mocking second parameter (fetchAllItemsFromDatabaseFunction)
    // fetchAllItemsFromDatabaseFunction is mocked to be an array of objects
    // strictEqual is also case sensitive

    const searchItem = "AMZN";
    const expected = { key: 1, symbol: "AMZN" };
    const results = isItemInDatabase(
      searchItem,
      mockFetchAllItemsFromDatabaseFunction
    );

    expect(results).toStrictEqual(expected);
  });

  it("should not return a strict match due to lowercase symbol used", () => {
    const searchItem = "AMZN";
    const expected = { key: 1, symbol: "Amzn" };
    const results = isItemInDatabase(
      searchItem,
      mockFetchAllItemsFromDatabaseFunction
    );

    expect(results).not.toStrictEqual(expected);
  });
});
