// 21. Write a js program to remove first occurrence of a character from string.
let str = "Hello, world!";
let charToRemove = "o";

let index = str.indexOf(charToRemove);
if (index !== -1) {
  str = str.slice(0, index) + str.slice(index + 1);
}

console.log("Original string: " + str);