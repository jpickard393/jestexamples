import { findVowels } from "../scripts/vowels";

describe("find vowels", () => {
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
});