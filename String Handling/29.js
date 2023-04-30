// 29. Write a js program to find last occurrence of a word in a given string.
let str = "Mera naam hai Geyaan ! Meri aa_vaz sun kar, sab ho jatey hain madhoshh";
let wordToFind = "hain";

let index = str.lastIndexOf(wordToFind);

if (index !== -1) {
  console.log("Found '" + wordToFind + "' last occurrence at index " + index);
} 