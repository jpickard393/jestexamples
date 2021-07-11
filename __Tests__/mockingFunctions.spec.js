// Here we create a mock function that does not relate to any real function, but always returns 3.
const add = jest.fn(() => 3);

// This function is also a mock function but it takes a value and adds 3 to it.
const addWithValue = jest.fn((input) => input + 3);

//describe is a suite of tests that represent a feature we are testing.
describe("add function returns correct value", () => {
    it('has been called', () => {
        expect(add()).toBe(3);
        expect(add).toHaveBeenCalledTimes(1);
    });
});

describe('addWithValue returns the correct value', () => {
    it('returns 8', () => {
        expect(addWithValue(5)).toBe(8);
    });

    it('returns an error when no value passed in', () => {
        expect(addWithValue()).toBeNaN;
    });
});