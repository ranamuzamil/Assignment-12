// 8. Write a js program to find total number of alphabets, digits or special character in a string.
let str = "ramuzamil44@gmail.com";

let alphabetCount = 0;
let digitCount = 0;
let specialCharCount = 0;

for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (/[a-zA-Z]/.test(char)) {
    alphabetCount++;
  } else if (/[0-9]/.test(char)) {
    digitCount++;
  } else {
    specialCharCount++;
  }
}

console.log("Alphabets: " + alphabetCount);
console.log("Digits: " + digitCount);
console.log("Special characters: " + specialCharCount);