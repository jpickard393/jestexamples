export const findVowels = str => {
    let count = 0;
    const vowels = ["a", "i", "e", "o", "u"];
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) count++;
    }
    return count;
};