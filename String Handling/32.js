// 32. Write a js program to remove first occurrence of a word from string.
let str = "The quick brown fox jumps over the lazy dog. The quick brown dog jumps over the lazy fox.";
let wordToRemove = "brown";

let index = str.indexOf(wordToRemove);

if (index !== -1) {
  str = str.substring(0, index) + str.substring(index + wordToRemove.length);
}

console.log(str);