const name = "Sahaj"
const repoCount = 50 

// console.log(name + repoCount + " Value");
// Outdated Modern JS prefers Backticks

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

let gameName = new String('Sahaj-sj')

// console.log(gameName[0]);  //S
// console.log(gameName.__proto__); // {}
// console.log(gameName.length); // 8
// console.log(gameName.toUpperCase()); //SAHAJ-SJ
// index starts at 0 
// console.log(gameName.charAt('4')); // j
// console.log(gameName.indexOf('j')); // 4

// subString

const newString = gameName.substring(0,2)
// can't use -ve value have to start from 0 
// console.log(newString); //Sa

const anotherString = gameName.slice(-8,4) 
// first index give where to start from and second is how much to cut/slice
// console.log(anotherString); // Saha

const newStringOne = "   Sahaj  "
console.log(newStringOne);
console.log(newStringOne.trim());
// we can also use trim start and trim end

//  this %20 is basically a space that has been written here
const url = "https://googe.com/sahaj%20jain"
console.log(url.replace('%20', '-'));
console.log(url.includes('goat'));
// conversion of string into an array
console.log(gameName.split('-'));