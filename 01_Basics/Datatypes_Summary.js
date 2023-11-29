// Primitive 

// Are call By value
//? 7 Types : Strings, Number, BigInt, null, undefined, boolean, Symbol 

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id == anotherId); // false
// console.log(id === anotherId); // false

const bigNumber = 100n

// Reference Type dataTypes AKA Non-primitives

//? Array, Object, Functions

// Arrays
const heros = ["Shaktiman", "naagraj", "Doga"]

// Objects in Curly braces
let myObj ={
    name: "Sahaj",
    age: "34"
}

// Functions
// We can Also use Functions as an Variable type in JS

const myFunction = function(){
    console.log("Hello mom");
}
