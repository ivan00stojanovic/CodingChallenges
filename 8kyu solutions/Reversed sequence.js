/* Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1] */

const reverseSeq = n => {
    let result = []
    //we are going to be given a number, will always be positive
    //need to return an array which starts with given number and its decrementations will be the remaining elements
    for(let i = n; i > 0; i--){
      result.push(n)
      n--
    }
    return result;
  };