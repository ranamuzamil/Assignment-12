// 9. Write a js program to insert an element in an array.
let myArray = [1, 2, 3, 4, 5];
const elementToInsert = 6;
const positionToInsert = 3;

myArray.splice(positionToInsert, 0, elementToInsert);

console.log("Original array: " + myArray);