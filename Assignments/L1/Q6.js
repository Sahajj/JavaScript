// WAP to input n numbers and log the average of those number.
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function calculateAverage(array) {
    let total = 0;
    let count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total / count;
}

console.log(calculateAverage(array));