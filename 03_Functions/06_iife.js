// Immediately Invoked Function Expressions (IIFE)
//! 1 We create a new scope different from the global scope 
//!   SO THAT WE DON'T GET POLLUTION FROM GLOBAL SCOPE So WE MAKE OUR OWN SCOPE
//! 2 Also It should be immediately executed 
//! This is why we write  IIFE for such Functions

(function chai() {
    console.log(`DB Connected`)
})();

//! problem  // This will give error
( () => {
    console.log(`DB CONNECTED TO LOG from arrow`);
})();

//? After adding a ; to above fun
( function aurcode() {
    // this is aka Named iffe
    console.log(`DB CONNECTED TO LOG from fun`);
})();
// Works like a Charm

//! This give error of This is not a function
//! WHY? BECAUSE --> we need to end and iife fun with a ; if not we will get this type of error
//! ALWAYS  remember to add a semicolon after an iife fun 

//? Variables in iife and how to give it to functions
((name) => { 
    // This is called an unnamed iffe
    console.log(`Db Connect from variables iffe ${name} `);
})("Sahaj");