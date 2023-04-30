// 11. Write a js program to find reverse of a string.
let str = "HELLO WORLD";
let reversedString = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversedString += str[i];
}

console.log("Original string: " + str);
console.log("Reversed string: " + reversedString); 