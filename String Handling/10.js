// 10. Write a js program to count total number of words in a string.
let str = "Most respectfully! I beg to state that i'm a student";
let wordCount = 0;
let words = str.split(" ");

for (let i = 0; i < words.length; i++) {
  if (words[i] !== "") {
    wordCount++;
  }
}

console.log("Total number of words: " + wordCount);