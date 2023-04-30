// 19. Write a js program to sort array elements in ascending or descending order.
let myArray = [3, 1, 4, 1, 5, 9, 2, 6, 5];

// Sort in ascending order
myArray.sort(function(a, b) {
  return a - b;
});
console.log("Ascending order: " + myArray);

// Sort in descending order
myArray.sort(function(a, b) {
  return b - a;
});
console.log("Descending order: " + myArray);