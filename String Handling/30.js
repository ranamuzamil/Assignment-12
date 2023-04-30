// 30. Write a js program to search all occurrences of a word in given string.
let str = "Mera naam hai Geyaan ! Meri aa_vaz sun kar, sab ho jatey hain madhoshh";
let wordToFind = " ";

let indices = [];
let index = str.indexOf(wordToFind);

while (index !== -1) {
  indices.push(index);
  index = str.indexOf(wordToFind, index + 1);
}

if (indices.length > 0) {
  console.log("Found '" + wordToFind + "' at indices " + indices.join(", "));
} else {
  console.log("'" + wordToFind + "' not found in the string");
}