//? ****************** Functions **************************
//! A js function is a block of code designed to perform a particular task.
//! A js function is executed when "something" invokes it (calls it).

//! Function to compute the product of p1 and p2 
function myFunction(p1, p2) {
    return p1*p2;
}

let x = myFunction(11,22) //! calling the function and storing the return value in x

//! printing the output 
// console.log(x);

// Syntax
//   keyword
//? {function "name_of_Function"(Parameters_of_the_function){
//?           Code to execute on those parameters and a return statement that is used 
//?           to return the output of the function
//?         }
//?     } 

// Functions invocation
//! the code inside the function will execute when "something" Invokes (calls the fun)
//!    - When an event occurs(When a use clicks a button)
//!    - When it is invoked (called) from js code
//!    - Automatically (self Invoked)

// Function Return 
//! When js reaches a **return** statement, the function will stop executing.
//! If a function was invoked from a statement, JS will "return" to execute the code after the invoke statement
//! Functions often compute a return value. The return value is "returned" back to the "caller".

// function sayMyName() {
//     console.log("S");
//     console.log("A");
//     console.log("H");
//     console.log("A");
//     console.log("J");
// }

// sayMyName() --> this is Executes the function 
// sayMyName --> This is only the reference of the function

// function addTwoNumbers(number1, number2){
    // console.log( number1 + number2);
// }

// addTwoNumbers(3,6); //! This is the ideal case 
//! but what if we give the String in place of number. Lets see
// addTwoNumbers(3, "4"); // returns 34 which is not the sum but concatenation of strings
// addTwoNumbers(3, "A") // returns 3A 

//! Parameters and Arguments 
//! function somefun(num1, num2) "This is an parameter"  
//! addTwoNumbers(3 , null) "This is an Argument"

function addThreeNumbers(num1, num2, num3) {
    return num1+num2+num3;
}

const j = addThreeNumbers(3, 5, 8);
// console.log(typeof (j));

//? ********************* Taking values in fun ***********************

function loginUserMessage(username) {
    if (username === undefined){
        console.log("Please enter a Username");
        return
    }
    return `${username} just logged in `
}

console.log( loginUserMessage("Sahaj") ); 
console.log(loginUserMessage());

//! Predefined value of parameters

function loginUserMessage2(username = "sam" ) { // here the value is predefined
    if (!username){ // Another way of write the same thing
        console.log("Please enter a Username");
        return
    }
    return `${username} just logged in `
}
