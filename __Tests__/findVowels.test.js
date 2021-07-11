import { findVowels } from "../scripts/vowels";

// Tese tests are not mocks they are function tests, as they call the actual function.

describe("find vowels returns the correct results", () => {
    test("should return 2", () => {
        const result = findVowels("hello");
        expect(result).toEqual(2);
    });

    test("should return 0", () => {
        const result = findVowels("zzzzzz");
        expect(result).toEqual(0);
    });

    test("should return 4", () => {
        const result = findVowels("Hello there");
        expect(result).toEqual(4);
    });

    test("should return", () => {
        const result = findVowels();
        expect(result).toEqual(0);
    });
});