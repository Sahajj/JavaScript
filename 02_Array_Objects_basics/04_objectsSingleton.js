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
// console.log(regularUser.fullName?.userFullName.firstName); 
//! you can see here is a extra ? from the before statement
//!  this is because we have put a condition to check that it it's correct then only move ahead else return false

//? **************** Combining/Concatenating Objects  *******************

const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "A", 4: "B"}

// const obj3 = {obj1, obj2}
// console.log(obj3); //! this will have the same Problem as Arrays 
//! This will return an object with two objects in it 
//! like this -- > { obj1: { '1': 'A', '2': 'B' }, obj2: { '3': 'A', '4': 'B' } }

//! which is not cool
//! So, 
const obj3 = Object.assign({}, obj1, obj2) //! returns { '1': 'A', '2': 'B', '3': 'A', '4': 'B' }
//! But we should put curly braces before this because it's good practice and 
//! when there are more than one value it will again return value like above 
//! for that to not happen we use {}

//! const obj3 = Object.assign({TARGET}, {SOURCE}) 
console.log(obj3);

//? REAL WAY to do it  USING 
//! ******************* SPREAD *************** 

const obj8 = {...obj1, ...obj2} 
console.log(obj8);

//? ******************** Dealing With DataBases w/t obj **************************************

const users = [
    {
        id:1,
        email: "s@mail.cox"
    },
    {
        id:1,
        email: "s@mail.cox"
    },
    {
        id:1,
        email: "s@mail.cox"
    },
]

//!  to apply operation in this type of objects or Arrays
console.log(users[1].email);
