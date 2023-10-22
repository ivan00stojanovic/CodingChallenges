/* Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7] */

function largest(n, array) {
    let result = []
    let sorted = array.sort((a,b) => b - a)
      for(let i = n - 1; i >= 0; i--){
        result.push(sorted[i])
      }
    return result;
  }

  