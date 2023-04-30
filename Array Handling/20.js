// 20. Write a js program to sort even and odd elements of array separately.
let myArray = [5, 2, 7, 4, 9, 6, 1, 8];
let evenArray = [];
let oddArray = [];

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] % 2 === 0) {
    evenArray.push(myArray[i]);
  } else {
    oddArray.push(myArray[i]);
  }
}
evenArray.sort(function(a, b) {
  return a - b;
});

oddArray.sort(function(a, b) {
  return a - b;
});
console.log("Original array: " + myArray);
console.log("Sorted even array: " + evenArray);
console.log("Sorted odd array: " + oddArray);