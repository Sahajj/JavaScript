//*****************  Stack and Heap Memory Allocations *****************************
//! Stack (Primitive)
//  value can't be accessed directly we will get a copy from 
//  the memory of the value and then we can use that
//? call by value


//! Heap (Non-Primitive)
//  Here we will get the reference of the Memory or basically saying 
//  we will get the location of the memory of the value saved there
//? call by reference 

let myYoutubeName = "Sahaj's Youtube"
let anotherName = "Chain aur code"

console.log(anotherName);
console.log(myYoutubeName);

let userOne = {
    email:"user@user.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "user@some.com"

// value will be same because it's call by reference
// both of them are working on the same page if something is changed it will affect both of them

console.log(userOne.email);
console.log(userTwo.email);