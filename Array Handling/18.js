// 18. Write a js program to search an element in an array.
let myArray = [1, 2, 3, 4, 5];
let searchElement = 3;
let found = false;

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] === searchElement) {
    found = true;
    break;
  }
}

if (found) {
  console.log(searchElement + " found in the array.");
} else {
  console.log(searchElement + " not found in the array.");
}