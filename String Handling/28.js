// 28. Write a js program to find first occurrence of a word in a given string.
let str = "Mera naam hai Geyaan ! Meri aa_vaz sun kar, sab ho jatey hain madhoshh";
let wordToFind = "Geyaan";

let index = str.indexOf(wordToFind);

if (index !== -1) {
  console.log("Found '" + wordToFind + "' at index " + index);
}