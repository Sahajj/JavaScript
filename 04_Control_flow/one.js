// If Statement 

// const isUserLoggedIn = true

// const temperature = 41

// if (temperature <= 40) {
//     console.log("less than 40");
// }
// else {
//     console.log("temperature is greater than 40 ");
// }

// if ( true/*!Condition*/ ){
//     /*Arguments */
// }

//  <, >, <=, >=, ====, ==, != , !==  

//? Scope Related 

// const score = 200 

// if (score > 100) {
//     const power  = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power ${power}`);

//? Short hand notation 

const balance = 1000;

// This type of code is highly unreadable and not used in the industry
// if(balance > 500) console.log("test"),
// console.log("test2");

// if (balance > 500) console.log("Test"); // This is okh

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750 ");
// } else if (balance < 900) {
//     console.log("less than 900 ");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true 
const debitCard = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
}