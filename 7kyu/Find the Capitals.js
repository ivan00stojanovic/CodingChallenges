/* Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] ); */

var capitals = function (word) {
	//we are going to get a word  with an x number of capital letters in it
  //what we need to return is an array with the indexes of the capital letter in giving string
  let arr = word.split('')
  let result = []
   arr.filter((el, i) => {
    if(el.toUpperCase() === el) result.push(i) 
  })
    return result
};