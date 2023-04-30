// 14. Write a js program to find first occurrence of a character in a given string.
function findFirstOccurrence(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}

// Example usage
let str = "Hello world";
let char = "o";

console.log(findFirstOccurrence(str, char));