/* Make a function "add" that will be able to sum elements of list continuously and return a new list of sums.

For example:

add [1,2,3,4,5] == [1, 3, 6, 10, 15], because it's calculated like 
this : [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4, 1 + 2 + 3 + 4 + 5] */


function add(arr) {
    //we will have only 1 parameter which will be an array
    // we will need to return an array with the same length, which contains numbers that sum 
      let result = [arr[0]]
       for(let i = 1; i < arr.length; i++){
         let additionNum = result[result.length -1]
         result.push(additionNum + arr[i])
       }
  
        return result    
}