/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */

function sumMix(x){
    let sum = 0
    for( let el of x){
      if(typeof el === 'string'){
        sum += parseInt(el)
      }else{
        sum += el
      }
    }
        return sum
  }