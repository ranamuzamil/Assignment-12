// 23. Write a js program to remove all occurrences of a character from string.
let str = "Hello, world!";
let charToRemove = "l";

str = str.split(charToRemove).join('');

console.log("Original string: " + str);