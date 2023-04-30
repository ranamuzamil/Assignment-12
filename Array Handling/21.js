// 21. Write a js program to left rotate an array.
let myArray = [1, 2, 3, 4, 5];
const rotations = 2;

for (let i = 0; i < rotations; i++) {
  const firstElement = myArray.shift();
  myArray.push(firstElement);
}

console.log("Original array: " + myArray);