/* Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]. */

function countPositivesSumNegatives(input) {
    // the only parameter that we have is an array filled with numbers
    // the wanted result is new array which consists of two elements, count of the positive elements and sum of the negative ones
    // input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], oputput: expected = [10, -65]
    //let result = []
    if(input === null || input.length < 1) return []
    let positiveArray = input.filter(x => x > 0)
      let countPositive = positiveArray.length
    let negativeArray = input.filter(x => x <0)
    let sumNegative = 0; negativeArray.forEach( x=> sumNegative +=x )
        return [countPositive,sumNegative]
    }