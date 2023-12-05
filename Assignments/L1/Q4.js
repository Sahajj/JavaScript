// WAP to calculate total marks in two subject and then calculate percentage.

function percentageOf(num , total) {
    // num% of total
    return ((num/100)*total);
}

function percentage(num , total) {
    // num/total * 100 = percentage
    return ((num/total)*100);
}

let num = 20;
let total = 1000;
console.log(`${num} is ${percentage(num, total)} % Percentage of ${total}`);
console.log(`${num} % of Percentage of ${total} = ${percentageOf(num, total)} `);