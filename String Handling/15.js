// 15. Write a js program to find last occurrence of a character in a given string.
function findLastOccurrence(str, char) {
    let index = -1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            index = i;
        }
    }
    return index;
}

// Example usage
let str = "Hello world";
let char = "o";

console.log(findLastOccurrence(str, char));