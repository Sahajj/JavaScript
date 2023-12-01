//? *************** Singleton Objects *********************
// this means when ever you make an object using a constructor 
// that will result in creation of a singleton object 
// means that it will be only one object of its type 
// Singleton creations 
// Object.create // this is called from constructor method have a Singleton Object

// const tinderUser = new Object() //! Will return {} empty object 
const tinderUser = {} //! Will return {} empty Object

//! Both are same Internally 
//! But the Key Difference is First one is a Singleton object and Second one is non-Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false 

// console.log(tinderUser)

//? ************ Passing Objects in Objects *********************

const regularUser = {
    email: "some@gmail.xom",
    fullName: {
        userFullName: {
            firstName: "Sahaj",
            lastName: "jain"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);
//? **************** Optional Chaining *******************
console.log(regularUser.fullName?.userFullName.firstName); 
//! you can see here is a extra ? from the before statement
//!  this is because we have put a condition to check that it it's correct then only move ahead else return false

//? ****************  *******************