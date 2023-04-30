// 10. Write a js program to delete an element from an array at specified position.
let myArray = [1, 2, 3, 4, 5];
const positionToDelete = 2;

myArray.splice(positionToDelete, 1);

console.log("Original array: " + myArray);