// 7. Write a js program to toggle case of each character of a string.
let str = "I'm RM_Muzamil"
result = "";
for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === char.toUpperCase()) {
        result += char.toLowerCase();
    } else {
        result += char.toUpperCase();
    }
}
console.log(result);