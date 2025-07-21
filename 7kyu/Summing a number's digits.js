/* Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values. */

function sumDigits(number) {
  let array = number.toString().split('')
  if(array[0] === '-'){
    let chop = array.shift()
  }
    array = array.map(num => num = parseInt(num))
      return array.reduce((acc, cum) => acc + cum, 0)
}

//one liner solution

function sumDigits(number) {
  return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
}