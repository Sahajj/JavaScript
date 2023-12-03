function calculateCartPrice (val1, val2, ...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 800)); // returns [500, 800]

const user = {
    username: "Sahaj",
    price: 199
}

function handelObject(anyobject){
    console.log(`UserName is ${anyobject.username} and price is ${anyobject.price}`);
}

handelObject({
    username: "Sam",
    price: 200
});

// 
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));