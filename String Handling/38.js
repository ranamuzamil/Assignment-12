// 38. Write a js program to remove all extra blank spaces from given string.
let str = "  Mera    naam  hai    Geyaan   !   Meri    aa_vaz    sun     kar,   sab    ho jatey   hain     madhoshh ";
str = str.replace(/\s+/g, " ").trim();

console.log("Original string: " + str);