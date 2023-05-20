/*Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3 */

function highestRank(arr){
    //Your Code logic should written here
    //we have 1 parameter in the function, which should be an array filled with numbers
    //the end result of the function is the the  element which is the most prominent in the array?
    // what we need to do is loop through the array for each elements
    let numCounter = 1; let final = []
       for(let num of arr){
         let result = arr.filter(x => x === num)
           if(result.length > numCounter) {
             numCounter = result.length
             final = [num]
           }else if(result.length === numCounter){
             final.push(num)
           }
       }
           return Math.max(...final)
    }


console.log(highestRank( [12, 10, 8, 12, 7, 6, 4, 10, 12]), 12)
console.log(highestRank( [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]), 3)