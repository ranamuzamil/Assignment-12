// 5. Write a js program to find second largest element in an array.
const myArray = [1, 2, 3, 4, 5];

let max = myArray[0];
let secondMax = myArray[0];

for (let i = 1; i < myArray.length; i++) {
  if (myArray[i] > max) {
    secondMax = max;
    max = myArray[i];
  } else if (myArray[i] > secondMax && myArray[i] < max) {
    secondMax = myArray[i];
  }
}

console.log("Second largest : " + secondMax);