/* The Stanton measure of an array is computed as follows: count the number of occurences for value 1 in the array. Let this count be n. 
The Stanton measure is the number of times that n appears in the array.

Write a function which takes an integer array and returns its Stanton measure.

Examples
The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.

The Stanton measure of [1, 4, 1, 2, 11, 2, 3, 1] is 1, because 1 occurs 3 times in the array and 3 occurs 1 time. */

function stantonMeasure(n){
  let counter = 0
  let stanton = 0
  for(let i=0; i<n.length; i++){
    if(n[i]=== 1){
      counter++
      }
    }
  for(let j=0; j<n.length; j++){
    if(n[j] === counter){
      stanton++
      }
    }
  return stanton
}