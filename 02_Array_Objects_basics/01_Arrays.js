//******************** array ****************

const myArr = [1, 2, 3, 4, 5]
//! we can resize the arrays hence dynamic 
//! we can have a mix of primitives in an array 
//! Associative arrays are not possible
//!     console.log(myArr[0]) is the only right way to get the first element of the array 
//!     console.log(myArr["one"]) is not the right way to get the elements of the array
//! Arrays are indexed from 0 
//! In Arrays whenever we make a copy of the Arrays it makes shallow copies of the main array 
//! Shallow copy == it's a copy of an object whose properties share the same reference point 
//! (BASICALLY CALL BY REFERENCE IF I CHANGE A COPY THE REAL WILL CHANGE TOO) 
//! Deep copies == it's a copy of an object whose properties do not share the reference points 
//!  (BASICALLY CALL BY VALUE SO IF CHANGE THE VALUE OF THE COPY IT WILL NOT IMPACT ON THE MAIN ELEMENT)

const myHeros = ["Shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]); //2

//? METHODS IN ARRAYS
// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9); // adds element at 0th index of array and inc all index for all other elements (BAD FOR OPTIMIZATION)
// myArr.shift();    // removes First element of the array and dec all the index of all the other elements (BAd for Optimization)
// console.log(myArr.includes(9)); // false
// console.log(myArr.indexOf(9)); // -1 means it don't know
// console.log(myArr.indexOf(3)); // 2 

const newArr = myArr.join() // adds all elements of an array into a string 

// console.log(myArr);
// console.log(newArr); // it's a string that prints out 1,2,3,4,5
// console.log(typeof newArr); //string


//! SLICE AND SPLICE
console.log("A", myArr); 
const myn1 = myArr.slice(1,3) // does not manipulate the original array

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3) // Manipulated my original array
console.log(myn2);
console.log("C", myArr);

//! Slice is a lier & Splice is just Evil 