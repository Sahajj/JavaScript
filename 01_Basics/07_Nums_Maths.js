const score = 400 

const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString().length);

// To fixed property
// console.log(balance.toFixed(1));

const otherNumber = 1123.8966

// console.log(otherNumber.toPrecision(3));

const hundereds = 1000000
// console.log(hundereds.toLocaleString());
// console.log(hundereds.toLocaleString('en-IN'));

// ****************************** Maths ********************

// console.log(Math);

// 
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(6.1));
// console.log(Math.floor(8.2));
// console.log(Math.min(4,5,6,7,8,99));
// console.log(Math.max(23,534,6,633,45,66));

// random value generator 
console.log((Math.random()*10) +1);
console.log((Math.floor(Math.random()*10) +1));
// 
const min = 10 
const max = 20 

console.log(Math.floor((Math.random() * (max - min + 1)) + min));