// 17. Write a js program to put even and odd elements of array in two separate array.
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenArray = [];
let oddArray = [];

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] % 2 === 0) {
    evenArray.push(myArray[i]);
  } else {
    oddArray.push(myArray[i]);
  }
}

console.log("Original array: " + myArray);
console.log("Even array: " + evenArray);
console.log("Odd array: " + oddArray);