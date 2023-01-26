/* Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */

function findAverage(array) {
    if(array.length == 0) return 0;
    let average = 0;
    array.forEach(x => average += x)
    return average / array.length
}

