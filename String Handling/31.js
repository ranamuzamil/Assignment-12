// 31. Write a js program to count occurrences of a word in a given string.
let str = "The quick brown fox jumps over the lazy dog. The quick brown dog jumps over the lazy fox.";
let wordToFind = "brown";

let count = 0;
let index = str.indexOf(wordToFind);

while (index !== -1) {
  count++;
  index = str.indexOf(wordToFind, index + 1);
}

console.log("'" + wordToFind + "' occurs " + count + " time(s) in the string");