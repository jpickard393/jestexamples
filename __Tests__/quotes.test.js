import { mockWatchListItems, singleResult } from "../__tests__/fixtures/watchlist_data";

describe('quotes should return correct values', () => {
    let mockCheckIfItemInWatchList;

    const initialiseMockData = () => {
        mockCheckIfItemInWatchList = jest.fn(() => mockWatchListItems);
    };

    beforeAll(() => {
        return initialiseMockData();
    });

    afterAll(() => {
        mockCheckIfItemInWatchList = null;
    });

    it('should return a count of 5 to represent each symbol in array', () => {
        const mockWatchList = jest.fn(() => mockWatchListItems);
        expect(mockWatchList().length).toBe(5);
    });

    it('should return return object from array containg specified key and value', () => {
        expect(mockCheckIfItemInWatchList()).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ "key": 2, "symbol": "MSFT" },)]
            )
        );
    });

    it('should not return object from array containg an invalid key', () => {
        expect(mockCheckIfItemInWatchList()).toEqual(
            expect.arrayContaining([
                expect.not.objectContaining({ "key": 99, "symbol": "AMZN" },)]
            )
        );
    });
});