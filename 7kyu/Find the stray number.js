/* You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3 */

function stray(numbers) {
 let obj = {};

  for (let num of numbers) {
    obj[num] = (obj[num] || 0) + 1;
  }

  for (let key in obj) {
    if (obj[key] === 1) {
      return Number(key);
    }
  }
}