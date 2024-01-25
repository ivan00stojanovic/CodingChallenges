/*  IT Academy test 1

3.

Write a function which transpositions a matrix. 
Example for a 3x3 matrix:

1 5 8      1 2 9
2 8 4 -->  5 8 7
9 7 6      8 4 6
*/

function transpose(matrix){
  let result = []
    for(let i = 0; i < matrix[0].length; i++){
      let newArr = []
        matrix.forEach((arr, indexOfArr) => {
          newArr.push(arr[i])
        })
            result.push(newArr)
    }
      return result
}

let test = [
  [1,5,8],
  [2,8,4],
  [9,7,6]
]

console.log(transpose(test))