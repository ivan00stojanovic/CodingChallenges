/* The example given: sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]), the answer being 44.

Calculate the average of each individual array:
[3, 4, 1, 3, 5, 1, 4] = (3 + 4 + 1 + 3 + 5 + 1 + 4) / 7 = 3
[21, 54, 33, 21, 77] = (21 + 54 + 33 + 21 + 77) / 5 = 41.2
Add the average of each array together:
3 + 41.2 = 44.2
Round the final average down:
Math.floor(44.2) = 44
import math
math.floor(44.2) = 44 */

const sumAverage = (arr) => {
    let sum = 0
    arr.forEach(subArray => {
      let lilSum = subArray.reduce((acc,cum) => acc + cum, 0)
        lilSum = (lilSum / subArray.length)
          sum += lilSum
    })
        return Math.floor(sum) 
    }
    
   
       
    
   
       