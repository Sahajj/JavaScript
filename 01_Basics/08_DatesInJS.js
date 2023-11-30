// Dates 

let myDate = new Date() 
// console.log(myDate.toString()); // Wed Nov 29 2023 19:44:17 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString()); // 2023-11-29T14:14:17.715Z
// console.log(myDate.toJSON()); // 2023-11-29T14:14:17.715Z
// console.log(myDate.toLocaleString()); // 29/11/2023, 19:44:17
// console.log(myDate.toDateString());  // Wed Nov 29 2023
// console.log(typeof myDate); //Object

// let myCreatedDate = new Date(2023, 0, 23)
// months start from 0 in js 
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2023, 0 ,23, 5, 3)

// let myCreatedDate = new Date("2023-01-14") yy-mm-dd
let myCreatedDate = new Date("01-14-2023") // mm--dd--yy
console.log(myCreatedDate.toLocaleString());

// let myTimeStamps = Date.now()
// // console.log(myTimeStamps);
// // console.log(myCreatedDate.getTime()); 
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getTime());

console.log(`${newDate.getDay()} and the time`);

newDate.toLocaleString('default',{
    weekday: "long"
})