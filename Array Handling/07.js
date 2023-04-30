// 7. Write a js program to count total number of negative elements in an array.
const myArray = [-1, 2, -3, 4, -5];

let negativeCount = 0;

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] < 0) {
    negativeCount++;
  }
}

console.log("Total negative elements: " + negativeCount);