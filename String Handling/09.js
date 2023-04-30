// 9. Write a js program to count total number of vowels and consonants in a string.
let str = "Hello, world!";
let vowelCount = 0;
let consonantCount = 0;

str = str.toLowerCase();

for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (/[aeiou]/.test(char)) {
    vowelCount++;
  } else if (/[a-z]/.test(char)) {
    consonantCount++;
  }
}

console.log("Vowels: " + vowelCount);
console.log("Consonants: " + consonantCount);