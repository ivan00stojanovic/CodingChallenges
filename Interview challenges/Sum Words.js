/* IT Academy Test 2 

3. 

Write a function which takes in two words. Return a third word which takes in a letter of each word one by one.
Rest of the letters of the longer word are added at the end.

Example: beo + grad = bgeroad
*/

function twoWord(a,b) {
    let result = ''
    let arr = [a,b].sort((a,b) => a.length - b.length)
      for(let i = 0; i < arr[0].length; i++){
        result+= arr[0][i] + arr[1][i]
      }
        for(let i = arr[0].length; i < arr[1].length; i++){
          result += arr[1][i]
        }
        return result
}

console.log(twoWord('beo', 'grad'))