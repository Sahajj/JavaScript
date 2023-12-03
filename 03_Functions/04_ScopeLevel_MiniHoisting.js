function one () {
    const userName = "Sahaj"

    function two(){
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website);

    two();
}

// one();

if(true) {
    const username = "Sahaj"
    if(username === "Sahaj"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

//? *********** Interesting  ***********************

console.log(addone(5));

//! This is also a function 
function addone (num){
    return num+1;
}




// console.log(addTwo(5)); //! this will return an error 
//! Because the variables were created after and called before 
//! this is also a function
const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(5)); //! On the other hand this will work Just fine

//? ****************** HOISTING in js ******************