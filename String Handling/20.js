// 20. Write a js program to count frequency of each character in a string.
let str = "Hello, world!";
let freq = {};

for (let i = 0; i < str.length; i++) {
  let char = str.charAt(i);
  if (freq[char]) {
    freq[char]++;
  } else {
    freq[char] = 1;
  }
}

console.log("Character frequencies:");
for (let char in freq) {
  console.log(char + " : " + freq[char]);
}