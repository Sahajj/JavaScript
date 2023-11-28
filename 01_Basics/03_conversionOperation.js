// let score = "13" --> Number
// let score = "13abc" --> NaN
 
// let score = null // --> 0
// let score = undefined --> NaN

// let score = true -->1 

let score = "Sahaj" // --> NaN

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(typeof(valueInNumber));

console.log(valueInNumber); // output as NaN // because it's not a number.

// String and numbers to Boolean

let isLoggedIn = "Sahaj"

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

// 1 --> boolean --> true
// "" --> boolean --> false //empty string is false 
// "Sahaj" --> boolean --> true // String with a value is True

// Number to String 

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);