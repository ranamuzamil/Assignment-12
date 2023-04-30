// 13. Write a js program to reverse order of words in a given string
function reverseWords(str) {
    let words = str.split(" ");
    words = words.reverse();
    return words.join(" ");
}
// Example usage
let str = "Hello world, this is a test";

console.log(reverseWords(str));
