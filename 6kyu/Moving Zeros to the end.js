/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] */

function moveZeros(arr) {
    let result = []; let counter = 0
   for (let num of arr){
     num === 0 ? counter++ : result.push(num)
   }
   
   while(counter > 0) {
     result.push(0)
     counter--
   }
       return result
   }