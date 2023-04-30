// 24. Write a js program to remove all repeated characters from a given string.
let str = "Hello, world!";
let newStr = "";

for (let i = 0; i < str.length; i++) {
  if (newStr.indexOf(str[i]) === -1) {
    newStr += str[i];
  }
}

console.log("Original string: " + str);
console.log("Modified string: " + newStr);