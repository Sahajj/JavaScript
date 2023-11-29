// let score = "13" --> Number
// let score = "13abc" --> NaN
 
// let score = null // --> 0
// let score = undefined --> NaN

// let score = true -->1 

let score = "Sahaj" // --> NaN

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)

// console.log(typeof valueInNumber);
// console.log(typeof(valueInNumber));

// console.log(valueInNumber); // output as NaN // because it's not a number.

// String and numbers to Boolean

let isLoggedIn = "Sahaj"

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn);

// 1 --> boolean --> true
// "" --> boolean --> false //empty string is false 
// "Sahaj" --> boolean --> true // String with a value is True

// Number to String 

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ******************** Operations **************************

let value = 3
let negValue = -value;
// console.log(negValue)

// ************* Basic Operations ***********************

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Sahaj"

// ************* Adding Strings ************
// let str3 = str1+str2; // hello Sahaj
// console.log(str3);

// *************** Complex Situation ****************

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); //122
// console.log(1+2+"2"); // 32 // HOW? WHY?

// console.log(3+4*5%6); // this is a wrong approach We can use ( ) to specify which to solve first

// Example of How it should be written 
// console.log(((2+3)*5)%6);
// This is the write way to write it because we don't know that if JS uses BODMAS

//
// console.log(+true); // 1 // THIS IS NOT GOOD PRACTICE 
// console.log(true+); // this will throw an error

// console.log(+""); // THIS IS NOT GOOD PRACTICE 

// *********************** ASSIGNMENT OPERATION ****************

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // THIS IS NOT GOOD PRACTICE 

let gameCounter = 100 
// gameCounter++;
// after // POSTFIX The increment operator increments and returns the value before incrementing.
// value dedo fir inc kar do 

// ++gameCounter; 
// Before // PREFIX the increment operator increments and returns the value after incrementing.
// inc kar do fir value de do 

// console.log(gameCounter);
