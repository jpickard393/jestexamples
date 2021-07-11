import { myCallbackFunction } from "../scripts/myCallbackFunction";

describe("Test myCallbackFunction", () => {
    test("Should return 12", () => {
        const mockCallback = jest.fn();
        mockCallback.mockReturnValueOnce(10);         // mocks the callback we pass in
        const result = myCallbackFunction(2, mockCallback);
        expect(result).toBe(12);
    })
});

