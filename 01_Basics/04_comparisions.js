// console.log(2 > 1);
// console.log(2 >= 1)
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// ? Above Comparisons are simple and same as other langs

// These should give me error in normal 
// but js don't give me that 
// console.log("2" > 1); // return true
// console.log("02" > 1); // return true

// SO, Whenever we use Comparison Operations we need to take care that above situation never happens

// ! *********************** These type of comparisons will get you in Problems*********************

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// ****************** 
// The reason is that an equality check == and comparison > < >= <= works differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false 

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// ! above All will be false

// ************************ Strict Check *******************
console.log(null === 0); // false
console.log("2" === 2); // false
// This is true but with Strict check will never give it true
console.log(2 == "2"); // true
console.log(2 === 2); // true

