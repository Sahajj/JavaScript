//? *********** This Key word ****************
const user = {
    username: "Sahaj",
    price: 999,

    welcomeMessage: function() {
        //! here the this key word helps you to use the value from the scope of this object.
        //! This here mean the current context
        console.log(`${this.username}, Welcome to Website`);
        console.log(this); // ! This will print the current context 
    }
}

// user.welcomeMessage()
//! Current context will be updated 
// user.username = "Sam"
//! Current context updated and printed 
// user.welcomeMessage()

// console.log(this); //! This will return an empty paranthsis here but it will return a lot of thing when we try the same in the browser

// function chai() {
//     let usename = "Sahaj"
//     console.log(this.username); //! Undefined
// }

// chai()

// const chai = function() {
//     let username  = "Sahaj"
//     console.log(this.username); //! Undefined
// }
// chai();

//? Arraow Funtion 
//  const chai = () => {
//         let username  = "Sahaj"
//         console.log(this.username); // THis will also return Undefined 
// }
// chai();

// Syntax of Arrow Function
// () => {}


//! Basic Arrow 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4));

//! Implicit return 
//! we agree that you don't have to implicitly write return
// const addTwo = (num1, num2) => num1 + num2;

//! if warped in () these it's also Implicit return Arrow Function
const addTwo = (num1, num2) => (num1 + num2);