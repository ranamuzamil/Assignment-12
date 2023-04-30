// 12. Write a js program to check whether a string is palindrome or not.
function isPalindrome(str) {
    str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();

    return str === str.split('').reverse().join('');
}
// Example usage
let str1 = "racecar";
let str2 = "hello";

console.log(str1 + " is palindrome: " + isPalindrome(str1));
console.log(str2 + " is palindrome: " + isPalindrome(str2));  