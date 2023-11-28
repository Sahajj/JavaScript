const accountId = 144553
// to declare variables in js we can use two keywords let and var
let accountEmail = "sahaj@gmail.com"
// var is not used in modern js
/*
Prefer Not to use var
Because of issue in block scope nda functional scope
*/ 
var accountPassword = "12345"

// Not to be used BUT CAN BE USED LIKE THIS
accountCity = "Jaipur"

// In js if you define any variable and don't give it any value 
// It will be saved as undefined
let accountState;

// accountId = 2 // Not allowed

accountEmail = "sj@sj.com"
accountPassword = "2213121"
accountCity = "Delhi"

console.log(accountId);
// Better way to print when you have a lot of variables to print
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])