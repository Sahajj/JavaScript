// WAP to input two numbers 
//and perform arithmetic operations on those numbers.
function sum( num1, num2){
    return num1 + num2;
}

function su( num1, num2){
    return num1 - num2;
}

function mul( num1, num2){
    return num1 * num2;
}

function div( num1, num2){
    return num1 / num2;
}

function use(num1, num2, fnto){
    let result = fnto(num1, num2);
    return result;
}

let a = 2;
let b = 3;
console.log(`Here is the output ${use(a, b, sum)}`);