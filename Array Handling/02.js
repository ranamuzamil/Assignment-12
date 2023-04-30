// 2. Write a js program to print all negative elements in an array.
const myArray = [-1, 2, -3, 4, -5];

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] < 0) {
    console.log(myArray[i]);
  }
}