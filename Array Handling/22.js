// 22. Write a js program to right rotate an array.
let myArray = [1, 2, 3, 4, 5];
const rotations = 2;

for (let i = 0; i < rotations; i++) {
  const lastElement = myArray.pop();
  myArray.unshift(lastElement);
}

console.log("Original array: " + myArray);