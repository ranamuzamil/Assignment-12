// 26. Write a js program to replace last occurrence of a character with another in a string.
let str = "Hello, world!";
let charToReplace = "w";
let newChar = "t";

let index = str.lastIndexOf(charToReplace);
if (index !== -1) {
  str = str.slice(0, index) + newChar + str.slice(index + 1);
}

console.log(str);