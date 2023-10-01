/* In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

More examples in the test cases.

Good luck!

If you like this Kata, please try: */

// The only integer we have is an array of numbers, in which only 2 numbers are only non-repeating
// The function should return the sum of the two numbers which appear only once
function repeats(arr) {
    let timesAppeared = {};
    // Count occurrences of each number
    arr.forEach(num => {
      timesAppeared[num] = (timesAppeared[num] || 0) + 1;
    });
  
    let sum = 0;
  
    // Sum numbers that occur only once
    arr.forEach(num => {
      if (timesAppeared[num] === 1) {
        sum += num;
      }
    });
  
    return sum;
  }
  
  