var c = 300 //! this is a Global scope

if (true){
    //! This is a local/block scope
    let a = 10  
    const b = 20 
    var c = 30 
}

// console.log(a); //! returns error 
// console.log(b); //! returns error 
console.log(c); //! gives value 

//! We should avoid var for this reason 
