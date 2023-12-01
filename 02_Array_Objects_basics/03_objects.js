// Singleton
// this means when ever you make an object using a constructor 
// that will result in creation of a singleton object 
// means that it will be only one object of its type 
// Singleton creations 
// Object.create // this is called from constructor method

//? But when we make it using other methods the objects will not be Singleton

//? ***********************OBJECTS LITERALS************************************* 
// Not like Array that we have only one way to ge the elements using the indexing 
// But we can use the keys in the object so retrieve the elements
// ****************** Symbol Question ****************************** 
//? How can you deploy the Symbol as a key in the Object?
// lets Do it
const mySym = Symbol("key1")

//! We can't use it Directly like mySym: "mykey1" this will return error.
//! 

const JsUser = {
    name: "Sahaj", // here the name is processed as "name"  or in simple words it's processed as a String
    "Full Name": "Sahaj Jain", //! Now there is no way to access this variable using the dot method.
    age: 18,
    mySym : "mykey1",
    location: "Jaipur",
    email: "people@googel.xom",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//! HOW to Access the objects VALUES

//? Optioin 1
// console.log(JsUser.name);
// console.log(JsUser.email);
// console.log(JsUser.lastLoginDays);

//? Option2 
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name"]);// Directly from suggest we are also not allowed to use the dot method
// console.log(JsUser["Full Name"]);
// console.log(JsUser.mySym); //!! Although this will return the value defined in mySym in the Object 
//! But When we check it's datatype it will not be symbol
// console.log(typeof(JsUser.mySym)); //! This will return String


//! To use Symbol as a key in object let's see 
const JsUser2 = {
    name: "Sahaj",
    age: 18,
    [mySym] : "mykey1", // to use it as a Symbol we will Add SQUARE BRACKETS AROUND IT
    location: "Jaipur",
    email: "people@googel.xom",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser2[mySym]); // return myKey1
// console.log(typeof(JsUser2[mySym])); // returns  Strings

//! HOW to Change the Values of Objects

JsUser.email = "Sahaj@openai.com"
// console.log(JsUser.email); 

//! How can we make A Object unchangeable we can do by...
Object.freeze(JsUser2)
JsUser.email = "Sahaj@meta.com"
// console.log(JsUser2);

//!! IN JS Functions are Treated as a Type 1 citizen 
//! basically saying koi bhed bhav ni hota h 

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());