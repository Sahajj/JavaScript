const marvelHeros = ["Thor", "Ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]
const realHeros = ["Police" , "Fireman" , "Doctors"]
// marvelHeros.push(dcHeros) // adds one array to another as an element 
// console.log(marvelHeros);

// let allHeros = marvelHeros.concat(dcHeros) // adds two arrays and return new Array
// console.log(newArr);
//? has limitation that we can't add more than one array at a time 

//! Better then concat -->
// Spread 
//? solves the above problem we can now add more than one element at a time to a new array

// const allHeros = [...marvelHeros, ...dcHeros, ...realHeros]
// console.log(allHeros);


//! 

// const anotherArr  = [1, 2, 3, [4, 5, 6], 7, [8, 9,[10, 11]]]

// console.log(anotherArr);

// const realAnotherArr = anotherArr.flat(Infinity); // Never use infinity until you know how much there will be 
// not very used in real world but for just knowledge
// console.log(realAnotherArr);

console.log(Array.isArray("Sahaj"));
console.log(Array.from("Sahaj"));

console.log(Array.from({name:"Sahaj"})); // interesting case
// this will return an empty array because it can't make an array from this

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

// read about isArray, from and of