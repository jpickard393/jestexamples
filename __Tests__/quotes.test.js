import { mockWatchListItems } from "../__tests__/fixtures/watchlist_data";
import { checkIfItemInWatchList, filterArray } from "../scripts/quotes";

describe('should return correct values from mockWatchListItems', () => {
    let mockCheckIfItemInWatchList;

    const initialiseMockData = () => {
        mockCheckIfItemInWatchList = jest.fn(() => mockWatchListItems);
    };

    // beforeAll runs before any of the tests are run so the data is set up at the start.
    beforeAll(() => {
        return initialiseMockData();
    });

    // runs after all test completed.
    afterAll(() => {
        mockCheckIfItemInWatchList = null;
    });

    it('should return a count of 5 to represent each symbol in array', () => {
        const mockWatchList = jest.fn(() => mockWatchListItems);
        expect(mockWatchList().length).toBe(5);
    });

    // This is testing that there is a key value pair of  "key": 2, "symbol": "MSFT" in the mock data
    it('should return return object from array containg specified key and value', () => {
        expect(mockCheckIfItemInWatchList()).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ "key": 2, "symbol": "MSFT" },)]
            )
        );
    });

    // This is testing that there is not a key value pair of  "key": 99, "symbol": "AMZN" in the mock data
    it('should not return object from array containg an invalid key', () => {
        expect(mockCheckIfItemInWatchList()).toEqual(
            expect.arrayContaining([
                expect.not.objectContaining({ "key": 99, "symbol": "AMZN" },)]
            )
        );
    });
});

// These tests should test the actual function but with mock data, so we don;t have to rely on a database
// where the data could change and render the tests useless.
describe('should return correct values from mockWatchListItems() by passing in mock data', () => {
    it("should return true", () => {
        const mockCheckIfItemInWatchList = jest.fn(() => checkIfItemInWatchList("GOOG", mockWatchListItems));
        expect(mockCheckIfItemInWatchList()).toBe(true);
    });

    it('should filter the array and return { "key": 1, "symbol": "AMZN" }', () => {
        const mockFilterArray = jest.fn(() => filterArray(symbol, mockWatchListItems));
        const symbol = "AMZN";
        const expected = { "key": 1, "symbol": "AMZN" };

        expect(mockFilterArray(symbol, mockWatchListItems)).toEqual(
            expect.arrayContaining([
                expect.objectContaining(expected)]
            )
        );
    });
});