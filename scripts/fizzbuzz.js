export const fizzbuzz = (num) => {
    if (numi % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else {
        return num;
    }
};

// Rules
// For every number that is divisible by 3 and 5, console log "FizzBuzz".
// For every number that is divisible by only 3 and not 5, console log "Fizz".
// For every number that is divisible by only 5 and not 3, console .log "Buzz".