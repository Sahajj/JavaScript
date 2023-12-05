// WAP to input the length and breath of rectangle and 
// calculate the area and parimeter of rectangle.
function recArea(length, breath){
    let perimeter = 2*(length +  breath)
    console.log(`Parameter of Rec = ${perimeter}`);
    let Area = length * breath
    console.log(`Area of Rec = ${Area}`);
}

recArea(3, 8);