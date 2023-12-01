//? ****************** De Structuring ***************************
const course = {
    courseName: "JS in hindi",
    price: "999",
    courseInstructor: "Sahaj"

}
// course.courseInstructor //? repeating this will make 
//? redundant code that calls the same thing again and again  

//   {name of the De Structure : shortName of de-structure}
//! Once given a short name then you can't give the main name 
const {courseInstructor : Instructor} = course

// console.log(courseInstructor); // returns sahaj 
console.log(Instructor); // returns sahaj 


//? PRops FOR REACT NOT RELATED TO JAVASCRIPT

// const navbar = ({company}) => { //! here curly braces are used for destructuring

// }

// navbar(company = "Decryptors")

//? ******************** APIS ****************************
// {
//     "name": "Sahaj",
//     "courseName": "js in hindi",
//     "price": "free"
// }


//! API IN ARRAYs form 
// [
//     {},
//     {},
//     {}
// ]

// (random user me api) check it out 
