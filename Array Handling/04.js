// 4. Write a js program to find maximum and minimum element in an array.
const myArray = [1, 2, 3, 4, 5];

let max = myArray[0];
let min = myArray[0];

for (let i = 1; i < myArray.length; i++) {
  if (myArray[i] > max) {
    max = myArray[i];
  }
  if (myArray[i] < min) {
    min = myArray[i];
  }
}

console.log("Maximum : " + max);
console.log("Minimum : " + min);