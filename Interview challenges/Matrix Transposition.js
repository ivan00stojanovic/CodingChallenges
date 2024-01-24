/* IT Academy Test 2  

2.
Write a function which takes a function as a parameter and returns a new matrix whose row with the lowest sum of its elements is removed from the matrix.
Example:

2 4 8       2 4 8
3 1 9   =>  3 1 9
1 2 1       9 9 8
9 9 8 */

function removeShortest(matrix){
    let result = matrix.slice(0); let indexNeeded
    let tempLowest = matrix[0].reduce((acc, cum) => acc + cum, 0)
    matrix.forEach((arr, index) =>{
      const sum = arr.reduce((acc,cum) => acc + cum, 0)
      if(tempLowest > sum){
        tempLowest = sum
        indexNeeded = index
      }
    })
        result.splice(indexNeeded,1)
        return result
  }

  function removeLowestSumRow(matrix) {
    const rowSums = matrix.map(row => row.reduce((sum, element) => sum + element, 0));
  
    const indexOfMinSum = rowSums.indexOf(Math.min(...rowSums));
  
    const updatedMatrix = matrix.filter((row, index) => index !== indexOfMinSum);
  
    return rowSums
  }

  let test = [
    [2,4,8],
    [3,1,9],
    [1,2,1],
    [9,9,8]
    ]
  
  console.log(removeShortest(test))
  console.log(removeLowestSumRow(test))