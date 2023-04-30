// 6. Write a js program to count total number of even and odd elements in an array.
const myArray = [1, 2, 3, 4, 5];

let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

console.log("Total even elements: " + evenCount);
console.log("Total odd elements: " + oddCount);