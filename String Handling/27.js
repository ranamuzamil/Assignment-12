// 27. Write a js program to replace all occurrences of a character with another in a string.
let str = "Hello, world!";
let charToReplace = "l";
let newChar = "v";

str = str.split(charToReplace).join(newChar);

console.log(str);