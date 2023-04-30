// 25. Write a js program to replace first occurrence of a character with another in a string.
let str = "Hello, world!";
let charToReplace = "l";
let newChar = "x";

let index = str.indexOf(charToReplace);
if (index !== -1) {
  str = str.slice(0, index) + newChar + str.slice(index + 1);
}

console.log(str);